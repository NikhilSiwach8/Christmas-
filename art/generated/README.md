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
bg_whiteout_portrait arrived in batch 8, so the background set is complete. All wired in via `components/Background.svelte`
(base in the base game; blizzard / whiteout cross-fade in during that rite's free spins). The paintings already contain chains, hanging banners and
crystal totems, so the procedural chains/banners were removed from `Scene.svelte`.

## Props (batch 8)
lantern_leaning / lantern_squat / lantern_tall (transparent): used on the four board corners (`BoardFrame.svelte`; the leaning one is mirrored on one corner).
chain.webp (667x2000, transparent): not used in the game - the painted backgrounds already include chains. Kept for later (e.g. a hanging menu plaque).


## Scene props (batch 9)
basin (flaming stone basin, x2 beside the wheel), banner (standing, mirrored on the right), acolytes_pray (left group), acolytes_staff (right group, mirrored),
lantern_double (unused so far). Wired in `Scene.svelte` and `FrostWheel.svelte`. Props are trimmed to their bounds and exported at 384-640 px tall.
Procedural art left: the Frost Wheel itself (wheel_stand/face/hub/pointer art not generated yet), the control bar, the rite banner / badge / counter.

## Ground props (batch 10)
prop_stump, prop_twigs, prop_rock (used as ground dressing in `Scene.svelte`), prop_totem_short, prop_totem_tall (exported to static/art/props but unused:
the painted backgrounds already contain totems). All have real transparency. With this the scene-prop set from the prompt pack is complete.
Remaining art to generate: wheel parts, control bar + UI pieces, rite banner / counter / multiplier badges, buy-menu cards, intro cards, logo, thumbnails, win plates, audio.

## Particles + flag (batch 11)
fx_snow_a/b/c (three snowflake particles), fx_sparkle (four-point star), prop_flag (small snowflake flag, used as ground dressing).
All real alpha. Used by `components/Snowfall.svelte`: 26 gentle flakes + 7 twinkling sparkles in the base game, 64 faster, wind-blown flakes during the blizzard rite.
The layer sits behind the board/props/UI (zIndex -0.5) so it never covers the control bar.

## Wheel (batch 12)
wheel_stand (static: ring, spikes, post, base), wheel_face (rotating, 8 wedges, centre hole), wheel_hub, wheel_pointer (coral crystal, the only coral in the game), fx_shard (crystal shard particle; its baked checkerboard was removed by cutting along the outline).
Wired in `FrostWheel.svelte`. Geometry measured from the stand: opening centre (289,267), radius 134.5 in the 580x679 export; the face is sized to tuck under the rim.
Face wedge colours are the art's own (cyan, pale, deep blue, violet); the numbers are drawn by the game in white with an ink outline so they read on every wedge.
Unused so far: fx_shard.

## Wheel extras (batch 13)
wheel_win_flare (starburst behind the wheel when it lands), wheel_tag (paper tag plate behind the result line), wheel_tail (frost serpent beside the wheel post, gentle sway, hidden while the wheel is lifted).
All real alpha; wired in `FrostWheel.svelte`. The wheel set from the prompt pack is now complete.

## Feature art (batch 14)
ft_rite_banner (scroll shown when a rite awakens), ft_emblem_blizzard / ft_emblem_whiteout (emblem above the banner), ft_counter_plaque (hanging free-spin counter), ft_badge_aurora (violet medallion for the base-game Aurora multiplier).
All real alpha, wired in `RiteBanner`, `FreeSpinCounter`, `MultiplierBadge`. Text is drawn by the game in ink/blue on the paper areas (Uncial Antiqua title, Nunito Sans subtitle).
Still using a procedural badge: the cyan "rite" progressive multiplier (and gold "max") - only the violet medallion exists.

## Spin button, bar plate, rite badge (batch 15)
ui_spin_a (normal, dark blue + gold ring) and ui_spin_b_hover (bright cyan) are used; pressed and disabled are derived from A (darkened / desaturated).
ui_spin_c_rejected_checkerboard: has a fake checkerboard baked in and is nearly identical to A - not used.
ft_badge_rite: cyan medallion, now the free-spin progressive multiplier badge. A 'stop' (square icon) variant of the spin button does not exist yet; the stop state shows the text label.
ui_bar_plate: ornate dark plate (2000x674, ratio ~3:1) - NOT wired: the game's bar is a slim 9.7:1 strip, and stretching the art would distort it. Needs a wider/slimmer regeneration or a layout change.
Spin button art is applied through `uiTheme.spinSprite` (see ui-theme.patch).

## Round buttons + spin states (batch 16)
ui_spin_stop (square icon) and ui_spin_disabled (grey stone) are now the real stop/disabled spin states (the derived ones are replaced).
ui_round / ui_round_hover / ui_round_down: ornate medallion buttons. Supported via `uiTheme.roundSprite` but turned OFF: at the bar's small button size (~70 units) they overlap
and bury the AUTO / TURBO / MENU labels. Good candidates for larger menu buttons instead.

## Icons (batch 17)
ui_icon_plus, ui_icon_minus, ui_icon_menu (white pill-style icons with ink outline; the menu icon's baked checkerboard was removed by cutting along its outlines) - wired via `uiTheme.icons` for the + / - / MENU buttons.
ui_round_off and ui_round_active: grey disabled and glowing active versions of the ornate round button - exported but unused (the ornate round art is switched off at bar size).
Still text labels: AUTO SPIN, TURBO, BUY BONUS (no icons generated for them).

## Icons (batch 18)
ui_icon_turbo and ui_icon_auto are wired (Turbo / Auto buttons). ui_icon_settings, ui_icon_sound_on, ui_icon_sound_off are exported but not wired: the menu's settings button is a *light* (white) button, where a white icon with a dark outline would vanish, and the sound switch uses a different component.
Several arrived with baked white/checkerboard backgrounds and were cut along their black outlines (same method as the menu icon).

## Icons (batch 19)
ui_buy_bonus (snowflake key) is wired on the Buy Bonus button (icon + small "BUY BONUS" label; text only while the bonus is active). All four had real alpha.
Exported but not wired: ui_avatar (smiling snowball mascot in a beanie - candidate for the bar's left slot / loader / favicon), ui_paytable (scroll), ui_info ("i" in a ring) - they belong to the menu / paytable screens, which still use the default light buttons.
