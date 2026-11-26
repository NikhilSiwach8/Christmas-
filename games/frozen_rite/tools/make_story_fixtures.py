"""Build Storybook fixtures for the frozen_rite web-sdk app from real published books.
Usage: make_story_fixtures.py <publish_files dir> <web-sdk>/apps/frozen_rite/src/stories/data
"""
import io, json, os, sys, random
import zstandard as zstd

pub, out = sys.argv[1], sys.argv[2]
rng = random.Random(7)


def stream(mode, categories, scan_limit=100000):
    """Stream a books file once, keeping at most `n` books per (name, predicate, n) category (low memory)."""
    path = os.path.join(pub, f"books_{mode}.jsonl.zst")
    kept = {name: [] for name, _, _ in categories}
    with open(path, "rb") as fh:
        reader = zstd.ZstdDecompressor().stream_reader(fh)
        for i, line in enumerate(io.TextIOWrapper(reader, encoding="utf-8")):
            if i >= scan_limit or all(len(kept[n]) >= cap for n, _, cap in categories):
                break
            b = json.loads(line)
            ts = {e["type"] for e in b["events"]}
            for name, pred, cap in categories:
                if len(kept[name]) < cap and pred(b, ts):
                    kept[name].append({"id": b["id"], "payoutMultiplier": b["payoutMultiplier"] / 100, "events": b["events"]})
                    break
    return kept


cats = [
    ("zero", lambda b, ts: b["payoutMultiplier"] == 0, 4),
    ("win", lambda b, ts: 0 < b["payoutMultiplier"] <= 500 and "auroraMult" not in ts and "riteAwaken" not in ts, 12),
    ("aurora", lambda b, ts: "auroraMult" in ts and "riteAwaken" not in ts, 6),
    ("feature", lambda b, ts: "riteAwaken" in ts and len(b["events"]) < 160, 4),
]
k = stream("base", cats)
sel = k["zero"] + k["win"] + k["aurora"] + k["feature"]
bonus = []
for mode in ("buy_blizzard", "buy_whiteout"):
    bonus += stream(mode, [("f", lambda b, ts: len(b["events"]) < 200 and "frostWheel" in ts, 5)])["f"]


def dump(name, books):
    with open(os.path.join(out, name), "w") as f:
        f.write("export default " + json.dumps(books, indent="\t") + ";\n")
    print(name, len(books), "books")


dump("base_books.ts", sel)
dump("bonus_books.ts", bonus)

# one example of every custom/standard event type, for the per-event stories
events = {}
for b in sel + bonus:
    for e in b["events"]:
        events.setdefault(e["type"], e)
with open(os.path.join(out, "base_events.ts"), "w") as f:
    f.write("export default " + json.dumps(events, indent="\t") + ";\n")
with open(os.path.join(out, "bonus_events.ts"), "w") as f:
    f.write("export default " + json.dumps(events, indent="\t") + ";\n")
print("event types:", sorted(events))
