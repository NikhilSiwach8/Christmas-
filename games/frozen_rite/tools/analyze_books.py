"""Average payout per mode/criteria from uncompressed books (run with FR_COMPRESS=0).  Usage: analyze_books.py <library dir>"""
import json, sys, glob, os, collections

lib = sys.argv[1]
for path in sorted(glob.glob(os.path.join(lib, "books", "books_*.json*"))):
    mode = os.path.basename(path).split(".")[0][6:]
    agg = collections.defaultdict(lambda: [0, 0.0, 0])
    txt = open(path).read()
    books = json.loads(txt) if txt.lstrip().startswith("[") else [json.loads(l) for l in txt.splitlines() if l.strip()]
    for b in books:
        a = agg[b["criteria"]]
        a[0] += 1
        a[1] += b["payoutMultiplier"]
        a[2] += b["payoutMultiplier"] > 0
    print(f"== {mode}")
    for c, (n, tot, nz) in sorted(agg.items()):
        print(f"   {c:10s} n={n:7d} avg={tot/n:9.3f} nonzero={nz/n:6.1%}")
