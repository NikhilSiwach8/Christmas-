"""Custom Frozen Rite events (frontend renders these in order, alongside the SDK standard events)."""
from src.events.events import *  # noqa: F401,F403


def rite_awaken_event(gamestate, rite: str, spins_table: dict, purchased: bool) -> None:
    """Announce which free-spin rite was awakened (natural trigger: random; buy modes: the one purchased)."""
    gamestate.book.add_event(
        {
            "index": len(gamestate.book.events),
            "type": "riteAwaken",
            "rite": rite,
            "purchased": purchased,
            "startMult": int(gamestate.config.rites[rite]["start_mult"]),
            "step": int(gamestate.config.rites[rite]["step"]),
            "maxMult": int(gamestate.config.rites[rite]["max_mult"]),
        }
    )


def aurora_mult_event(gamestate, mult: int) -> None:
    """Base-game random multiplier applied to a winning spin."""
    gamestate.book.add_event(
        {"index": len(gamestate.book.events), "type": "auroraMult", "mult": int(mult)}
    )


def wheel_spin_event(gamestate, result: int, pre_win: float, post_win: float) -> None:
    """Frost Wheel spin at the end of the free spins. Amounts in cents (x100 of bet multiple)."""
    gamestate.book.add_event(
        {
            "index": len(gamestate.book.events),
            "type": "frostWheel",
            "segments": [int(s) for s in gamestate.config.wheel_segments],
            "result": int(result),
            "preWheelAmount": int(round(pre_win * 100)),
            "postWheelAmount": int(round(post_win * 100)),
        }
    )
