#!/usr/bin/env python3
"""Builds docs/frozen-rite-asset-prompts.txt with FULLY SELF-CONTAINED prompts (style + subject + negatives inlined).
Edit the data below, then run:  python3 docs/build_prompts.py
The reference/style-bible sections (0,1) and the file map / checklist / sizes (13-16) are kept from the existing file."""
import os, re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "frozen-rite-asset-prompts.txt")
old = open(OUT).read()

PREFIX = re.search(r'STYLE PREFIX\]?  \((?:paste|for reference)[^)]*\)\n"""\n(.*?)\n"""', old, re.S).group(1).replace("\n", " ")
NEG = re.search(r'GLOBAL NEGATIVE\]?  \((?:paste|for reference)[^)]*\)\n"""\n(.*?)\n"""', old, re.S).group(1).replace("\n", " ")
NEG_TEXT_OK = NEG.replace("text, letters, ", "")  # for assets that must contain lettering

TRANSPARENT = "Transparent background."


def img(body, text_ok=False, bg=TRANSPARENT):
    return f"{PREFIX} {body} {bg} Avoid: {NEG_TEXT_OK if text_ok else NEG}".replace("  ", " ")


# (id, name, file, size, note, prompt)
A = []


def add(i, name, file, size, note, prompt):
    A.append((i, name, file, size, note, prompt))


# ---------------------------------------------------------------- anchors
SIGIL = "A single emblem: a six-point snowflake drawn in thick black ink with pale-frost fill and pale-blue inner shading, a vertical almond-shaped eye in the exact centre with a frost-cyan iris, black slit pupil and a white highlight dot, tiny angular runes along each arm, perfectly symmetrical, front view, centred."
add("A1", "Frost Eye Sigil (brand emblem)", "sigil.png", "1024x1024", "ANCHOR - generate first. Approve before anything else.", img(SIGIL))
WITCH = "A cute-but-eerie little frost witch: very large round head under a pointed pale-blue hat with a drooping tip and a ring of tiny ice crystals, huge glowing cyan eyes, rosy-white cheeks, a small cloak of layered pale-blue and deep-blue fabric with a snowflake clasp, stubby hands holding a short staff topped by a hanging blue-flame ice lantern, three-quarter view, small flat oval ground shadow, filling a square composition."
add("A2", "Frost Witch (H1, hero symbol)", "h1.webp", "1024x1024 (export 512)", "ANCHOR - generate second. Attach A1 as style reference if your tool allows.", img(WITCH))
add("A3", "Chalk board grid", "board_grid.png", "2000x1500", "ANCHOR - generate third.", img("A hand-drawn game grid scratched directly into snow, seen from the front, exactly 5 columns by 4 rows, drawn ONLY with rough glowing frost-cyan chalk lines edged in thin black ink, slightly uneven and imperfect, a few frost-cyan paint splatter dots and tiny ice shards at some intersections, a small angular rune at each of the four outer corners. NO frame, NO wooden posts, NO banners, NO snow piles, NO border decoration, NO outer edge: just the loose chalk lines, completely empty cells, no symbols."))

# ---------------------------------------------------------------- symbols
SYMS = {
    "H2": ("Snow Owl Oracle", "h2.webp", "A cute-but-eerie round snow owl with a huge head, fluffy white and pale-blue feathers, giant glowing cyan eyes with white highlights, tiny ice-crystal brow feathers, perched on a short ice stump, holding a glowing cyan crystal ball in one wing, three-quarter view, small flat oval ground shadow, square composition."),
    "H3": ("Yeti Elder", "h3.webp", "A cute-but-eerie little yeti elder: round shaggy fur in DEEP ICE BLUE #1F5FA8 with pale-frost tips (clearly darker than white), a big white beard and white eyebrows hiding the mouth, glowing cyan eyes, a small carved ice drum hanging from a rope at the belly, tiny stubby arms holding a drumstick made of a frozen twig, three-quarter view, small flat oval ground shadow, square composition."),
    "H4": ("Snow Sentinel (snowman guard)", "h4.webp", "A cute-but-eerie little snowman sentinel: three stacked round snowballs with an ink outline, a dented tin-blue helmet with a snowflake emblem, glowing cyan eyes, a carrot nose, stick arms holding a round deep-blue shield bearing a six-point snowflake with an eye in the centre, small flat oval ground shadow, square composition."),
    "H5": ("Frost Fox Spirit", "h5.webp", "A cute-but-eerie frost fox spirit sitting, oversized head, fur in AURORA VIOLET #8F6BFF with pale-frost tips, chest and tail tip (clearly more violet than white), a fluffy tail curling around its feet, three small ice crystals floating above the head, glowing cyan eyes, a small aurora-violet gem on the forehead, three-quarter view, small flat oval ground shadow, square composition."),
}
for k, (n, f, b) in SYMS.items():
    add(k, f"{n} ({k}, high pay)", f, "1024x1024 (export 512)", "Attach A2 (Frost Witch) as style reference.", img(b))

RANKS = {
    "L1": ("A", "frost cyan", "a tiny six-point snowflake carved into the crossbar"),
    "L2": ("K", "deep ice blue", "a tiny six-point snowflake carved into the upper arm"),
    "L3": ("Q", "aurora violet", "a tiny six-point snowflake with an eye in its centre carved into the tail"),
    "L4": ("J", "pale frost white with a light cyan tint", "a tiny six-point snowflake carved into the hook"),
}
for k, (letter, col, deco) in RANKS.items():
    add(k, f"Card rank '{letter}' ({k}, low pay)", f"{k.lower()}.webp", "1024x1024 (export 512)", "Generate A, K, Q, J in the same session/seed so weight and size match. Attach A2 as style reference.",
        img(f'A single hand-lettered playing-card rank glyph, the capital letter "{letter}" in chunky ink-outlined lettering filled with {col}, wearing a small crown of ice spikes on top, {deco}, thick black outline, one white highlight stripe, centred, square composition, the letter fills about 75 percent of the frame.', text_ok=True))

WILD = "A tall, friendly swirling aurora wisp spirit: a flowing ribbon of aurora-violet and frost-cyan flat colour shapes in a vertical S-curve, a cute face with two big glowing eyes in the centre, wearing a tiny crown of ice, small sparkle stars drifting upward, thick black ink outline around the whole shape, small flat oval ground shadow, tall portrait composition (3 by 4)."
add("W", "Aurora Wisp (wild)", "w.png", "1024x1365 (export 3:4)", "States needed later: static, land, win, exploded (see W-EXPLODED).", img(WILD))
add("W-EXPLODED", "Aurora Wisp - exploded state", "explodedW.png", "1024x1365", "Shown after a win removes the wild.", img("The remains of an aurora wisp spirit after bursting: a small cracked ring of pale-blue ice on the ground with a few leftover violet and cyan ribbon scraps and tiny sparkle stars, ink outline, faded colours, small flat oval ground shadow, tall portrait composition (3 by 4)."))
SCAT = "A chunky ancient spellbook bound in pale-blue frozen leather with carved ice-plate corners, the cover showing a large six-point snowflake with an almond-shaped eye in the centre, the book partially open with cyan light and snowflakes escaping from the pages, a leather strap with an ice buckle, three-quarter view, small flat oval ground shadow, square composition, slightly oversized and heroic."
add("S", "Frozen Codex (scatter)", "s.png", "1024x1024 (export 512)", "States later: spin (hover), land, win (opens, beam of cyan).", img(SCAT))

LAYERS = {
    "H1": (WITCH, "pointed hat with ice-crystal ring; head and face; cloak; staff with lantern; hands"),
    "H2": (SYMS["H2"][2], "head with brow crystals; body and wings; crystal ball; ice stump; eyes open and eyes closed as two spare parts"),
    "H3": (SYMS["H3"][2], "head with beard; torso with fur; drum; arms with drumstick; legs"),
    "H4": (SYMS["H4"][2], "helmet; head with nose; three snowballs; shield; stick arms"),
    "H5": (SYMS["H5"][2], "head with forehead gem; body; tail; three floating crystals; eyes open and eyes closed as two spare parts"),
    "W": (WILD, "ribbon body; face; ice crown; sparkle stars"),
    "S": (SCAT, "cover; pages; light beam with snowflakes; strap with buckle"),
}
for k, (body, parts) in LAYERS.items():
    add(f"{k}-LAYERS", f"{k} animation layers", f"{k.lower()}_layers.png", "2048x2048", "For the Spine/Lottie rig. Use the finished approved symbol as image reference so parts match exactly.",
        img(f"{body} Deliver it as a separated parts sheet for animation: every part drawn complete (no overlap, hidden areas painted in) and laid out apart from the others with clear space between them. Parts: {parts}."))

add("FX-CRACK", "Frost crack overlay (post-win)", "frost_crack_overlay.png", "1024x1024", "Overlaid at 45% on a symbol after it has paid.", img("An overlay of thin jagged ink-line cracks and a few pale-blue frost patches spreading from the centre across a square area, cracks in black ink with a thin white highlight line beside them, no solid fill, mostly empty so it can sit on top of artwork, square composition."))
add("FX-EXPLODE", "Symbol explosion sprite sheet", "explosion.png", "4096x3072 (4x3 grid of 1024)", "12 frames, left-to-right then top-to-bottom.", img("A sprite sheet of 12 animation frames arranged in a grid of 4 columns by 3 rows, each frame the same size, showing a burst of ice shards and snow puffs expanding from the centre: frame 1 a tiny flash, growing to a full burst by frame 6, then shards drifting outward and fading by frame 12, flat ink-outlined shapes in frost cyan, pale frost and white."))

# ---------------------------------------------------------------- scene
BG = {
    "base": "A wide, pale snowfield landscape: snow-bone ground with large soft scalloped snow-drift hills in slightly darker cream, a few ink-outlined ice-spike totems and tiny snowflake marks scattered, thick iron-grey chains hanging from the top corners, a calm empty centre for the game board, very low contrast so game symbols stay readable, no characters.",
    "blizzard": "The same pale snowfield during a blizzard: pale-blue tinted ground and sky, thick white diagonal wind streaks, larger drifting snowflakes, ice-spike totems taller and glowing cyan at the tips, thick iron-grey chains swaying at the top corners, a calm empty centre for the game board, low contrast so game symbols stay readable, no characters.",
    "whiteout": "The same pale snowfield in an eerie whiteout: very pale lavender-white ground and sky, flat aurora-violet and cyan ribbons across the top, floating ice shards, big soft white circles of light behind the centre, ice-spike totems glowing violet at the tips, thick iron-grey chains hanging at the top corners, a calm empty centre for the game board, low contrast so game symbols stay readable, no characters.",
}
for k, b in BG.items():
    add(f"BG-{k.upper()}-D", f"Background - {k} (desktop)", f"bg_{k}_desktop.webp", "2039x1000", "Wide landscape; no transparency.", img(b + " Wide landscape composition, aspect ratio 2039 by 1000.", bg="Fully painted opaque background, no transparency."))
    add(f"BG-{k.upper()}-P", f"Background - {k} (portrait)", f"bg_{k}_portrait.webp", "1242x2208", "Tall portrait; no transparency.", img(b + " Tall portrait composition, aspect ratio 1242 by 2208, chains at the top corners, empty area in the lower-centre for the board.", bg="Fully painted opaque background, no transparency."))

add("SC-CHAIN", "Hanging chain (tileable)", "chain.png", "256x1024", "Make left/right copies by mirroring.", img("A thick hanging iron chain made of oval links with a pale-blue frost coating, ink-outlined, one white highlight per link, perfectly vertical, seamless at the top and bottom so it can tile, narrow tall composition."))
for n, d in [("a-tall", "tall"), ("b-short", "short and squat"), ("c-leaning", "slightly leaning to one side"), ("d-double", "a double lantern with two cubes side by side")]:
    add(f"SC-LANTERN-{n[0].upper()}", f"Ice lantern ({d})", f"lantern_{n}.png", "512x768", "4 variants, one per board corner.", img(f"A small {d} ice lantern on a short pale stone base: an ink-outlined cube of translucent pale-blue ice with a flat frost-cyan flame shape inside and tiny sparks, a snow cap on top, a little melted drip, front view, small flat oval ground shadow."))
add("SC-ACOLYTES-1", "Frost acolytes group (left)", "acolytes_left.png", "1400x1800", "Flanks the board, left side.", img("A group of three small snow-spirit acolytes standing close together, each a round snowball body wrapped in a pale-blue knit hood with a pointed tip and a thick scarf, stubby mittens clasped in front, glowing cyan eyes, slightly different heights, small flat oval ground shadows."))
add("SC-ACOLYTES-2", "Frost acolytes group (right)", "acolytes_right.png", "1400x1800", "Flanks the board, right side. Different pose from the left group.", img("A group of three small snow-spirit acolytes standing close together and leaning slightly toward the left, each a round snowball body wrapped in a deep-blue knit hood with a pointed tip and a thick scarf, one of them waving a stubby mitten, glowing cyan eyes, slightly different heights, small flat oval ground shadows."))
add("SC-BANNER", "Ceremonial banner", "banner.png", "800x1800", "Make left/right copies by mirroring.", img("A tall torn ceremonial banner hanging from a crooked dark pole with a rope loop, deep ice-blue cloth with a ragged V-cut bottom and white stitched edges, a large six-point snowflake with an almond-shaped eye in the centre in pale frost on the cloth, small ice crystals frozen on the top of the pole, slight wind curve, tall narrow composition."))
add("SC-BASIN", "Stone basin with frost flame", "basin.png", "1024x768", "Two copies sit beside the wheel.", img("A round carved stone basin on a thick base, ink-outlined pale grey-blue stone with a frost rim and small icicles, a flat frost-cyan flame burning inside, tiny rune cracks, seen slightly from above, small flat oval ground shadow."))
for n, d in [("totem-tall", "a tall ice-spike totem with a rune carved on it"), ("totem-short", "a short ice-spike totem"), ("rock", "a snow-covered rock"), ("twigs", "a bundle of frozen twigs tied with rope"), ("stump", "a snowy tree stump"), ("flag", "a tiny snowflake flag on a stick")]:
    add(f"SC-PROP-{n.upper()}", f"Prop: {d}", f"prop_{n}.png", "768x768", "Small scatter prop.", img(f"{d[0].upper()+d[1:]}, a single small environment prop, front view, small flat oval ground shadow, centred."))
for n, d in [("a", "a plump six-point flake with rounded arms"), ("b", "a thin delicate six-point flake with long arms"), ("c", "a chunky six-point flake with short arms and a hollow centre")]:
    add(f"FX-SNOW-{n.upper()}", f"Snowflake particle {n.upper()}", f"snow_{n}.png", "256x256", "Used by the falling-snow particle layer.", img(f"A single chunky ink-outlined snowflake particle, {d}, white and pale-blue fill, centred, simple and readable at 40 pixels."))
add("FX-SPARK", "Sparkle star", "spark.png", "256x256", "", img("A single four-point sparkle star, white with a cyan core, thin black ink outline, simple, centred."))
add("FX-SHARD", "Ice shard", "shard.png", "256x256", "", img("A single small ice shard, pale-blue fill with a white highlight stripe and a thick black ink outline, slightly angular, centred."))

# ---------------------------------------------------------------- wheel
add("WH-STAND", "Wheel stand + rim (static)", "wheel_stand.png", "1024x1200", "Static layer: rim, spikes, pole, base. The face is a separate rotating layer.", img("A ceremonial prize wheel on a thick pole seen from the front: a heavy dark-iron round rim studded with eight long white ice spikes pointing outward, a stone base ringed with small ice spikes, the centre of the wheel face left as an empty round hole, no wedges, no numbers, small flat oval ground shadow."))
add("WH-FACE", "Wheel face (rotating)", "wheel_face.png", "1024x1024", "Rotating layer. Numbers are drawn by the game.", img("A flat top-down round wheel face divided into eight equal wedges alternating frost cyan, deep ice blue, aurora violet and pale frost, thin black ink dividers between the wedges, a small round hole in the centre, completely empty wedges with no numbers, no symbols and no rim, perfectly symmetrical."))
add("WH-HUB", "Wheel hub", "wheel_hub.png", "512x512", "Static top layer in the wheel centre.", img("A round metal hub knob in dark iron with a thick ink outline, a small six-point snowflake with an almond-shaped eye in the centre in pale frost, one white highlight arc, front view, centred."))
add("WH-POINTER", "Wheel pointer", "wheel_pointer.png", "256x384", "The ONLY coral (#FF5A6E) element in the game.", img("A pointed crystal pointer in coral red #FF5A6E with a thick black ink outline and one white highlight stripe, seated in a small pale-grey socket at the top, pointing straight downward, front view, centred."))
add("WH-TAIL", "Frost serpent tail (decor)", "wheel_tail.png", "1000x1400", "Optional idle-sway decoration around the wheel pole.", img("The curling tail of a friendly frost serpent, coiled upward around a pole, pale-blue scales with deep-blue stripes and a pointed ice-crystal tip, one white highlight stripe along the tail, tall composition."))
add("WH-TAG", "Wheel label plate", "wheel_tag.png", "512x256", "Small tag behind each wheel number.", img("A small blank paper-coloured price tag with a rounded shape, a thick black ink outline and a tiny hole at one end, empty so a number can be added later, front view, centred."))
add("WH-FLARE", "Wheel result flare", "wheel_win_flare.png", "1024x1024", "Burst behind the winning segment.", img("A radial burst of flat ink-outlined star points in frost cyan and pale frost with gold tips, symmetrical, starburst shape, no centre object, centred."))

# ---------------------------------------------------------------- features
add("FT-BANNER", "Rite banner plate", "rite_banner_frame.png", "1600x420", "Title text is drawn by the game.", img("A wide ceremonial scroll banner: paper-coloured parchment with ragged torn edges and rolled ends on dark wooden rods, an ink border of angular runes, a small six-point snowflake with an almond-shaped eye at both ends, an empty centre left blank for lettering, front view, very wide composition."))
add("FT-EMB-BLIZZARD", "Blizzard emblem", "emblem_blizzard.png", "1024x1024", "", img("A round emblem: a six-point snowflake with an almond-shaped eye in the centre, surrounded by a spiral of wind-blown snowflakes and swirling flat white wind lines, frost-cyan and white palette, thick ink outline, centred."))
add("FT-EMB-WHITEOUT", "Whiteout emblem", "emblem_whiteout.png", "1024x1024", "", img("A round emblem: a six-point snowflake with an almond-shaped eye in the centre, exploding outward into radial ice shards and starburst rays, aurora-violet and pale-frost palette, thick ink outline, centred."))
add("FT-COUNTER", "Free-spin counter plaque", "Frame_FSCounter.png", "1648x1244", "Ratio 824:622. Counter text is drawn by the game.", img("A small hanging wooden-and-paper plaque on two short chains, a pale paper centre left empty for a counter, dark wood frame with ice crystals frozen on the top corners, a tiny six-point snowflake with an eye at the top centre, front view."))
for k, rim, name in [("aurora", "aurora-violet", "base-game random multiplier"), ("rite", "frost-cyan", "free-spin progressive multiplier"), ("max", "warm gold", "multiplier at its cap")]:
    add(f"FT-BADGE-{k.upper()}", f"Multiplier badge ({name})", f"mult_badge_{k}.png", "1024x1024", "Number is drawn by the game.", img(f"A round medallion: a thick ink-outlined iron ring with small ice spikes, a {rim} flat-colour rim band with angular runes, a pale-paper centre left empty for a number, one white highlight arc, small snowflake sparkles around it, front view, centred."))
add("FT-BURST", "Multiplier burst", "mult_burst.png", "1536x1536", "", img("A radial starburst of flat ink-outlined shards in frost cyan and pale frost, symmetrical, no centre object, centred."))

# ---------------------------------------------------------------- UI
add("UI-BAR", "Control bar plate", "ui_bar.png", "3040x314", "Ratio 1520:157, 9-slice friendly. Interior stays empty.", img("A very wide, fully rounded compact game control bar in dark night-navy #0E1B2E with a thick black ink outline and a thin pale-blue inner line, subtle frost-crack lines in the corners, tiny rivets, completely empty interior, front view, extremely wide composition."))
SPIN = "A large round game button: a deep ice-blue disc with a thick gold ring and black ink outline, a white curved-arrow spin symbol with a tiny six-point snowflake in the centre, one white highlight arc, front view, centred."
add("UI-SPIN", "Spin button - normal", "ui_spin.png", "768x768", "", img(SPIN))
add("UI-SPIN-HOVER", "Spin button - hover", "ui_spin_hover.png", "768x768", "Same as normal but brighter.", img(SPIN.replace("deep ice-blue disc", "brighter ice-blue disc with a soft white glow ring")))
add("UI-SPIN-DOWN", "Spin button - pressed", "ui_spin_down.png", "768x768", "", img(SPIN.replace("front view", "slightly smaller and darker as if pressed in, front view")))
add("UI-SPIN-OFF", "Spin button - disabled", "ui_spin_off.png", "768x768", "", img(SPIN.replace("deep ice-blue disc with a thick gold ring", "muted grey-blue disc with a thick pale-grey ring")))
add("UI-SPIN-STOP", "Spin button - stop", "ui_spin_stop.png", "768x768", "", img(SPIN.replace("a white curved-arrow spin symbol with a tiny six-point snowflake in the centre", "a white square stop symbol in the centre")))
RB = "A small round game button: a dark navy #16273F disc with a thick black ink outline and a thin cyan ring, empty centre for an icon, one white highlight arc, front view, centred."
for k, d in [("", RB), ("_hover", RB.replace("thin cyan ring", "brighter cyan ring")), ("_down", RB.replace("front view", "slightly darker and smaller as if pressed in, front view")), ("_active", RB.replace("thin cyan ring", "thick glowing frost-cyan ring")), ("_off", RB.replace("dark navy #16273F disc", "muted grey-blue disc").replace("thin cyan ring", "thin pale-grey ring"))]:
    add(f"UI-BTN{k.upper() or '-NORMAL'}", f"Round button{k or ' - normal'}", f"ui_btn_round{k}.png", "320x320", "", img(d))
ICONS = [("menu", "three horizontal bars"), ("plus", "a plus sign"), ("minus", "a minus sign"), ("auto", "a capital A inside a circular loop arrow"), ("turbo", "a lightning bolt"), ("sound-on", "a speaker with sound waves"), ("sound-off", "a speaker with a diagonal slash"), ("settings", "a gear carved from ice"), ("info", "a lowercase i inside a circle"), ("close", "a bold X"), ("buy-bonus", "a key whose bow is a six-point snowflake"), ("paytable", "a rolled scroll")]
for k, d in ICONS:
    add(f"UI-ICON-{k.upper()}", f"Icon: {k}", f"icon_{k}.png", "256x256", "White icon; keep stroke weight identical across all 12.", img(f"A single flat white UI icon of {d}, chunky 8 pixel stroke, rounded ends, a thin black ink outline around the white shape, nothing else, centred, simple and readable at 40 pixels.", text_ok=(k == "auto")))
add("UI-AVATAR", "Avatar / home button", "ui_avatar.png", "384x384", "Left-most slot in the bar.", img("A round badge showing a cute smiling snowball mascot head wearing a tiny knit beanie with glowing cyan eyes, thick ink outline, on a night-navy disc with a pale-blue ring, front view, centred."))

# ---------------------------------------------------------------- menu
add("MN-CARD", "Paper card frame", "card_frame.png", "660x940", "Titles/prices are drawn by the game.", img("A tall paper card: aged cream paper texture, thick black ink outline with slightly torn edges, a thin inner double border with tiny angular runes in the corners, a small six-point snowflake with an eye at the top centre, soft ink-stained shading in the corners, empty interior, portrait composition."))
add("MN-ILL-ANTE", "Card art - Aurora Bet", "card_aurora_bet.png", "1024x800", "Bet mode: bonus_bet.", img("The frost witch's little ice lantern floating over a small glowing snowflake circle drawn on the ground, violet and cyan sparkles around it, centred composition."))
add("MN-ILL-BLIZZARD", "Card art - Blizzard Rite", "card_blizzard.png", "1024x800", "Bet mode: buy_blizzard.", img("A chunky frozen spellbook standing open on a tiny ice pedestal with swirling cyan wind lines and snow around it, a flat cyan glow shape behind it, centred composition."))
add("MN-ILL-WHITEOUT", "Card art - Whiteout Rite", "card_whiteout.png", "1024x800", "Bet mode: buy_whiteout.", img("A chunky frozen spellbook standing open on a tiny ice pedestal exploding with violet-white starburst rays and ice shards, a flat violet glow shape behind it, centred composition."))
add("MN-SLIDER", "Card slider", "card_slider.png", "1120x120", "", img("A thin horizontal slider bar: a black ink track, the left half filled with frost cyan, the right half empty black, a small ice-lantern shaped knob where the two meet, very wide composition."))
add("MN-BTN", "Card button - primary", "btn_card_primary.png", "1040x180", "Label drawn by game.", img("A wide rounded rectangle button in frost cyan with a thick black ink outline and one white highlight stripe across the top, empty so a label can be added, front view."))
add("MN-BTN-OFF", "Card button - disabled", "btn_card_disabled.png", "1040x180", "", img("A wide rounded rectangle button in dark grey-blue with a thick black ink outline, empty so a label can be added, front view."))
add("MN-PLAQUE", "Bet plaque", "bet_plaque.png", "1680x520", "", img("A small rolled-paper plaque: cream paper with torn edges and a thick black ink outline, two empty round button slots on the left and right, frozen fern leaves with frost curling around the bottom corners, an empty centre left blank for text, front view, wide composition."))
add("MN-CLOSE", "Close button", "btn_close.png", "256x256", "", img("A round close button: a night-navy disc with a thick black ink outline and a pale-blue ring, a bold white X in the centre, front view, centred.", text_ok=True))

# ---------------------------------------------------------------- flow
add("FL-INTRO-CARD", "Intro card frame", "intro_card_frame.png", "1800x2000", "Three copies used; text drawn by the game.", img("A tall dark card: night-navy fill with a torn, ragged frost-cyan ink edge with a few cyan drips and frozen droplets, a thin pale-blue inner border with a small notch ornament at the top centre, completely empty interior, portrait composition."))
add("FL-LOADER", "Loading sigil", "loader_sigil.png", "512x512", "Rotates while loading.", img(SIGIL))
add("FL-TRANSITION", "Snow-wraith transition frame", "transition_full.png", "2560x1440", "Cover frame of the wipe; generate 3-4 growth stages for frames.", img("Large round swirling snow-cloud blobs with ragged edges in night-navy and pale blue, each blob containing one big glowing frost-cyan eye with a white highlight and a vertical slit pupil, the blobs completely covering the whole frame from edge to edge with the biggest eye in the centre, thick ink outline, full-frame 16 by 9 composition.", bg="Opaque full-frame image, no transparency."))

# ---------------------------------------------------------------- brand
LOGO = 'A game title logo reading "FROZEN RITE" in chunky hand-brushed lettering with sharp icicle-like drips hanging from the letters, thick black ink outline, letters filled with a frost-cyan to deep-blue flat two-tone, a white highlight stripe on each letter, "FROZEN" larger on the top line and "RITE" below it, a round six-point snowflake emblem with an almond-shaped eye sitting between the two words, a few snowflakes around it, centred.'
add("BR-LOGO", "Logo", "logo.webp", "1800x700", "Spelling check: F-R-O-Z-E-N R-I-T-E. Regenerate if letters are wrong.", img(LOGO, text_ok=True))
add("BR-LOGO-SMALL", "Logo - compact (top-left)", "logo_small.webp", "840x320", "", img('A compact game title logo reading "FROZEN RITE" on a single line in chunky hand-brushed lettering with small icicle drips, thick black ink outline, letters filled with a frost-cyan to deep-blue flat two-tone, a white highlight stripe on each letter, a small six-point snowflake with an eye between the words, wide composition.', text_ok=True))
add("BR-THUMB-SQ", "Lobby thumbnail (square)", "thumb_square.webp", "1024x1024", "Add the logo in post.", img("Key art: the frost witch centred in front of a glowing hand-drawn chalk grid and a prize wheel on a pale snowfield, small snow-spirit acolytes on both sides, ice lanterns at the corners, empty space at the top for a logo, square composition.", bg="Fully painted opaque background."))
add("BR-THUMB-WIDE", "Lobby thumbnail (wide)", "thumb_wide.webp", "1920x1080", "Add the logo in post.", img("Key art: the frost witch centred in front of a glowing hand-drawn chalk grid and a prize wheel on a pale snowfield, small snow-spirit acolytes on both sides, ice lanterns at the corners, empty space at the top-left for a logo, wide 16 by 9 composition.", bg="Fully painted opaque background."))
add("BR-FAVICON", "Favicon", "favicon.svg", "512x512", "Trace to vector afterwards.", f"A flat two-colour icon: a six-point snowflake with an almond-shaped eye in the centre in ink black on a frost-cyan #3FC8F4 round background, thick simple shapes, centred, readable at 16 pixels, no gradients. Avoid: {NEG}")

# ---------------------------------------------------------------- win
TIERS = {
    "big": ("BIG WIN", "pale paper with a frost-cyan band"),
    "mega": ("MEGA WIN", "pale paper with a deep-blue band and small ice spikes along the top"),
    "epic": ("EPIC WIN", "pale paper with an aurora-violet band, gold trim and larger ice crystals"),
    "max": ("MAX WIN", "pale paper with gold and violet trim and a crown of tall ice spikes"),
    "superwin": ("SUPER WIN", "pale paper with gold and violet trim, a crown of tall ice spikes and a starburst behind the scroll"),
}
for k, (n, d) in TIERS.items():
    add(f"WN-{k.upper()}", f"Win plate - {n.title()}", f"win_{k}.png", "2800x1000", "Number/label drawn by the game.", img(f"A wide win-banner plate in the style of a torn paper scroll with a thick black ink outline: {d}, an empty centre left blank for a number, front view, very wide composition."))
add("WN-COIN", "Ice coin", "ice_coin.png", "512x512", "", img("A round token coin made of pale-blue ice with a thick black ink outline, a gold ring around the rim, a small six-point snowflake with an eye stamped in the centre, one white highlight arc, front view, centred."))
add("WN-COIN-SHEET", "Ice coin spin sheet", "ice_coin_sheet.png", "4096x2048", "8 frames, 4 columns x 2 rows.", img("A sprite sheet of 8 frames in a grid of 4 columns by 2 rows showing a round pale-blue ice coin with a gold rim and a snowflake stamp spinning around its vertical axis: front view, then turning edge-on, then showing the back, then returning, each frame the same size, thick black ink outlines."))
add("WN-BURST", "Win meter burst sheet", "win_burst_sheet.png", "4096x3072", "12 frames, 4 columns x 3 rows.", img("A sprite sheet of 12 animation frames arranged in a grid of 4 columns by 3 rows, each frame the same size, showing a flat starburst of ink-outlined shards in frost cyan and pale frost expanding from a small flash to a big burst and fading out."))

# ---------------------------------------------------------------- audio
BRIEF = "Playful-eerie winter ritual game audio, cute-spooky not horror. Instruments: celesta, glockenspiel, toy piano, pizzicato strings, soft bass marimba, light brushed percussion, a single airy 'ooh' choir, wind and sleigh-bell textures. Key D minor / F major. No words or vocals. "
MUSIC = [
    ("bgm_main", "90 s seamless loop, 92 BPM", "Base-game theme: celesta melody over pizzicato strings and soft marimba bass, gentle wind, a quiet choir pad, calm and mysterious, loops seamlessly."),
    ("bgm_freespin", "80 s seamless loop, 112 BPM", "Blizzard-rite free-spin theme: driving brushed drums, staccato strings, howling wind texture, rising choir, urgent but fun, loops seamlessly."),
    ("bgm_freespin_whiteout", "60 s seamless loop, 128 BPM", "Whiteout-rite free-spin theme: fast glittering glockenspiel arpeggios, big choir hits, pounding low drums, bright shimmering synth, loops seamlessly."),
    ("jng_intro_fs", "5 s stinger", "Mysterious reveal stinger: harp glissando up, choir swell, big soft drum hit, shimmering tail."),
    ("bgm_winlevel_big", "12 s, no loop", "Big-win fanfare: celesta and brass sting, small rising choir, clean ending."),
    ("bgm_winlevel_mega", "14 s, no loop", "Mega-win fanfare: celesta and brass, rising choir, more layers and faster than the big-win version, clean ending."),
    ("bgm_winlevel_epic", "16 s, no loop", "Epic-win fanfare: full ensemble, strong choir, timpani rolls, building to a huge final hit, clean ending."),
    ("bgm_winlevel_max", "18 s, no loop", "Max-win fanfare: grand winter anthem with choir, brass, bells and a massive final hit with long shimmering tail."),
    ("bgm_winlevel_superwin", "20 s, no loop", "Super-win celebration: the biggest, most triumphant version of the fanfare, choir, brass, bells, cymbal swells, and a huge resolving finale."),
]
SFX = [
    ("sfx_btn_general", "0.15 s", "Soft glassy UI tick."),
    ("sfx_btn_spin", "0.4 s", "Snowy whoosh with a small chime, used when pressing the spin button."),
    ("sfx_reel_stop_1", "0.3 s", "Soft snowball thump with a tiny bell, lowest pitch."),
    ("sfx_reel_stop_2", "0.3 s", "Soft snowball thump with a tiny bell, slightly higher pitch than the previous one."),
    ("sfx_reel_stop_3", "0.3 s", "Soft snowball thump with a tiny bell, slightly higher pitch again."),
    ("sfx_reel_stop_4", "0.3 s", "Soft snowball thump with a tiny bell, higher pitch again."),
    ("sfx_reel_stop_5", "0.3 s", "Soft snowball thump with a tiny bell, highest pitch."),
    ("sfx_symbols_landing", "0.25 s", "Light snow-crunch pat with a faint chime, gentle."),
    ("sfx_royals_landing", "0.3 s", "Snow crunch plus a small marimba note, used when card-rank symbols land."),
    ("sfx_scatter_stop_1", "0.8 s", "Glassy resonant gong, single scatter landing, cold shimmer tail."),
    ("sfx_scatter_stop_2", "0.9 s", "Glassy resonant gong, second scatter, richer than the first with a higher harmonic."),
    ("sfx_scatter_stop_3", "1.0 s", "Glassy resonant gong, third scatter, fuller and brighter, magical shimmer."),
    ("sfx_scatter_stop_4", "1.1 s", "Glassy resonant gong, fourth scatter, powerful with a rising shimmer."),
    ("sfx_scatter_stop_5", "1.2 s", "Glassy resonant gong, fifth scatter, huge and triumphant with a long shimmer."),
    ("sfx_scatter_reveal", "1.0 s", "A spellbook cracking open: crisp ice crack followed by a rising magical swell."),
    ("sfx_scatter_win", "1.5 s", "Magical rising swell with sparkles, scatters celebrating."),
    ("sfx_scatter_win_v2", "1.8 s", "Bigger magical swell with choir 'ooh' and glass sparkles."),
    ("sfx_anticipation_start", "1.0 s", "Short rising shimmer that begins a tension riser."),
    ("sfx_anticipation", "3 s loop", "Loopable rising shimmering wind tension riser that holds a single note."),
    ("sfx_superfreespin", "3 s", "Huge ice-shatter impact with a choir stab and long reverb."),
    ("sfx_fs_respins", "1.2 s", "Bright bell cascade with a whoosh, extra spins awarded."),
    ("sfx_winlevel_small", "0.6 s", "Small win: two soft glass chimes."),
    ("sfx_winlevel_standard", "1.0 s", "Standard win: three rising bell chimes."),
    ("sfx_winlevel_nice", "1.5 s", "Nice win: bell arpeggio with a sparkle tail."),
    ("sfx_winlevel_substantial", "2.0 s", "Substantial win: rising celesta arpeggio with choir swell."),
    ("sfx_winlevel_end", "1.0 s", "Soft resolving chord marking the end of a win count-up."),
    ("sfx_youwon_panel", "1.5 s", "Warm shimmering chord swell as a result panel opens."),
    ("sfx_bigwin_coinloop", "3 s loop", "Loopable stream of ice tokens clinking into a bowl."),
    ("sfx_wild_explode", "1.0 s", "An aurora ribbon bursting into glass shards with a whoosh."),
    ("sfx_multiplier_landing", "0.6 s", "Magical chime for a multiplier landing."),
    ("sfx_multiplier_up", "0.8 s", "Ascending sparkle as a multiplier increases."),
    ("sfx_multiplier_reset", "0.8 s", "Descending soft tone as a multiplier resets."),
    ("sfx_multiplier_explosion", "0.9 s", "Cracking ice burst with a sparkle tail, multiplier exploding."),
    ("sfx_wheel_spin", "4.5 s", "A wheel ratcheting with clicks that slow down gradually until it stops, icy ring on each click."),
    ("sfx_wheel_land", "2.0 s", "Heavy ice-bell strike with a choir swell and a sparkle tail, wheel result landing."),
    ("sfx_rite_blizzard", "3 s", "Wind gust with a soft horn swell, blizzard rite awakening."),
    ("sfx_rite_whiteout", "3 s", "Bright violent crystal shockwave with a rising riser, whiteout rite awakening."),
    ("sfx_aurora_mult", "0.8 s", "Quick magical whoosh with a glass sparkle rising in pitch."),
    ("sfx_wraith_wipe", "1.0 s", "Airy whoosh with a low spooky 'ooh', used for the screen transition."),
]

# ---------------------------------------------------------------- compose
def block(i, name, file, size, note, prompt):
    lines = [f"[{i}] {name}", f"  FILE: {file}    SIZE: {size}"]
    if note:
        lines.append(f"  NOTE: {note}")
    lines += ["  COPY FROM HERE v", prompt, "  ^ END OF PROMPT", ""]
    return "\n".join(lines)


SEC = {
    "2. ANCHOR ASSETS (generate these first, approve, then use as references)": ["A1", "A2", "A3"],
}
groups = [
    ("2. ANCHOR ASSETS (generate first; approve before anything else)", lambda a: a[0] in ("A1", "A2", "A3")),
    ("3. SYMBOLS (high pay, card ranks, wild, scatter, shared FX)", lambda a: a[0] in SYMS or a[0] in RANKS or a[0] in ("W", "W-EXPLODED", "S") or a[0].endswith("-LAYERS") or a[0] in ("FX-CRACK", "FX-EXPLODE")),
    ("4. BACKGROUNDS & SCENE DRESSING", lambda a: a[0].startswith(("BG-", "SC-")) or a[0].startswith(("FX-SNOW", "FX-SPARK", "FX-SHARD"))),
    ("5. FROST WHEEL", lambda a: a[0].startswith("WH-")),
    ("6. FEATURE ART (rites, counter, multipliers)", lambda a: a[0].startswith("FT-")),
    ("7. CONTROL BAR, BUTTONS, ICONS", lambda a: a[0].startswith("UI-")),
    ("8. BUY MENU CARDS", lambda a: a[0].startswith("MN-")),
    ("9. INTRO, LOADING, TRANSITION", lambda a: a[0].startswith("FL-")),
    ("10. BRAND & STORE ART", lambda a: a[0].startswith("BR-")),
    ("11. WIN PRESENTATION", lambda a: a[0].startswith("WN-")),
]
used = set()
parts = []
bar = "-" * 69
for title, pred in groups:
    items = [a for a in A if pred(a) and a[0] not in used]
    used.update(a[0] for a in items)
    parts.append(f"\n{bar}\n{title}\n{bar}\n" + "\n".join(block(*a) for a in items))
leftover = [a for a in A if a[0] not in used]
if leftover:
    parts.append(f"\n{bar}\nOTHER\n{bar}\n" + "\n".join(block(*a) for a in leftover))

audio = [f"\n{bar}\n12. AUDIO (each prompt is complete; use ElevenLabs Music for music, Sound Effects for SFX)\n{bar}",
         "Settings for ALL audio: WAV 44.1 kHz, no vocals with words, music about -16 LUFS, SFX peak -3 dBFS. Keep the id as the file name.\n"]
for i, ln, p in MUSIC:
    audio.append(f"[{i}] MUSIC - {ln}\n  FILE: {i}.wav\n  COPY FROM HERE v\n{BRIEF}{p} Length: {ln}.\n  ^ END OF PROMPT\n")
for i, ln, p in SFX:
    audio.append(f"[{i}] SFX - {ln}\n  FILE: {i}.wav\n  COPY FROM HERE v\nSound effect for a cute-spooky winter slot game: {p} Duration: {ln}. No music, no voice, clean start and end.\n  ^ END OF PROMPT\n")

REVISION = """
---------------------------------------------------------------------
1b. REVISION NOTES (after the first generated batch)
---------------------------------------------------------------------
  - Gold trim on accessories (rings, rope, claws, lantern frames, hat bands) is
    accepted as part of the house style: warm gold #F2C14E, used ONLY as trim,
    never as a main fill. Keep it consistent on every remaining symbol.
  - Each high-pay character must own a DISTINCT dominant colour block (>= 30% of
    its area) so symbols stay separable at 90 px on the pale background:
      H1 Frost Witch .... sky blue (hat + cloak)           [approved]
      H2 Snow Owl ....... white + cyan eyes + violet scarf [approved]
      H3 Yeti ........... DEEP ICE BLUE fur, white beard   [approved]
      H4 Snowman ........ white body, deep-blue helmet + shield, gold trim [approved]
      H5 Fox ............ aurora-violet fur with pale tips [regenerate: v1 came back mostly white]
      S  Codex .......... cyan + gold; W Wisp .......... violet + cyan
  - Board art must be chalk lines only (no frame/posts/banners): scene dressing
    is separate art.
"""
# keep sections 0-1 and 13-16 from the existing file
i2 = old.index(f"\n{bar}\n2. ANCHOR ASSETS")
i13 = old.index(f"\n{bar}\n13. FILE MAP")
head = old[:i2]
tail = old[i13:]
if REVISION.strip() not in head:
    head = head.rstrip("\n") + "\n" + REVISION
if "v3: every prompt" not in head:
    head = head.replace("Supersedes docs/asset-prompts.md", "(v3: every prompt in sections 2-12 is COMPLETE and self-contained - copy only the text between 'COPY FROM HERE' and 'END OF PROMPT'.)\nSupersedes docs/asset-prompts.md", 1)
head = head.replace("[STYLE PREFIX]  (paste at the start of EVERY image prompt)", "STYLE PREFIX  (for reference only - already included inside every prompt below)")
head = head.replace("[GLOBAL NEGATIVE]  (paste at the end of EVERY image prompt)", "GLOBAL NEGATIVE  (for reference only - already included inside every prompt below)")
open(OUT, "w").write(head + "".join(parts) + "".join(audio) + tail)
print("prompts:", len(A), "music:", len(MUSIC), "sfx:", len(SFX), "->", OUT)
