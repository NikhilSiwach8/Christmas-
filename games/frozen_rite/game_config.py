import os
from src.config.config import Config
from src.config.distributions import Distribution
from src.config.betmode import BetMode


class GameConfig(Config):
    """Frozen Rite: 5x4 ways slot with two free-spin rites, a Frost Wheel and Aurora random multipliers.

    Symbol ids (frontend maps these to ice-themed art):
      H1 Frost Priestess, H2 Ice Wolf, H3 Glacier Golem, H4 Frozen Crown, H5 Rune Idol,
      L1..L4 crystal gems, W = Aurora Wild, S = Frozen Codex (scatter).
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
        self.wincap = 10000
        self.win_type = "ways"
        self.rtp = 0.967
        self.construct_paths()

        # Game Dimensions: 5 reels x 4 rows = 1024 ways
        self.num_reels = 5
        self.num_rows = [4] * self.num_reels

        # All payouts must be multiples of 0.1x (Stake format rule), so the table lives on a 0.1 grid.
        self.paytable = {
            (5, "H1"): 3.0, (4, "H1"): 0.9, (3, "H1"): 0.3,
            (5, "H2"): 1.8, (4, "H2"): 0.6, (3, "H2"): 0.2,
            (5, "H3"): 1.2, (4, "H3"): 0.5, (3, "H3"): 0.2,
            (5, "H4"): 0.8, (4, "H4"): 0.3, (3, "H4"): 0.1,
            (5, "H5"): 0.6, (4, "H5"): 0.2, (3, "H5"): 0.1,
            (5, "L1"): 0.4, (4, "L1"): 0.2, (3, "L1"): 0.1,
            (5, "L2"): 0.3, (4, "L2"): 0.1, (3, "L2"): 0.1,
            (5, "L3"): 0.2, (4, "L3"): 0.1, (3, "L3"): 0.1,
            (5, "L4"): 0.2, (4, "L4"): 0.1, (3, "L4"): 0.1,
        }

        self.include_padding = True
        # Wild "W" has no per-symbol multiplier here: multipliers are global (random / progressive / wheel).
        self.special_symbols = {"wild": ["W"], "scatter": ["S"], "multiplier": []}

        # Scatter counts -> spins. Per-rite tables below override these at runtime.
        self.freespin_triggers = {
            self.basegame_type: {3: 10, 4: 13, 5: 16},
            self.freegame_type: {2: 3, 3: 5, 4: 7, 5: 9},
        }
        self.anticipation_triggers = {self.basegame_type: 2, self.freegame_type: 1}

        # Free-spin rites. "Blizzard": long and steady. "Whiteout": short, high starting multiplier, big steps.
        self.rites = {
            "blizzard": {
                "spins": {3: 10, 4: 13, 5: 16},
                "retrigger": {2: 3, 3: 5, 4: 7, 5: 9},
                "start_mult": 1,
                "step": 1,
                "max_mult": 20,
            },
            "whiteout": {
                "spins": {3: 6, 4: 8, 5: 10},
                "retrigger": {2: 2, 3: 3, 4: 4, 5: 5},
                "start_mult": 2,
                "step": 2,
                "max_mult": 30,
            },
        }

        # Frost Wheel (spins once at the end of the free spins and multiplies the whole feature win).
        self.wheel_segments = [1, 2, 3, 5, 10, 25, 50, 100]
        self.wheel_weights = {1: 40, 2: 28, 3: 15, 5: 9, 10: 5, 25: 2, 50: 0.7, 100: 0.3}
        # Aurora random multiplier on winning base-game spins (1 = none).
        self.base_mult_weights = {1: 900, 2: 50, 3: 25, 5: 15, 10: 7, 25: 3}

        reels = {"BR0": "BR0.csv", "FR0": "FR0.csv", "FRWCAP": "FRWCAP.csv"}
        self.reels = {}
        for r, f in reels.items():
            self.reels[r] = self.read_reels_csv(os.path.join(self.reels_path, f))

        cap = self.wincap
        base_reels = {self.basegame_type: {"BR0": 1}}
        free_reels = {self.freegame_type: {"FR0": 1}}
        cap_reels = {self.basegame_type: {"BR0": 1}, self.freegame_type: {"FR0": 1, "FRWCAP": 5}}
        rites_mix = {"blizzard": 65, "whiteout": 35}
        cap_wheel = {25: 2, 50: 3, 100: 4}

        def natural_distributions(trigger_quota):
            """Distributions shared by base and bonus_bet (bonus_bet triggers features more often)."""
            return [
                Distribution(
                    criteria="wincap",
                    quota=0.001,
                    win_criteria=cap,
                    conditions={
                        "reel_weights": cap_reels,
                        "force_wincap": True,
                        "force_freegame": True,
                        "scatter_triggers": {3: 100, 4: 20, 5: 5},
                        "rite_weights": rites_mix,
                        "wheel_weights": cap_wheel,
                    },
                ),
                Distribution(
                    criteria="freegame",
                    quota=trigger_quota,
                    conditions={
                        "reel_weights": {**base_reels, **free_reels},
                        "force_wincap": False,
                        "force_freegame": True,
                        "scatter_triggers": {3: 100, 4: 20, 5: 5},
                        "rite_weights": rites_mix,
                    },
                ),
                Distribution(
                    criteria="0",
                    quota=0.4,
                    win_criteria=0.0,
                    conditions={"reel_weights": base_reels, "force_wincap": False, "force_freegame": False},
                ),
                Distribution(
                    criteria="basegame",
                    quota=0.5,
                    conditions={"reel_weights": base_reels, "force_wincap": False, "force_freegame": False},
                ),
            ]

        def buy_distributions(rite):
            return [
                Distribution(
                    criteria="wincap",
                    quota=0.001,
                    win_criteria=cap,
                    conditions={
                        "reel_weights": cap_reels,
                        "force_wincap": True,
                        "force_freegame": True,
                        "scatter_triggers": {3: 100, 4: 20, 5: 5},
                        "rite_weights": {rite: 1},
                        "wheel_weights": cap_wheel,
                    },
                ),
                Distribution(
                    criteria="freegame",
                    quota=1,
                    conditions={
                        "reel_weights": {**base_reels, **free_reels},
                        "force_wincap": False,
                        "force_freegame": True,
                        "scatter_triggers": {3: 100, 4: 20, 5: 5},
                        "rite_weights": {rite: 1},
                    },
                ),
            ]

        self.bet_modes = [
            BetMode(
                name="base",
                cost=1.0,
                rtp=self.rtp,
                max_win=cap,
                auto_close_disabled=False,
                is_feature=True,
                is_buybonus=False,
                distributions=natural_distributions(0.1),
            ),
            BetMode(
                name="bonus_bet",
                cost=1.25,
                rtp=self.rtp,
                max_win=cap,
                auto_close_disabled=False,
                is_feature=True,
                is_buybonus=False,
                distributions=natural_distributions(0.2),
            ),
            BetMode(
                name="buy_blizzard",
                cost=100.0,
                rtp=self.rtp,
                max_win=cap,
                auto_close_disabled=False,
                is_feature=False,
                is_buybonus=True,
                distributions=buy_distributions("blizzard"),
            ),
            BetMode(
                name="buy_whiteout",
                cost=150.0,
                rtp=self.rtp,
                max_win=cap,
                auto_close_disabled=False,
                is_feature=False,
                is_buybonus=True,
                distributions=buy_distributions("whiteout"),
            ),
        ]
