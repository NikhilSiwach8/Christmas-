from game_executables import GameExecutables
from src.calculations.statistics import get_random_outcome


class GameStateOverride(GameExecutables):
    """Override or extend universal state.py functions."""

    def reset_book(self):
        super().reset_book()
        self.rite = None

    def assign_special_sym_function(self):
        self.special_symbol_functions = {}

    def cond(self, key, default):
        """Per-distribution condition with a config default."""
        return self.get_current_distribution_conditions().get(key, default)

    def check_game_repeat(self):
        """Verify final simulation outcomes satisfied all distribution/criteria conditions."""
        if self.repeat is False:
            win_criteria = self.get_current_betmode_distributions().get_win_criteria()
            if win_criteria is not None and self.final_win != win_criteria:
                self.repeat = True
