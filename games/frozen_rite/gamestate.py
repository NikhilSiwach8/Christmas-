"""Frozen Rite game flow: base spins (Aurora multiplier) -> rite free spins (progressive multiplier) -> Frost Wheel."""

from game_override import GameStateOverride
from src.events.events import update_global_mult_event


class GameState(GameStateOverride):
    """Handle basegame and freegame logic."""

    def run_spin(self, sim: int, simulation_seed=None) -> None:
        self.reset_seed(sim)
        self.repeat = True
        while self.repeat:
            self.reset_book()
            self.draw_board(emit_event=True)

            self.evaluate_base_board()

            self.win_manager.update_gametype_wins(self.gametype)
            if self.check_fs_condition() and self.check_freespin_entry():
                self.choose_rite()
                self.run_freespin_from_base()

            self.evaluate_finalwin()
            self.check_repeat()

        self.imprint_wins()

    def run_freespin(self) -> None:
        self.reset_fs_spin()
        self.global_multiplier = self.config.rites[self.rite]["start_mult"]
        update_global_mult_event(self)
        while self.fs < self.tot_fs:
            self.update_freespin()
            self.draw_board(emit_event=True)

            self.evaluate_ways_board(multiplier=self.global_multiplier)
            if self.check_fs_condition():
                self.update_fs_retrigger_amt()

            won = self.win_manager.spin_win > 0
            self.win_manager.update_gametype_wins(self.gametype)
            if won:
                self.advance_rite_multiplier()
            if self.wincap_triggered:
                break

        if not self.wincap_triggered:
            self.spin_frost_wheel()
        self.end_freespin()
