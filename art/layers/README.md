# Animation layers (batch 5) - parts sliced from the generated "separated parts" sheets

One folder per hero symbol: each part is a transparent PNG cropped to its bounds, plus `manifest.json` (where the part sat on the source sheet) and `_sheet.webp` (the original sheet).
Regenerate with `art/tools/slice_layers.py` (names are given in reading order).

| Symbol | Parts | Status |
|---|---|---|
| h1_witch | hat, head, hand_a, hand_b, robe, staff (lantern) | complete |
| h2_owl | head, eye_l, eye_r, lid_l, lid_r, orb, body, stump | complete |
| h3_yeti | head, torso, arm_staff, arm_fist, drum, foot_l, foot_r | complete |
| h5_fox | head, body, tail, crystal_l/c/r, eye_l, eye_r, lid_l, lid_r | complete |
| h4_snowman | helmet, arm_a, arm_b, shield, **snowman_stack** | **redo**: head + 2 snowballs merged into one piece |

Notes
- The parts are redrawn versions of the static symbols (same design, not pixel-identical), and the sheet does not say where each part goes.
  Assembly (pivot points, draw order, scale) is a rigging job: import into Spine/DragonBones, or ask for a placement pass.
  I tested automatic placement by template matching: unreliable (parts snapped to wrong places), so it was not used.
- Heads of the owl and fox contain baked-in eyes; the lid parts are meant to be drawn over them for a blink.
- The witch and yeti have no separate eyes, so only body motion (bob, hat/staff sway, arm swing) is possible for them.
