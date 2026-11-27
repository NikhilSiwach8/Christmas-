import random
from game_calculations import GameCalculations
from game_events import (rite_awaken_event, aurora_mult_event, symbol_sacrifice_event, frost_wheel_event)
from src.calculations.ways import Ways
from src.calculations.statistics import get_random_outcome
from src.events.events import update_global_mult_event, reveal_event, fs_trigger_event


class GameExecutables(GameCalculations):
    """Ways evaluation + Frozen Rite features (scatter colours, Symbol Removal, rites, wheel)."""

    # ---- ways ----------------------------------------------------------------------------------
    def evaluate_ways_board(self, multiplier: int = 1):
        self.win_data = Ways.get_ways_data(self.config, self.board, global_multiplier=multiplier, multiplier_strategy="global")
        if self.win_data["totalWin"] > 0:
            Ways.record_ways_wins(self)
            self.win_manager.update_spinwin(self.win_data["totalWin"])
        Ways.emit_wayswin_events(self)

    def evaluate_base_board(self):
        """Aurora random multiplier on winning base spins."""
        mult = get_random_outcome(self.cond("base_mult_weights", self.config.base_mult_weights))
        probe = Ways.get_ways_data(self.config, self.board, multiplier_strategy="global")
        if mult > 1 and probe["totalWin"] > 0:
            self.global_multiplier = mult
            aurora_mult_event(self, mult)
        self.evaluate_ways_board(multiplier=self.global_multiplier)
        self.global_multiplier = 1

    # ---- board drawing: scatter colours + persistent symbol conversions ---------------------------
    def draw_board(self, emit_event: bool = True, trigger_symbol: str = "scatter") -> None:
        cond = self.get_current_distribution_conditions()
        surge = self.gametype == self.config.freegame_type and getattr(self, "surge", False)
        if surge:
            saved = cond["reel_weights"][self.gametype]
            cond["reel_weights"][self.gametype] = {"FRS": 1}
        try:
            super().draw_board(emit_event=False, trigger_symbol=trigger_symbol)
        finally:
            if surge:
                cond["reel_weights"][self.gametype] = saved
        if self.gametype == self.config.basegame_type:
            self.colour_scatters()
        else:
            self.apply_sub_map()
        self.get_special_symbols_on_board()
        if emit_event:
            reveal_event(self)

    def scatter_cells(self):
        return [(r, c) for r in range(len(self.board)) for c in range(len(self.board[r])) if self.board[r][c].name in ("S", "SB", "SP")]

    def colour_scatters(self):
        """Base game: when a trigger board is forced, colour the scatters to match the rite (3 red / 2 red+blue / 2 red+purple)."""
        cells = self.scatter_cells()
        if len(cells) < 3 or not getattr(self, "pending_rite", None):
            return
        names = list(self.config.rites[self.pending_rite]["scatters"]) + ["S"] * (len(cells) - 3)
        for (r, c), n in zip(cells, names):
            self.board[r][c] = self.create_symbol(n)

    def apply_sub_map(self):
        if not getattr(self, "sub_map", None):
            return
        for r in range(len(self.board)):
            for c in range(len(self.board[r])):
                n = self.board[r][c].name
                if n in self.sub_map:
                    self.board[r][c] = self.create_symbol(self.sub_map[n])

    # ---- Symbol Removal (sacrifice) -------------------------------------------------------------
    def remaining_symbols(self):
        gone = set(self.sub_map)
        return [s for s in self.config.symbol_rank if s not in gone]

    def convert_symbol(self, loser, winner, source, persistent):
        """Transform every `loser` on the current board; remember it for later spins when persistent."""
        positions = []
        for r in range(len(self.board)):
            for c in range(len(self.board[r])):
                if self.board[r][c].name == loser:
                    positions.append({"reel": r, "row": c})
                    self.board[r][c] = self.create_symbol(winner)
        if persistent:
            for k, v in list(self.sub_map.items()):
                if v == loser:
                    self.sub_map[k] = winner
            self.sub_map[loser] = winner
        return positions

    def do_sacrifice(self, source, persistent, higher_wins=None, extra_spins=0):
        pool = self.remaining_symbols()
        if len(pool) < 2:
            return False
        a, b = random.sample(pool, 2)
        hw = self.config.rites[self.rite]["higher_wins"] if (higher_wins is None and persistent) else bool(higher_wins)
        rank = self.config.symbol_rank
        winner, loser = (a, b) if (rank.index(a) < rank.index(b)) else (b, a)
        if not hw and random.random() < 0.5:
            winner, loser = loser, winner
        positions = self.convert_symbol(loser, winner, source, persistent)
        symbol_sacrifice_event(self, source, loser, winner, positions, persistent, extra_spins)
        if persistent and extra_spins:
            self.tot_fs = min(self.config.max_free_spins, self.tot_fs + extra_spins)
        return True

    # ---- bonus rites ------------------------------------------------------------------------------
    def choose_rite(self):
        weights = self.cond("rite_weights", {"blizzard": 1})
        self.rite = get_random_outcome(weights)
        self.purchased = len(weights) == 1 and self.get_current_betmode().get_buybonus()
        return self.rite

    def announce_rite(self):
        rite_awaken_event(self, self.rite, self.purchased or self.get_current_betmode().get_buybonus())

    def update_freespin_amount(self, scatter_key: str = "scatter") -> None:
        self.tot_fs = self.config.rites[self.rite]["start_spins"]
        fs_trigger_event(self, basegame_trigger=True, freegame_trigger=False)

    def check_fs_condition(self, scatter_key: str = "scatter") -> bool:
        need = min(self.config.freespin_triggers[self.gametype].keys())
        return self.count_special_symbols(scatter_key) >= need and not self.repeat

    def start_rite_state(self):
        r = self.config.rites[self.rite]
        self.global_multiplier = r["start_mult"]
        self.wheel_level = r["wheel_level"]
        self.sub_map = {}
        self.surge = False
        update_global_mult_event(self)
        if r["convert_lows"]:
            highs = list(self.config.high_symbols)
            for low in self.config.low_symbols:
                self.sub_map[low] = random.choice(highs)
            for low, high in self.sub_map.items():
                symbol_sacrifice_event(self, "hollow", low, high, [], True, 0)

    def spin_wheel(self):
        """One wheel spin at the current level; applies the outcome and emits the event."""
        table = self.config.wheel_tables[self.wheel_level]
        weights = {i: w for i, (_, _, w) in enumerate(table) if w > 0}
        idx = get_random_outcome(weights)
        kind, value, _ = table[idx]
        level_before = self.wheel_level
        labels = [{"kind": k, "value": v} for (k, v, w) in table if w > 0]
        result_index = list(weights).index(idx)
        if kind == "mult" or kind == "frenzy":
            self.global_multiplier += value
        elif kind == "blood_moon":
            self.wheel_level = min(5, self.wheel_level + 1)
        elif kind == "dark_surge":
            self.surge = True
        frost_wheel_event(self, level_before, kind, value, labels, result_index, self.wheel_level, self.global_multiplier)
        if kind in ("mult", "frenzy"):
            update_global_mult_event(self)
        elif kind == "extra_sacrifice":
            self.do_sacrifice("wheel", True, extra_spins=self.config.sacrifice_extra_spins)
        elif kind == "chosen_offering":
            self.do_sacrifice("wheel", True, extra_spins=self.config.sacrifice_extra_spins)
            self.upgrade_top_symbol()

    def upgrade_top_symbol(self):
        """Chosen Offering: the next-best remaining symbol is promoted into the best remaining one."""
        pool = self.remaining_symbols()
        if len(pool) >= 2:
            top, second = pool[0], pool[1]
            positions = self.convert_symbol(second, top, "wheel", True)
            symbol_sacrifice_event(self, "wheel", second, top, positions, True, 0)
