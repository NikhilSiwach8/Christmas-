# Frozen Rite - complete asset prompt pack

Original ice-themed slot. **Every asset below must be original** - do not feed in screenshots/art of any existing game
(including the slot that inspired the feature set) and do not name real games, studios or artists in prompts.

How to use: for every image prompt, paste **[STYLE PREFIX]** first, then the asset block, then **[GLOBAL NEGATIVE]**.
Generate the anchor assets first (Section 2: Emblem, Frost Priestess, Reel Frame), then reuse them as style/reference
images for everything else. Keep one generator + one seed family for the whole project.

---

## 0. Consistency rules (read first)

1. **Palette is locked** (same hex values as `frontend/frozen_rite/src/game/theme.ts`):
   night `#061226` - deep `#0B2A4A` - glacier `#5FD4FF` - frost `#DFF6FF` - aurora violet `#9D7BFF` - warm gold `#FFE9A8` (premium trim only) - danger rose `#FF6B8A` (pointer / warnings only).
2. **One light**: soft key light from the **upper left**, cool cyan rim light from the **lower right**, faint aurora-violet bounce from below. Never warm orange light (gold appears only as material colour).
3. **One material language**: translucent glacier ice with internal hairline frost cracks and a soft inner glow; carved pale glacier-stone; brushed silver-blue metal; gold inlay only on high-value pieces.
4. **One shape language**: chunky, readable silhouettes with slightly angular, crystalline facets; thick consistent outer rim; no tiny details that vanish at 90 px.
5. **One recurring emblem** - the *Frost Eye Sigil*: a six-point snowflake whose centre is a vertical almond-shaped eye. It appears on the logo, scatter, wild, wheel hub, frame corners, buttons. If an asset has no natural place for it, add it small as an engraved rune.
6. **One rune alphabet**: angular, straight-stroke runes (no curves) used as engraved ornament only - never readable words.
7. **Render style**: hand-painted semi-realistic 2.5D game illustration, soft gradients, crisp edges, subtle painterly texture, high contrast, slight glossy specular highlights. Same level of detail across all symbols.
8. **Symbols are judged at 90 px**: view every symbol downscaled to 90x90 - silhouette and colour must still identify it.

### [STYLE PREFIX] (paste before every image prompt)
```
Premium online-slot game art, hand-painted semi-realistic 2.5D illustration, ice and aurora theme. Locked palette: deep night navy #061226, deep blue #0B2A4A, glacier cyan #5FD4FF, frost white #DFF6FF, aurora violet #9D7BFF, with warm gold #FFE9A8 used only as metal trim on premium pieces. Lighting: soft key light from upper left, cool cyan rim light from lower right, faint violet bounce from below. Materials: translucent glacier ice with hairline internal frost cracks and a soft inner glow, carved pale glacier stone, brushed silver-blue metal. Chunky, readable, slightly angular crystalline shapes with a clean thick outer rim, crisp edges, glossy highlights, subtle painterly texture. Recurring motif: a six-point snowflake with an almond-shaped eye at its centre ("Frost Eye Sigil") and angular straight-stroke engraved runes (decorative only, not readable). Consistent with the rest of the Frozen Rite game set.
```

### [GLOBAL NEGATIVE]
```
text, letters, watermark, signature, logo of any real brand, photo-realistic photography, 3D render plastic look, flat vector clip-art, orange or red warm lighting, blurry, low contrast, muddy colours, extra limbs, deformed anatomy, cropped subject, busy cluttered background, tiny unreadable details, characters or designs resembling any existing game or film
```

### Technical export rules (all images)
- Symbols/UI pieces: **transparent PNG**, subject centred with 6% padding, then convert to **WebP (quality 90)**.
- Generate at 2x of the display size (e.g. 512x512 for symbols shown at ~90-120 px).
- Backgrounds: no transparency; export desktop **2039x1000** (ratio `BACKGROUND_RATIO`) and portrait **1242x2208** (`PORTRAIT_BACKGROUND_RATIO`).
- Keep generated "frames" at exact aspect ratios given; pad, don't stretch.
- Win/idle animations (Spine/Lottie) need **layered sources**: for every animated asset also generate the "LAYERS" prompt variant (separate parts on transparent background).

---

## 1. Typography and control bar (implemented in code)

| Element | Spec |
|---|---|
| UI font | **Cinzel** (engraved Roman capitals, SIL OFL), weight 700, letter-spacing +1.5 px |
| Titles / logo / big numbers | **Cinzel Decorative** 900 (the logo wordmark should be commissioned/drawn to match: engraved, icy, 3D bevel) |
| Text colour | frost `#DFF6FF`; accent/active gold `#FFE9A8` |
| Bar panels | deep `#0B2A4A` @ 90% with 3 px glacier `#5FD4FF` rim, rounded 50 px |
| Buttons | night `#061226` with 3 px glacier rim; disabled `#2B3F55`; **spin button** `#0E6A9C` with gold ring |
| Layout | Balance - Win - Bet panels on top row; Menu / Buy Bonus / Auto / Bet(Spin) / Turbo left-centre; - / + right (desktop). Portrait stacks win above the board and balance/bet below. |

Already built in `frontend/ui-theme.patch` + `src/game/uiTheme.ts`. **Optional skin upgrade prompts** are in Section 7.

---

## 2. Anchor assets (generate these first)

### 2.1 Frost Eye Sigil (emblem) - `sigil.png`, 1024x1024
```
[STYLE PREFIX] A single emblem: six-point snowflake carved from glacier ice with a silver-blue metal outline, an almond-shaped glowing cyan eye in the exact centre, tiny angular runes engraved along each arm, soft aurora-violet glow behind it, perfectly symmetrical, centred on a transparent background, front view. [GLOBAL NEGATIVE]
```

### 2.2 Frost Priestess (H1 hero) - `h1.webp`, 512x512
See 3.1. Use the finished image as the character/style reference for all other symbols.

### 2.3 Reel frame - `reels_frame.png`
See 4.2.

---

## 3. Symbols (each 512x512, transparent, front/3-4 view, centred)

Symbol keys match the math (`H1-H5`, `L1-L4`, `W`, `S`) and `SYMBOL_INFO_MAP` (`static`, `win`, `postWinStatic`).

### 3.1 H1 - Frost Priestess (highest pay)
```
[STYLE PREFIX] Bust portrait of a serene frost priestess in layered pale-blue and frost-white ritual robes with a high collar, a hood crowned with branching antler-shaped ice crystals, glowing cyan eyes, silver-blue face markings in angular runes, holding the top of a crystal staff topped by the Frost Eye Sigil, gold trim on the collar, filling a square composition, transparent background. [GLOBAL NEGATIVE]
```
LAYERS (for Spine win animation): `hood+crown`, `face`, `robes`, `staff+sigil`, `glow`. Win animation: eyes flare, staff sigil pulses, ice crown grows crystals, breath of mist.

### 3.2 H2 - Ice Wolf
```
[STYLE PREFIX] Head-and-shoulders of a majestic white-blue wolf made of frosted fur and translucent ice shards along the mane and brow, glowing cyan eyes, breath of frost mist, silver-blue metal collar with the Frost Eye Sigil, fierce but noble expression, square composition, transparent background. [GLOBAL NEGATIVE]
```
Win animation: head lifts, howl, mist burst.

### 3.3 H3 - Glacier Golem
```
[STYLE PREFIX] Bust of a hulking golem built from carved glacier blocks and pale stone, glowing cyan core visible in the chest crack, shoulder plates of silver-blue metal with engraved runes, a small aurora-violet crystal in the forehead, heavy calm face, square composition, transparent background. [GLOBAL NEGATIVE]
```
Win animation: core glows, ice dust falls, brow crystal flashes.

### 3.4 H4 - Frozen Crown
```
[STYLE PREFIX] A regal crown made of interlocking ice spires and silver-blue metal bands, a large glacier-cyan gemstone in the centre carved with the Frost Eye Sigil, gold inlay along the base, floating slightly with frost sparkles, 3/4 view, square composition, transparent background. [GLOBAL NEGATIVE]
```

### 3.5 H5 - Rune Idol
```
[STYLE PREFIX] A small totem idol carved from pale glacier stone, rounded angular head with closed eyes, glowing cyan angular runes down the body, tiny ice crystals growing from the shoulders, sitting on a circular silver-blue base, square composition, transparent background. [GLOBAL NEGATIVE]
```

### 3.6 Low-pay gems (L1-L4) - one *family*, four cuts, four colours
Shared rule: faceted gemstones in a thick silver-blue bezel, inner glow, small highlight star, **same size, same bezel, same lighting**; only cut + colour change. Generate all four in one batch for consistency.

| Key | Cut | Colour |
|---|---|---|
| L1 | round brilliant (diamond) | glacier cyan `#5FD4FF` |
| L2 | pointed shard / kite | aurora violet `#9D7BFF` |
| L3 | teardrop / pear | pale ice blue `#BFE9FF` |
| L4 | hexagon step-cut | silver-white `#DFF6FF` with cyan core |

```
[STYLE PREFIX] A single faceted [CUT] gemstone in [COLOUR], set in a thick brushed silver-blue metal bezel with four tiny claw prongs, soft inner glow, one small star highlight, a faint engraved rune on the bezel, slightly glossy, square composition, transparent background. [GLOBAL NEGATIVE]
```

### 3.7 W - Aurora Wild
```
[STYLE PREFIX] A swirling vertical ribbon of aurora light in glacier cyan and aurora violet, contained inside an ornate arched ice-and-silver frame, the Frost Eye Sigil glowing at the centre, sparkles drifting upward, tall composition (about 3:4), transparent background. [GLOBAL NEGATIVE]
```
Win animation: ribbon flows, sigil flares, shards burst (explodes into `explodedW` frost shards).
Post-win static `explodedW`: same frame, ribbon gone, cracked, faintly glowing.

### 3.8 S - Frozen Codex (scatter)
```
[STYLE PREFIX] An ancient book bound in frozen leather and carved ice plates, silver-blue metal corners, the cover dominated by a large glowing Frost Eye Sigil, glowing cyan pages cracking open slightly with light and snowflakes escaping, slightly oversized and heroic, 3/4 view, transparent background. [GLOBAL NEGATIVE]
```
Animations: spin (hover + page flutter), land (thud + frost ring), win (opens, beam of aurora light).

### 3.9 Symbol state frames (for every symbol)
- `static`: as above. `postWinStatic`: same, 55% opacity cracked-ice overlay (generate a shared `frost_crack_overlay.png`, transparent 512x512).
- `explosion` (shared): 12-frame sprite sheet, 512x512 per frame, "burst of ice shards and snow dust expanding from the centre, cyan and white, transparent background".

---

## 4. Environment and board

### 4.1 Backgrounds
**Base game - Frozen Shrine** - `bg_base_desktop.webp` (2039x1000) and `bg_base_portrait.webp` (1242x2208)
```
[STYLE PREFIX] Wide environment: the interior of an ancient glacier shrine at night, huge carved ice pillars with glowing cyan runes, a frozen altar in the centre-background (empty space in the centre for the game board), distant aurora borealis visible through a cracked ice ceiling, drifting snow, deep blue haze, calm and mysterious, strong depth, dark in the centre for symbol readability, no characters, no text. [GLOBAL NEGATIVE]
```
Portrait variant: same scene recomposed vertically, altar lower-centre, tall pillars.
Layers for parallax: `far (sky+aurora)`, `mid (pillars)`, `near (foreground ice crystals framing the corners)`, `fog`.

**Blizzard Rite (free spins)** - `bg_blizzard_*.webp`: same shrine, violent snowstorm, heavy white-blue snow, wind-blown mist, aurora faded, colder, slightly darker.
```
[STYLE PREFIX] The same glacier shrine as the base game but engulfed in a raging blizzard: horizontal snow streaks, thick white-blue mist, pillars partially hidden, runes glowing brighter cyan, aurora barely visible, keep the centre dark and clear for the board. [GLOBAL NEGATIVE]
```
**Whiteout Rite (free spins)** - `bg_whiteout_*.webp`: same shrine, blinding pale light, aurora violet flooding the scene, floating ice shards, shockwave rings, higher contrast, more violet.
```
[STYLE PREFIX] The same glacier shrine as the base game in an eerie whiteout: blinding frost-white light from the ceiling crack, aurora violet energy flooding the scene, floating ice shards, shockwave rings of frost, runes glowing violet-white, keep the centre dark and clear for the board. [GLOBAL NEGATIVE]
```

### 4.2 Reel frame (5 reels x 4 rows) - `reels_frame.png`
Visible window ratio **5:4**, outer frame about 5.55:4.55 (including border).
```
[STYLE PREFIX] A rectangular slot-machine reel frame, landscape, thick carved pale glacier-stone border with silver-blue metal inlay, glowing cyan rune lines along the edge, a Frost Eye Sigil at the top centre, small ice crystals growing from the four corners, completely empty transparent interior, symmetric, front view, transparent background. [GLOBAL NEGATIVE]
```
Also: `reel_cell_dark.png` (a seamless 512x512 dark translucent navy tile with faint frost vein texture, used behind symbols) and `reel_separator.png` (thin vertical glowing cyan rune line, 16x1024, tileable).

### 4.3 Anticipation (scatter tease on reel)
```
[STYLE PREFIX] A tall vertical column of swirling cyan frost energy and snow, soft glow, edges fading to transparent, 1:3 ratio, transparent background, seamless loop ready. [GLOBAL NEGATIVE]
```

### 4.4 Foreground particles
- `snow_flake_a/b/c.png` (64x64): soft six-point flakes, three variants.
- `frost_spark.png` (32x32): four-point sparkle, cyan-white.
- `aurora_ribbon.png` (512x128): translucent flowing cyan-violet ribbon, transparent edges.

---

## 5. Features

### 5.1 Rite banners and free-spin intro (`riteBanner` frame, `fsIntro`)
- **Banner frame (both rites)** `rite_banner_frame.png` 1600x420:
```
[STYLE PREFIX] A wide ceremonial banner plate, carved glacier stone and silver-blue metal, pointed ornate ends, empty dark navy centre for text, Frost Eye Sigil at both ends, thin glowing cyan rune border, front view, transparent background. [GLOBAL NEGATIVE]
```
- **Blizzard emblem** `emblem_blizzard.png` 512x512: the Frost Eye Sigil surrounded by a spiral of wind-blown snow, cold cyan.
- **Whiteout emblem** `emblem_whiteout.png` 512x512: the Frost Eye Sigil exploding into radial shards and light, violet-white.

### 5.2 Free-spin counter frame (`Frame_FSCounter.png`, ratio 824:622)
```
[STYLE PREFIX] A small hanging panel for a counter, carved glacier stone with silver-blue border and glowing cyan rune lines, empty dark navy centre, a tiny Frost Eye Sigil at the top, chains or icicles hanging from the top edge, front view, transparent background. [GLOBAL NEGATIVE]
```

### 5.3 Aurora multiplier badge (`mult_badge.png`, 512x512, empty centre for number)
```
[STYLE PREFIX] A round medallion, thick silver-blue metal ring with engraved runes, deep navy centre left empty for a number, swirling aurora violet and cyan light around the rim, small ice crystals on top and bottom, front view, transparent background. [GLOBAL NEGATIVE]
```
Variants: `mult_badge_aurora.png` (violet rim) for the base random multiplier, `mult_badge_rite.png` (cyan rim) for the progressive multiplier. Burst effect: `mult_burst.png` (radial cyan-white shards, 768x768).

### 5.4 Frost Wheel
- **Wheel rim + disk** `wheel_disk.png` 1024x1024 (8 equal segments, empty for numbers):
```
[STYLE PREFIX] Top-down view of a ceremonial spinning wheel: a thick carved glacier-stone and silver-blue metal rim with runes, eight equal wedge segments alternating deep navy, glacier cyan, aurora violet and frost white, each wedge with a subtle frost texture and a thin gold divider, centre empty for a hub, completely symmetrical, no numbers, transparent outside the rim. [GLOBAL NEGATIVE]
```
- **Hub** `wheel_hub.png` 256x256: round silver-blue hub with the Frost Eye Sigil glowing.
- **Pointer** `wheel_pointer.png` 128x192: a pointed danger-rose `#FF6B8A` crystal pointer in a silver-blue socket, pointing downward.
- **Wheel backdrop** `wheel_backdrop.webp` 2039x1000: dark circular vignette of swirling snow and aurora, centre clear.
- **Result flare** `wheel_win_flare.png` 1024x1024: radial burst of light shards, frost white and gold.

### 5.5 Buy / Bonus-bet card art (modal) - 1024x768 each
- **Blizzard Rite**: `[STYLE PREFIX]` the Frost Priestess raising her staff inside a howling blizzard, snow streaks, cyan palette, dramatic.
- **Whiteout Rite**: `[STYLE PREFIX]` the Frost Priestess surrounded by exploding ice shards and blinding violet-white light, aurora overhead.
- **Aurora Bet**: `[STYLE PREFIX]` an aurora-lit Frozen Codex floating above an altar, ribbons of violet and cyan light spiralling out.
Icons (256x256): sigil on a cyan disk / sigil on a violet disk / sigil on a gold-rimmed disk.

---

## 6. Win presentation
- **Win tier banners** (art plates, text is drawn by code; 1400x500): `win_big`, `win_mega`, `win_epic`, `win_max`, `win_superwin`. One banner design that escalates: Big = silver-blue + cyan, Mega = + violet, Epic = + gold trim and larger crystals, Max/Super = gold-and-violet crown of ice spires.
```
[STYLE PREFIX] A wide win-banner plate in a [TIER] style, carved ice and silver-blue metal, [TIER DETAILS], empty dark centre for text, front view, transparent background. [GLOBAL NEGATIVE]
```
- **Coins/shards**: `ice_coin.png` (256x256): a coin-shaped ice token with the sigil, silver-blue rim, one gold ring - used by `WinCoins`. Sprite sheet of 8 rotation frames for the spin.
- **Win meter explosion**: 12-frame sheet, radial cyan-white burst.
- **Transition** (`transition` spine/frames): ice-crack wipe covering the screen from the centre outwards, 16 frames at 1280x720, white-blue cracks spreading, ends in full frost-white, reverse to reveal.

## 7. UI skin upgrade (optional; bar already works with the themed procedural look)
All 9-slice-friendly, transparent, designed on the Section 1 palette.
- `ui_panel.png` 640x160: rounded panel, deep-blue fill, glacier rim, tiny sigil at the left, subtle frost texture, inner shadow.
- `ui_button_round.png` 256x256: round button, night fill, glacier rim, hover = brighter rim (`_hover`), pressed = inset (`_down`), disabled = grey-blue (`_off`).
- `ui_button_spin.png` 384x384: large round spin button, cyan-blue disc, gold ring, Frost Eye Sigil as the arrow, glow (`_hover`, `_down`, `_off`, `_stop` variant with a square).
- Icons (128x128, frost-white line icons with a faint glow, consistent 6 px stroke): menu (three runes), buy bonus (key/sigil), autoplay (loop arrows), turbo (double chevron), sound on/off, settings (gear carved from ice), plus, minus, info, close.
- `turbo_active` / `autospin_active` glow overlays: cyan ring pulse (`_hover` brighter).
```
[STYLE PREFIX] A set of eight matching UI icons, each frost-white line art with a faint cyan glow on a transparent background, identical 6px stroke weight, rounded ends, icons: menu, buy bonus, autoplay, turbo, sound, settings, plus, minus. [GLOBAL NEGATIVE]
```

## 8. Branding and store assets
- **Logo** `logo.webp` 1800x700 (also the `ADD YOUR LOGO` slot):
```
[STYLE PREFIX] A game title logo reading "FROZEN RITE" in engraved Roman capitals with decorative flared serifs, letters carved from glacier ice with a silver-blue metal bevel and gold highlights on the edges, the Frost Eye Sigil replacing the "O"-like space between the words, icicles hanging from the top edge, aurora glow behind, frost particles, centred, transparent background. [GLOBAL NEGATIVE: remove 'text' from the negative list for this prompt only]
```
- **Lobby thumbnail** `thumb_square.webp` 1024x1024 and `thumb_wide.webp` 1920x1080: Frost Priestess centred, aurora sky, logo placed by code.
- **Loading screen** `loader_bg.webp` (reuse base background, darkened) + spinner = rotating Frost Eye Sigil (`loader_sigil.png` 256x256, transparent).
- **Favicon** `favicon.svg`: the sigil as a 2-colour (glacier on night) vector.

---

## 9. Audio prompts (ElevenLabs Music/SFX or equivalent; license for commercial use required)

Global audio brief: *cold, mystical, cinematic. Instruments: glass harmonica, bowed crystal glasses, choir "ooh" pads, low sub drone, sparse bells, soft taiko hits. Key: D minor. No vocals with words. No copyrighted melodies.* Master levels: music -16 LUFS, SFX peak -3 dBFS. Deliver 44.1 kHz WAV, then pack with the audio-sprite tool into `sounds.*`.

### Music (seamless loops unless noted)
| id | Length | Prompt |
|---|---|---|
| `bgm_main` | 90 s loop, 76 BPM | Mystical frozen shrine ambience: glass harmonica melody over a low drone, slow choir pads, sparse bell pings, gentle wind, calm and mysterious, seamless loop |
| `bgm_freespin` (Blizzard) | 80 s loop, 100 BPM | Intense blizzard battle theme: pulsing low strings, driving soft taiko, howling wind texture, rising choir, tension building, seamless loop |
| `bgm_freespin_whiteout` (new) | 60 s loop, 118 BPM | Climactic icy cinematic: fast arpeggiated crystal synth, powerful choir hits, deep sub impacts, bright aurora shimmer, seamless loop |
| `jng_intro_fs` | 5 s stinger | Majestic reveal stinger: choir swell, crystal glissando up, deep impact, shimmering tail |
| `bgm_winlevel_big` / `_mega` / `_epic` / `_max` / `_superwin` | 12-20 s, escalating | Celebration music for a [TIER] win: ice-bell fanfare, rising choir, triumphant strings; each tier adds more layers, tempo and a bigger final hit; no loop, clean end |

### Sound effects (map to existing ids so no code changes are needed)
| id(s) | Prompt |
|---|---|
| `sfx_btn_general` | short crisp glass tick, 0.15 s |
| `sfx_btn_spin` | icy whoosh with a soft crystal click, 0.4 s |
| `sfx_reel_stop_1..5` | soft ice-block thud with a tiny chime, five pitches rising slightly per reel |
| `sfx_symbols_landing`, `sfx_royals_landing` | gentle frost crunch + chime (low symbols softer, high symbols with a deeper sub) |
| `sfx_scatter_stop_1..5` | glassy resonant gong that gets richer with each scatter (1 to 5), cold shimmer tail |
| `sfx_scatter_reveal`, `sfx_scatter_win`, `sfx_scatter_win_v2` | book of ice cracking open: crisp crack, rising magical swell, shimmer |
| `sfx_anticipation_start`, `sfx_anticipation` | rising shimmering wind tension riser, loopable, builds to a held note |
| `sfx_superfreespin` | huge ice-shatter impact with a choir hit and long reverb |
| `sfx_fs_respins` | bright chime cascade + whoosh (extra spins awarded) |
| `sfx_winlevel_small/standard/nice/substantial/end` | escalating bell-and-glass chimes, 0.5-2.5 s, 'end' is a soft resolving chord |
| `sfx_youwon_panel` | warm shimmering chord swell as the panel opens |
| `sfx_bigwin_coinloop` | loopable stream of ice tokens clinking into a bowl |
| `tumble_win_1..5` | five escalating crystal arpeggio hits (unused in ways play, keep for cascades) |
| `sfx_wild_explode` | aurora ribbon bursting into glass shards with a whoosh |
| `sfx_multiplier_landing/up/update/win/reset/combine_a/b/explosion_a-c` | magical rising chime for a multiplier gaining power: 'up' = ascending sparkle, 'reset' = descending tone, 'explosion' = cracking ice burst |
| **new** `sfx_wheel_spin` | ratchet clicking wheel that slows down, wooden-stone ticks with icy ring, 4.5 s decelerating |
| **new** `sfx_wheel_land` | heavy ice-bell strike with a choir swell and sparkle tail, 2 s |
| **new** `sfx_rite_blizzard` / `sfx_rite_whiteout` | blizzard = wind gust + deep horn swell; whiteout = bright violent crystal shockwave + riser, ~3 s each |
| **new** `sfx_aurora_mult` | short magical whoosh + glassy sparkle, rising pitch, 0.8 s |

---

## 10. Production checklist
- [ ] Anchors approved: sigil, Frost Priestess, reel frame (art director sign-off before anything else).
- [ ] All 9 paying symbols viewed side by side at 90 px: silhouette + colour distinct, same lighting.
- [ ] Palette sampled from each asset: only locked hexes (+ natural gradients of them).
- [ ] Sigil appears on logo, scatter, wild, frame, wheel hub, buttons.
- [ ] Backgrounds keep the centre dark/clear (board readability) in all three variants and both orientations.
- [ ] Contrast check for text on panels (frost on deep navy: > 7:1).
- [ ] Layers exported for every animated asset; atlases packed; WebP + PNG fallbacks.
- [ ] Audio loops verified seamless; loudness normalised; licensing documented.
- [ ] Legal: no third-party likeness, no AI output that reproduces a recognisable existing character; keep generation logs and licences.
