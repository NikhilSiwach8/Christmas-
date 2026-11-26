"""Generate reel strip CSVs for Frozen Rite (deterministic).  Usage: python tools/make_reels.py"""
import os, random, csv

OUT = os.path.join(os.path.dirname(__file__), "..", "reels")
SYMS = ["H1", "H2", "H3", "H4", "H5", "L1", "L2", "L3", "L4"]


def build(length, counts, wild_counts, scatter_counts, seed):
    """counts: per-symbol list over 5 reels. Lows (L4) fill the remainder."""
    rng = random.Random(seed)
    strips = []
    for r in range(5):
        pool = []
        for s in SYMS[:-1]:
            pool += [s] * counts[s][r]
        pool += ["W"] * wild_counts[r] + ["S"] * scatter_counts[r]
        pool += ["L4"] * (length - len(pool))
        assert len(pool) == length, (r, len(pool))
        def valid(p):
            if any(p[i] == p[(i + 1) % length] for i in range(length)):
                return False
            sp = [i for i, s in enumerate(p) if s == "S"]
            return len(sp) < 2 or all((sp[(k + 1) % len(sp)] - sp[k]) % length >= 5 for k in range(len(sp)))

        def bad(p):
            n = sum(p[i] == p[(i + 1) % length] for i in range(length))
            sp = [i for i, s in enumerate(p) if s == "S"]
            return n + (0 if len(sp) < 2 else sum((sp[(k + 1) % len(sp)] - sp[k]) % length < 5 for k in range(len(sp))))

        rng.shuffle(pool)
        for _ in range(200000):  # repair by random swaps that do not increase violations
            if valid(pool):
                break
            i, j = rng.randrange(length), rng.randrange(length)
            before = bad(pool)
            pool[i], pool[j] = pool[j], pool[i]
            if bad(pool) > before:
                pool[i], pool[j] = pool[j], pool[i]
        best = list(pool)
        assert valid(best), "could not satisfy strip constraints"
        strips.append(best)
    return strips


def write(name, strips):
    n = len(strips[0])
    with open(os.path.join(OUT, name), "w", newline="") as f:
        w = csv.writer(f)
        for i in range(n):
            w.writerow([strips[r][i] for r in range(5)])


BR = dict(H1=[3] * 5, H2=[4] * 5, H3=[4] * 5, H4=[5] * 5, H5=[5] * 5, L1=[7] * 5, L2=[8] * 5, L3=[8] * 5)
FR = dict(H1=[3] * 5, H2=[4] * 5, H3=[4] * 5, H4=[5] * 5, H5=[5] * 5, L1=[6] * 5, L2=[7] * 5, L3=[7] * 5)
CAP = dict(H1=[8] * 5, H2=[7] * 5, H3=[6] * 5, H4=[5] * 5, H5=[4] * 5, L1=[3] * 5, L2=[3] * 5, L3=[3] * 5)

write("BR0.csv", build(64, BR, [0, 3, 3, 3, 3], [1, 2, 2, 2, 1], 11))
write("FR0.csv", build(60, FR, [0, 3, 3, 3, 3], [1, 1, 1, 1, 1], 12))
write("FRWCAP.csv", build(60, CAP, [0, 8, 8, 8, 8], [1, 1, 1, 1, 1], 13))
print("reels written")
