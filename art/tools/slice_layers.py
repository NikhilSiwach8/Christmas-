#!/usr/bin/env python3
"""Slice a generated 'separated parts' sheet into one transparent PNG per part (+ manifest.json).
Usage: slice_layers.py sheet.webp out_dir name1 name2 ...   (names in reading order: top band to bottom band, left to right)
Parts that touch/overlap come out as ONE piece - the script reports the count so you can re-prompt with 'visible gaps'."""
import sys, os, json
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

sheet, out, names = sys.argv[1], sys.argv[2], sys.argv[3:]
im = Image.open(sheet).convert("RGBA"); a = np.array(im)
THR = int(os.environ.get("SLICE_THR", 8)); KEEP = int(os.environ.get("SLICE_KEEP", 8))   # raise THR to separate soft glows from solid parts
mask = a[..., 3] > THR
lab, n = ndi.label(ndi.binary_dilation(mask, iterations=6))   # join tiny gaps inside a part, not between parts
parts = []
for k in range(1, n + 1):
    ys, xs = np.where((lab == k) & mask)
    if len(ys) < int(os.environ.get('SLICE_MIN', 4000)):
        continue
    parts.append((ys.min(), xs.min(), ys.max(), xs.max(), k))
parts.sort(key=lambda p: (round((p[0] + p[2]) / 2 / 250), (p[1] + p[3]) / 2))
if len(parts) != len(names):
    print(f"WARNING: found {len(parts)} parts but {len(names)} names given"); names = (names + [f"part{i}" for i in range(len(parts))])[:len(parts)]
os.makedirs(out, exist_ok=True)
manifest = {"sheet": os.path.basename(sheet), "sheet_size": list(im.size), "parts": {}}
for (y0, x0, y1, x1, k), name in zip(parts, names):
    pad = 4
    box = (max(0, x0 - pad), max(0, y0 - pad), min(im.width, x1 + 1 + pad), min(im.height, y1 + 1 + pad))
    crop = np.array(im.crop(box))
    keep = ndi.binary_dilation(lab[box[1]:box[3], box[0]:box[2]] == k, iterations=KEEP)   # drop neighbours' pixels
    crop[..., 3] = np.where(keep, crop[..., 3], 0)
    Image.fromarray(crop, "RGBA").save(os.path.join(out, f"{name}.png"))
    manifest["parts"][name] = {"sheet_box": [int(v) for v in box], "size": [int(box[2] - box[0]), int(box[3] - box[1])]}
json.dump(manifest, open(os.path.join(out, "manifest.json"), "w"), indent=1)
print(f"{out}: {len(parts)} parts -> {', '.join(names)}")
