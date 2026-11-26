# Generated art - approved so far (original Frozen Rite set)

| Symbol | File | Size | Status |
|---|---|---|---|
| H1 Frost Witch | h1_frost_witch.webp | 1254x1254 | approved |
| H2 Snow Owl | h2_snow_owl.webp | 1254x1254 | approved |
| H3 Yeti | h3_yeti.webp | 1254x1254 | approved (v2, deep-blue fur) |
| H4 Snow Sentinel | h4_snow_sentinel.webp | 1254x1254 | approved (orange carrot nose = only orange in set) |
| H5 Frost Fox | h5_frost_fox.webp | 1254x1254 | approved (v2, violet) |
| L1 A / L2 K / L3 Q / L4 J | l1_rank_a / l2_rank_k / l3_rank_q / l4_rank_j .webp | 1254x1254 | approved |
| W Aurora Wisp | w_aurora_wisp.webp | 1086x1448 | approved |
| Sigil | sigil.webp | 1254x1254 | approved |
| Board chalk grid | board_grid_chalk.png | 1440x1180 (cell 260, margin 70) | processed (checkerboard removed, cells equalised) |
| Board frame (unused) | board_frame_v1.webp | 1448x1086 | not used - wrong direction (framed) |
| S Frozen Codex | s_frozen_codex.webp | 1254x1254 | approved |
| W exploded (post-win) | w_exploded.webp | 1086x1448 | approved |

All have real alpha except the raw grid (processed by art/tools/process_grid.py).


## In the game
All symbols + the chalk grid are wired into `frontend/frozen_rite` (static/art/symbols/*.webp at 512 px, static/art/board_grid.webp).
Win = bounce animation (SymbolSprite.svelte); wild shows the cracked-ice ring after a win.

Batch 6 effects are in `art/fx/` and are wired into the game; wild/scatter animation layers are in `art/layers/`.

## Backgrounds (batch 7)
bg_base_desktop / bg_base_portrait / bg_blizzard_desktop / bg_blizzard_portrait / bg_whiteout_desktop (1789x879 desktop, 941x1672 portrait).
**Missing: bg_whiteout_portrait** (the game falls back to the desktop painting, cover-fit, in portrait). All wired in via `components/Background.svelte`
(base in the base game; blizzard / whiteout cross-fade in during that rite's free spins). The paintings already contain chains, hanging banners and
crystal totems, so the procedural chains/banners were removed from `Scene.svelte`.
