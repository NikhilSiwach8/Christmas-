import os
from src.config.config import Config
from src.config.distributions import Distribution
from src.config.betmode import BetMode


class GameConfig(Config):
    """Frozen Rite: 5x4 ways slot with coloured scatters, Symbol Removal (sacrifice), four bonus rites and an in-bonus wheel.

    Feature structure follows the public description of the reference game; the numbers marked TUNED are our own.
    Symbols: H1 Frost Witch, H2 Snow Owl, H3 Yeti, H4 Snow Sentinel, H5 Frost Fox, L1..L4 card ranks A K Q J.
    Scatters: S = red Frozen Codex, SB = blue, SP = purple (colour tints of the same book art).
    """

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        super().__init__()
        self.game_id = "frozen_rite"
        self.provider_number = 0
        self.working_name = "Frozen Rite"
        self.wincap = 40000
        self.win_type = "ways"
        self.rtp = 0.967
        self.construct_paths()

        self.num_reels = 5
        self.num_rows = [4] * self.num_reels  # 1,024 ways

        # All payouts must be multiples of 0.1x (Stake format rule). TUNED.
        self.paytable = {
            (5, "H1"): 8.4, (4, "H1"): 2.5, (3, "H1"): 0.8,
            (5, "H2"): 5.0, (4, "H2"): 1.7, (3, "H2"): 0.6,
            (5, "H3"): 3.4, (4, "H3"): 1.4, (3, "H3"): 0.6,
            (5, "H4"): 2.2, (4, "H4"): 0.8, (3, "H4"): 0.3,
            (5, "H5"): 1.7, (4, "H5"): 0.6, (3, "H5"): 0.3,
            (5, "L1"): 0.4, (4, "L1"): 0.2, (3, "L1"): 0.1,
            (5, "L2"): 0.3, (4, "L2"): 0.1, (3, "L2"): 0.1,
            (5, "L3"): 0.2, (4, "L3"): 0.1, (3, "L3"): 0.1,
            (5, "L4"): 0.2, (4, "L4"): 0.1, (3, "L4"): 0.1,
        }
        # rank of each regular symbol by pay (index 0 = best); used by "higher symbol wins" rites
        self.symbol_rank = ["H1", "H2", "H3", "H4", "H5", "L1", "L2", "L3", "L4"]
        self.high_symbols = ["H1", "H2", "H3", "H4", "H5"]
        self.low_symbols = ["L1", "L2", "L3", "L4"]

        self.include_padding = True
        # No wilds in this game. Scatter colours: red S, blue SB, purple SP (all count as scatters).
        self.special_symbols = {"wild": [], "scatter": ["S", "SB", "SP"], "multiplier": []}
        self.freespin_triggers = {
            self.basegame_type: {3: 5, 4: 5, 5: 5},
            self.freegame_type: {2: 2, 3: 2, 4: 2, 5: 2},
        }
        self.anticipation_triggers = {self.basegame_type: 2, self.freegame_type: 1}

        # The four bonus rites. Trigger: blizzard = 3 red; whiteout = 2 red + 1 blue; glacier = 2 red + 1 purple;
        # absolute_zero = mystery buy only. All start with 5 spins; every sacrifice adds +2.
        self.rites = {
            "blizzard": {"start_spins": 5, "start_mult": 2, "wheel_level": 1, "higher_wins": False, "convert_lows": False,
                         "scatters": ["S", "S", "S"]},
            "whiteout": {"start_spins": 5, "start_mult": 5, "wheel_level": 2, "higher_wins": False, "convert_lows": False,
                         "scatters": ["S", "S", "SB"]},
            "glacier": {"start_spins": 5, "start_mult": 10, "wheel_level": 3, "higher_wins": True, "convert_lows": False,
                        "scatters": ["S", "S", "SP"]},
            "absolute_zero": {"start_spins": 5, "start_mult": 20, "wheel_level": 3, "higher_wins": True, "convert_lows": True,
                              "scatters": ["S", "SB", "SP"]},
        }
        self.max_free_spins = 60
        self.sacrifice_extra_spins = 2
        self.wheel_chance = 0.55  # TUNED: probability that a sacrifice in a bonus also spins the wheel

        # Wheel tables per level (1..5). Entry: (kind, value, weight). TUNED.
        # kinds: mult (+value to the global multiplier), extra_sacrifice, chosen_offering, dark_surge, blood_moon (wheel level +1), frenzy (+value mult)
        def table(level):
            k = level - 1
            return [
                ("mult", 1, 30 - 4 * k), ("mult", 2, 24 - 2 * k), ("mult", 3, 14 + 1 * k), ("mult", 5, 7 + 2 * k),
                ("mult", 10, 2 + 1.5 * k), ("mult", 25, 0.3 + 0.5 * k),
                ("extra_sacrifice", 0, 7), ("chosen_offering", 0, 4 + k), ("dark_surge", 0, 6),
                ("blood_moon", 0, 6 if level < 5 else 0), ("frenzy", 20, 1 + 0.6 * k),
            ]
        self.wheel_tables = {lvl: table(lvl) for lvl in range(1, 6)}
        # Chosen Offering upgrades the wheel: its next spin draws only from this big-multiplier table. TUNED.
        self.wheel_boost_table = [("mult", 10, 50), ("mult", 25, 32), ("mult", 50, 14), ("frenzy", 100, 4)]
        # Aurora-style random multiplier on winning base spins (the listed "random multiplier"). TUNED.
        self.base_mult_weights = {1: 900, 2: 50, 3: 25, 5: 15, 10: 7, 25: 3}

        reels = {"BR0": "BR0.csv", "FR0": "FR0.csv", "FRS": "FRS.csv", "FRWCAP": "FRWCAP.csv"}
        self.reels = {}
        for r, f in reels.items():
            self.reels[r] = self.read_reels_csv(os.path.join(self.reels_path, f))

        cap = self.wincap
        base_reels = {self.basegame_type: {"BR0": 1}}
        free_reels = {self.freegame_type: {"FR0": 1}}
        cap_reels = {self.basegame_type: {"BR0": 1}, self.freegame_type: {"FR0": 1, "FRWCAP": 5}}
        triggers = {3: 100, 4: 20, 5: 5}
        natural_rites = {"blizzard": 60, "whiteout": 28, "glacier": 12}

        def dist_set(trigger_quota, rites, nobonus=True, basegame=True):
            d = [
                Distribution(criteria="wincap", quota=0.001, win_criteria=cap,
                             conditions={"reel_weights": cap_reels, "force_wincap": True, "force_freegame": True,
                                         "scatter_triggers": triggers, "rite_weights": rites}),
                Distribution(criteria="freegame", quota=trigger_quota,
                             conditions={"reel_weights": {**base_reels, **free_reels}, "force_wincap": False,
                                         "force_freegame": True, "scatter_triggers": triggers, "rite_weights": rites}),
            ]
            if nobonus:
                d.append(Distribution(criteria="0", quota=0.4, win_criteria=0.0,
                                      conditions={"reel_weights": base_reels, "force_wincap": False, "force_freegame": False}))
            if basegame:
                d.append(Distribution(criteria="basegame", quota=0.5,
                                      conditions={"reel_weights": base_reels, "force_wincap": False, "force_freegame": False}))
            return d

        def mode(name, cost, dists, feature=False, buy=False):
            return BetMode(name=name, cost=cost, rtp=self.rtp, max_win=cap, auto_close_disabled=False,
                           is_feature=feature, is_buybonus=buy, distributions=dists)

        buy = lambda rite: dist_set(1, {rite: 1}, nobonus=False, basegame=False)
        mystery_rites = {"whiteout": 22, "glacier": 10, "absolute_zero": 4.8}  # published odds of the mystery buy
        self.bet_modes = [
            mode("base", 1.0, dist_set(0.1, natural_rites), feature=True),
            mode("bonus_bet", 3.0, dist_set(0.3, natural_rites), feature=True),   # "plus": 3x cost bet boost
            mode("buy_blizzard", 100.0, buy("blizzard"), buy=True),
            mode("buy_whiteout", 300.0, buy("whiteout"), buy=True),
            mode("buy_mystery", 500.0, dist_set(0.37, mystery_rites, nobonus=True, basegame=False), buy=True),
            mode("buy_glacier", 1500.0, buy("glacier"), buy=True),
        ]
