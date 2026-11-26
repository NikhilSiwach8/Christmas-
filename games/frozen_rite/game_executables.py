from game_calculations import GameCalculations
from game_events import rite_awaken_event, aurora_mult_event, wheel_spin_event
from src.calculations.ways import Ways
from src.calculations.statistics import get_random_outcome
from src.events.events import update_global_mult_event, set_total_event, fs_trigger_event


class GameExecutables(GameCalculations):
    """Ways evaluation plus Frozen Rite features."""

    def evaluate_ways_board(self, multiplier: int = 1):
        """Populate win-data (global multiplier applied), record wins, transmit events."""
        self.win_data = Ways.get_ways_data(
            self.config, self.board, global_multiplier=multiplier, multiplier_strategy="global"
        )
        if self.win_data["totalWin"] > 0:
            Ways.record_ways_wins(self)
            self.win_manager.update_spinwin(self.win_data["totalWin"])
        Ways.emit_wayswin_events(self)

    # ---- base game: Aurora random multiplier -------------------------------------------------
    def evaluate_base_board(self):
        """Draw the Aurora multiplier; apply it only if the spin wins (so multiplier events never precede nothing)."""
        mult = get_random_outcome(self.cond("base_mult_weights", self.config.base_mult_weights))
        probe = Ways.get_ways_data(self.config, self.board, multiplier_strategy="global")
        if mult > 1 and probe["totalWin"] > 0:
            self.global_multiplier = mult
            aurora_mult_event(self, mult)
        self.evaluate_ways_board(multiplier=self.global_multiplier)
        self.global_multiplier = 1

    # ---- free spins ---------------------------------------------------------------------------
    def choose_rite(self):
        weights = self.cond("rite_weights", {"blizzard": 1})
        self.rite = get_random_outcome(weights)
        purchased = len(weights) == 1 and self.get_current_betmode().get_buybonus()
        rite_awaken_event(self, self.rite, self.config.rites[self.rite]["spins"], purchased)

    def update_freespin_amount(self, scatter_key: str = "scatter") -> None:
        count = self.count_special_symbols(scatter_key)
        self.tot_fs = self.config.rites[self.rite]["spins"][count]
        fs_trigger_event(self, basegame_trigger=True, freegame_trigger=False)

    def update_fs_retrigger_amt(self, scatter_key: str = "scatter") -> None:
        count = self.count_special_symbols(scatter_key)
        self.tot_fs += self.config.rites[self.rite]["retrigger"][count]
        fs_trigger_event(self, basegame_trigger=False, freegame_trigger=True)

    def check_fs_condition(self, scatter_key: str = "scatter") -> bool:
        need = min(self.config.freespin_triggers[self.gametype].keys())
        return self.count_special_symbols(scatter_key) >= need and not self.repeat

    def advance_rite_multiplier(self):
        r = self.config.rites[self.rite]
        new = min(self.global_multiplier + r["step"], r["max_mult"])
        if new != self.global_multiplier:
            self.global_multiplier = new
            update_global_mult_event(self)

    def spin_frost_wheel(self):
        """End-of-feature wheel: multiplies the whole free-spin win."""
        pre = self.win_manager.freegame_wins
        result = get_random_outcome(self.cond("wheel_weights", self.config.wheel_weights))
        extra = round(pre * (result - 1), 2)
        self.win_manager.reset_spin_win()
        if extra > 0:
            self.win_manager.update_spinwin(extra)
            self.win_manager.update_gametype_wins(self.gametype)
        wheel_spin_event(self, result, pre, self.win_manager.freegame_wins)
        self.evaluate_wincap()
        set_total_event(self)
