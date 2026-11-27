"""Custom Frozen Rite events (rendered in order by the frontend, alongside SDK standard events)."""
from src.events.events import *  # noqa: F401,F403


def rite_awaken_event(gs, rite, purchased):
    r = gs.config.rites[rite]
    gs.book.add_event({"index": len(gs.book.events), "type": "riteAwaken", "rite": rite, "purchased": purchased,
                       "startMult": int(r["start_mult"]), "wheelLevel": int(r["wheel_level"]),
                       "startSpins": int(r["start_spins"]), "higherWins": bool(r["higher_wins"]),
                       "convertLows": bool(r["convert_lows"])})


def aurora_mult_event(gs, mult):
    gs.book.add_event({"index": len(gs.book.events), "type": "auroraMult", "mult": int(mult)})


def symbol_sacrifice_event(gs, source, loser, winner, positions, persistent, extra_spins):
    """Every `loser` symbol on the board transforms into `winner`. positions are padded-board cells that change."""
    gs.book.add_event({"index": len(gs.book.events), "type": "symbolSacrifice", "source": source,
                       "loser": loser, "winner": winner,
                       "positions": [{"reel": int(p["reel"]), "row": int(p["row"]) + 1} for p in positions],
                       "persistent": bool(persistent), "extraSpins": int(extra_spins)})


def frost_wheel_event(gs, level, kind, value, labels, result_index, new_level, mult_after):
    gs.book.add_event({"index": len(gs.book.events), "type": "frostWheel", "level": int(level), "kind": kind,
                       "value": int(value), "labels": labels, "resultIndex": int(result_index),
                       "newLevel": int(new_level), "multAfter": int(mult_after)})
