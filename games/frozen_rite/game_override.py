from game_executables import GameExecutables


class GameStateOverride(GameExecutables):
    def reset_book(self):
        super().reset_book()
        self.rite = None
        self.purchased = False
        self.pending_rite = None
        self.sub_map = {}
        self.surge = False
        self.wheel_level = 1

    def assign_special_sym_function(self):
        self.special_symbol_functions = {}

    def cond(self, key, default):
        return self.get_current_distribution_conditions().get(key, default)

    def check_game_repeat(self):
        if self.repeat is False:
            win_criteria = self.get_current_betmode_distributions().get_win_criteria()
            if win_criteria is not None and self.final_win != win_criteria:
                self.repeat = True
