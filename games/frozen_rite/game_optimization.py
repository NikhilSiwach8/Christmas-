"""Set conditions/parameters for optimization program program"""

from optimization_program.optimization_config import (
    ConstructScaling,
    ConstructParameters,
    ConstructConditions,
    ConstructFenceBias,
    verify_optimization_input,
)


class OptimizationSetup:
    """Game specific optimization setup.
    Amends game_config.opt_params, which is required to setup maths configuration file.
    """

    def __init__(self, game_config):
        self.game_config = game_config
        wincaps = {}
        for bm in game_config.bet_modes:
            wincaps[bm.get_name()] = bm.get_wincap()
        def scaling(rows):
            return ConstructScaling(
                [{"criteria": c, "scale_factor": f, "win_range": r, "probability": 1.0} for c, f, r in rows]
            ).return_dict()

        def natural(freegame_rtp, freegame_hr, base_rtp, base_hr):
            return {
                "conditions": {
                    "wincap": ConstructConditions(
                        rtp=0.001, av_win=wincaps["base"], search_conditions=wincaps["base"]
                    ).return_dict(),
                    "0": ConstructConditions(rtp=0, av_win=0, search_conditions=0).return_dict(),
                    "freegame": ConstructConditions(
                        rtp=freegame_rtp, hr=freegame_hr, search_conditions={"symbol": "scatter"}
                    ).return_dict(),
                    "basegame": ConstructConditions(hr=base_hr, rtp=base_rtp).return_dict(),
                },
                "scaling": scaling(
                    [
                        ("basegame", 1.2, (1, 2)),
                        ("basegame", 1.5, (10, 20)),
                        ("freegame", 0.8, (1000, 2000)),
                        ("freegame", 1.2, (3000, 4000)),
                    ]
                ),
                "parameters": ConstructParameters(
                    num_show=5000,
                    num_per_fence=10000,
                    min_m2m=4,
                    max_m2m=8,
                    pmb_rtp=1.0,
                    sim_trials=5000,
                    test_spins=[50, 100, 200],
                    test_weights=[0.3, 0.4, 0.3],
                    score_type="rtp",
                ).return_dict(),
                "distribution_bias": ConstructFenceBias(
                    applied_criteria=["basegame"],
                    bias_ranges=[(1.5, 3.5)],
                    bias_weights=[0.4],
                ).return_dict(),
            }

        def buy(mode):
            return {
                "conditions": {
                    "wincap": ConstructConditions(
                        rtp=0.001, av_win=wincaps[mode], search_conditions=wincaps[mode]
                    ).return_dict(),
                    "freegame": ConstructConditions(rtp=0.966, hr="x").return_dict(),
                },
                "scaling": scaling(
                    [
                        ("freegame", 0.9, (20, 50)),
                        ("freegame", 0.8, (1000, 2000)),
                        ("freegame", 1.2, (3000, 4000)),
                    ]
                ),
                "parameters": ConstructParameters(
                    num_show=5000,
                    num_per_fence=10000,
                    min_m2m=4,
                    max_m2m=8,
                    pmb_rtp=1.0,
                    sim_trials=5000,
                    test_spins=[10, 20, 50],
                    test_weights=[0.6, 0.2, 0.2],
                    score_type="rtp",
                ).return_dict(),
            }

        self.game_config.opt_params = {
            "base": natural(freegame_rtp=0.376, freegame_hr=200, base_rtp=0.59, base_hr=3.5),
            # cost 1.25: more frequent feature triggers; RTP fractions are of the 1.25 cost
            "bonus_bet": natural(freegame_rtp=0.466, freegame_hr=100, base_rtp=0.5, base_hr=3.5),
            "buy_blizzard": buy("buy_blizzard"),
            "buy_whiteout": buy("buy_whiteout"),
        }

        verify_optimization_input(self.game_config, self.game_config.opt_params)
