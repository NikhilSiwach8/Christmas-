"""Frozen Rite flow: base spin (scatter pair = Symbol Removal) -> rite bonus (sacrifices, wheel, global multiplier)."""
from game_override import GameStateOverride
from src.events.events import update_global_mult_event


class GameState(GameStateOverride):
    def run_spin(self, sim: int, simulation_seed=None) -> None:
        self.reset_seed(sim)
        self.repeat = True
        while self.repeat:
            self.reset_book()
            cond = self.get_current_distribution_conditions()
            if cond["force_freegame"]:
                self.choose_rite()          # decides the scatter colours of the forced trigger board
                self.pending_rite = self.rite
            self.draw_board(emit_event=False)
            self.base_sacrifice_if_pair()
            from src.events.events import reveal_event
            reveal_event(self)
            self.apply_base_conversion_event()
            self.evaluate_base_board()

            self.win_manager.update_gametype_wins(self.gametype)
            if self.check_fs_condition() and self.check_freespin_entry():
                self.announce_rite()
                self.run_freespin_from_base()

            self.evaluate_finalwin()
            self.check_repeat()
        self.imprint_wins()

    # --- base game: a pair of scatters sacrifices a symbol for this spin only
    def base_sacrifice_if_pair(self):
        self._base_pair = len(self.scatter_cells()) == 2 and not self.cond("force_freegame", False)
        self._base_conv = None
        if self._base_pair:
            pool = self.remaining_symbols()
            import random
            a, b = random.sample(pool, 2)
            rank = self.config.symbol_rank
            winner, loser = (a, b) if rank.index(a) < rank.index(b) else (b, a)
            if random.random() < 0.5:
                winner, loser = loser, winner
            self._base_conv = (loser, winner)

    def apply_base_conversion_event(self):
        if self._base_conv:
            from game_events import symbol_sacrifice_event
            loser, winner = self._base_conv
            positions = self.convert_symbol(loser, winner, "scatter", False)
            symbol_sacrifice_event(self, "scatter", loser, winner, positions, False, 0)

    def run_freespin(self) -> None:
        self.reset_fs_spin()
        self.start_rite_state()
        while self.fs < self.tot_fs:
            self.update_freespin()
            self.draw_board(emit_event=True)
            if len(self.scatter_cells()) >= 2 and self.do_sacrifice("scatter", True, extra_spins=self.config.sacrifice_extra_spins):
                import random
                if random.random() < self.config.wheel_chance:
                    self.spin_wheel()
            self.evaluate_ways_board(multiplier=self.global_multiplier)
            self.win_manager.update_gametype_wins(self.gametype)
            if self.wincap_triggered:
                break
        self.end_freespin()
