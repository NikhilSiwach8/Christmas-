# Animation layers (batches 5-6) - parts sliced from the generated "separated parts" sheets

One folder per hero symbol: each part is a transparent PNG cropped to its bounds, plus `manifest.json` (where the part sat on the source sheet) and `_sheet.webp` (the original sheet).
Regenerate with `art/tools/slice_layers.py` (names are given in reading order).

| Symbol | Parts | Status |
|---|---|---|
| h1_witch | hat, head, hand_a, hand_b, robe, staff (lantern) | complete |
| h2_owl | head, eye_l, eye_r, lid_l, lid_r, orb, body, stump | complete |
| h3_yeti | head, torso, arm_staff, arm_fist, drum, foot_l, foot_r | complete |
| h5_fox | head, body, tail, crystal_l/c/r, eye_l, eye_r, lid_l, lid_r | complete |
| w_wisp | ribbon, crown, eye_l, eye_r, cheek_l, cheek_r, scrap_a/b/c (loose ribbon wisps), sparkle_big, sparkle_l, sparkle_r | complete |
| s_codex | cover, book (open, with pages), glow (cyan light + snowflakes), strap | complete |
| h4_snowman | head, mid_ball, base_ball (3 separate balls, redo), helmet, shield, arm_l, arm_r; plus v1 parts kept: helmet_v1, shield_v1, arm_fist_v1, arm_stick_v1 | complete (see note) |

Notes
- The parts are redrawn versions of the static symbols (same design, not pixel-identical), and the sheet does not say where each part goes.
  Assembly (pivot points, draw order, scale) is a rigging job: import into Spine/DragonBones, or ask for a placement pass.
  I tested automatic placement by template matching: unreliable (parts snapped to wrong places), so it was not used.
- Heads of the owl and fox contain baked-in eyes; the lid parts are meant to be drawn over them for a blink.
- The witch and yeti have no separate eyes, so only body motion (bob, hat/staff sway, arm swing) is possible for them.

## Snowman note
The redo sheet fixed the merged balls (head / middle / base are now separate). But its helmet, shield and arms are plainer than the static symbol
(no gold trim, bare stick arms, no purple scarf, no spear with banner). Recommended mix for rigging: the **new three balls** + the **v1** helmet, shield and arms
(they match the static art's gold studs and purple wraps). The scarf and spear are not in any layer sheet yet.
