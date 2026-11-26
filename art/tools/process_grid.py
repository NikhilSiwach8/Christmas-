#!/usr/bin/env python3
"""Clean + straighten a generated chalk-grid image.
 1) removes a baked-in fake checkerboard / white background (neutral light greys) -> real alpha
 2) detects the 6 vertical + 5 horizontal chalk lines and remaps the image so all 5x4 cells are exactly equal
Usage: process_grid.py in.webp out.png [cell=260] [margin=70]
Game use: board cell = 90 units -> draw the output at scale 90/cell, offset by margin*scale."""
import sys
import numpy as np
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
C = int(sys.argv[3]) if len(sys.argv) > 3 else 260
M = int(sys.argv[4]) if len(sys.argv) > 4 else 70

rgb = np.array(Image.open(src).convert("RGB")).astype(float)
lum, spread = rgb.mean(axis=2), rgb.max(axis=2) - rgb.min(axis=2)
neutral = spread < 14
alpha = np.ones(lum.shape)
alpha[neutral & (lum >= 236)] = 0
ramp = neutral & (lum >= 200) & (lum < 236)
alpha[ramp] = (236 - lum[ramp]) / 36
a = np.dstack([rgb.astype(np.uint8), (alpha * 255).astype(np.uint8)])
h, w = alpha.shape
solid = alpha > 0.5


def runs(p, thr=0.55, minw=12):
    xs, run, s = [], False, 0
    for i, v in enumerate(p):
        if v > thr and not run:
            s, run = i, True
        if v <= thr and run:
            if i - s >= minw:
                xs.append((s + i) / 2)
            run = False
    out = []
    for x in xs:  # merge near duplicates
        if out and x - out[-1] < 25:
            out[-1] = (out[-1] + x) / 2
        else:
            out.append(x)
    return out


vx = runs(solid[int(h * .18):int(h * .82)].mean(axis=0))
hy = runs(solid[:, int(w * .18):int(w * .82)].mean(axis=1))
assert len(vx) == 6 and len(hy) == 5, f"expected 6 vertical and 5 horizontal lines, got {len(vx)}/{len(hy)}"
W, H = 5 * C + 2 * M, 4 * C + 2 * M


def mapping(lines, n_out, cells, n_src):
    out_lines = [M + i * C for i in range(cells + 1)]
    return np.interp(np.arange(n_out), [0] + out_lines + [n_out - 1], [0] + list(lines) + [n_src - 1])


mx, my = mapping(vx, W, 5, w), mapping(hy, H, 4, h)
tmp = np.zeros((H, w, 4), np.float32)
for c in range(4):
    for x in range(w):
        tmp[:, x, c] = np.interp(my, np.arange(h), a[:, x, c].astype(np.float32))
out = np.zeros((H, W, 4), np.float32)
for c in range(4):
    for y in range(H):
        out[y, :, c] = np.interp(mx, np.arange(w), tmp[y, :, c])
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), "RGBA").save(dst)
print(f"saved {dst}  size {W}x{H}  cell {C}  margin {M}  lines v={[round(x) for x in vx]} h={[round(y) for y in hy]}")
