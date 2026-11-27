#!/usr/bin/env python3
"""Builds docs/frozen-rite-new-art-prompts.txt: fully self-contained prompts for (A) art needed by the new mechanics and
(B) art still missing from the original plan. Style prefix + negatives are read from frozen-rite-asset-prompts.txt."""
import os, re
HERE = os.path.dirname(os.path.abspath(__file__))
old = open(os.path.join(HERE, "frozen-rite-asset-prompts.txt")).read()
PREFIX = re.search(r'STYLE PREFIX\]?  \((?:paste|for reference)[^)]*\)\n"""\n(.*?)\n"""', old, re.S).group(1).replace("\n", " ")
NEG = re.search(r'GLOBAL NEGATIVE\]?  \((?:paste|for reference)[^)]*\)\n"""\n(.*?)\n"""', old, re.S).group(1).replace("\n", " ")
NEG_T = NEG.replace("text, letters, ", "")
T = "Transparent background."

def img(body, text_ok=False, bg=T):
    return f"{PREFIX} {body} {bg} Avoid: {NEG_T if text_ok else NEG}"

P = []  # (section, id, name, file, size, note, prompt)
def add(sec, i, name, f, size, note, prompt): P.append((sec, i, name, f, size, note, prompt))

BOOK = "A chunky ancient spellbook bound in frozen leather with carved ice-plate corners, the cover showing a large six-point snowflake with an almond-shaped eye in the centre, the book partially open with light and snowflakes escaping from the pages, a leather strap with an ice buckle, three-quarter view, small flat oval ground shadow, square composition, slightly oversized and heroic."
A = "A. NEW ART FOR THE NEW MECHANICS"
add(A,"N1","Blue scatter (SB) - Frozen Codex, sapphire","s_blue.webp","1024x1024 (export 512)","Pairs with the existing cyan Codex; attach it as the style/shape reference. Must read as a DIFFERENT scatter at 90 px.",
    img(BOOK.replace("frozen leather","deep sapphire-blue frozen leather").replace("light and snowflakes","sapphire-blue light and snowflakes")+" The whole book is dominated by deep sapphire blue #1F5FA8 with silver-white trim, clearly darker and bluer than a cyan book."))
add(A,"N2","Purple scatter (SP) - Frozen Codex, aurora violet","s_purple.webp","1024x1024 (export 512)","Attach the existing cyan Codex as the shape reference.",
    img(BOOK.replace("frozen leather","aurora-violet frozen leather").replace("light and snowflakes","violet light and snowflakes")+" The whole book is dominated by aurora violet #8F6BFF with gold trim on the corners and buckle, clearly purple and not blue."))
RISE = {"glacier":"a tall jagged glacier wall rising behind a six-point snowflake with an almond-shaped eye in the centre, deep ice-blue and pale-frost palette, thick ink outline, icy crystal spikes along the bottom",
        "absolute_zero":"a six-point snowflake with an almond-shaped eye in the centre frozen solid inside a perfect sphere of white-blue ice with hairline cracks radiating outward and a ring of tiny frozen snowflakes orbiting it, aurora-violet and pale-frost palette, thick ink outline"}
for k,(n,f) in {"glacier":("Glacier Rite emblem","emblem_glacier.webp"),"absolute_zero":("Absolute Zero emblem","emblem_absolute_zero.webp")}.items():
    add(A,"N3" if k=="glacier" else "N4",n,f,"1024x1024","Same family as the Blizzard (wind spiral) and Whiteout (starburst) emblems.",
        img(f"A round emblem: {RISE[k]}, centred, symmetrical."))
ICONS = {
 "extra_sacrifice":("Wheel result icon - Extra Sacrifice","two small icy figurines side by side on a stone altar, one cracking and turning into the other with a burst of frost shards between them, frost-cyan and pale-frost palette"),
 "chosen_offering":("Wheel result icon - Chosen Offering","a gold-rimmed ice chalice floating above a glowing snowflake circle with a bright star above it and small sparks rising, frost-cyan, pale-frost and gold trim palette"),
 "aurora_surge":("Wheel result icon - Aurora Surge","a swirling ribbon of aurora light in aurora-violet and frost-cyan rising from a small frozen book, sparkle stars around it"),
 "frost_moon":("Wheel result icon - Frost Moon","a full pale moon wrapped in a ring of ice crystals with a small upward arrow made of frost on its face, frost-cyan and pale-frost palette"),
 "frost_frenzy":("Wheel result icon - Frost Frenzy","a furious starburst of jagged ice shards exploding outward from a glowing frost-cyan core, aurora-violet shards among them, dynamic and energetic"),
 "upgraded_wheel":("Wheel result icon - Upgraded Wheel","a small prize wheel with gold-tipped ice spikes and a big plus sign above it, sparkle stars around, frost-cyan, deep-blue and gold palette"),
}
for i,(k,(n,d)) in enumerate(ICONS.items()):
    add(A,f"N{5+i}",n,f"wheel_icon_{k}.webp","512x512","Shown on the result tag after a wheel spin; must read at 60 px.",
        img(f"A single round game icon: {d}, thick black ink outline, one white highlight, centred."))
LV = {1:"a single small frost-cyan crystal",2:"two frost-cyan crystals",3:"three crystals, the middle one larger and aurora-violet",4:"four crystals in an arc, two of them aurora-violet",5:"five crystals in a crown shape, the centre one large and gold-rimmed"}
for lv,d in LV.items():
    add(A,f"N{10+lv}",f"Wheel level badge {lv}",f"wheel_level_{lv}.webp","384x384","Shown next to the wheel hub; the five badges must be one escalating family.",
        img(f"A small round medal badge for wheel level {lv}: a dark navy disc with a thick ink-outlined silver-blue ring, {d} set in the middle, ice spikes on the ring growing taller with the level, front view, centred."))
add(A,"N16","Symbol Removal - sacrifice circle (sheet)","fx_sacrifice_sheet.png","4096x3072 (4x3 grid of 1024)","12 frames, ground-level ritual effect under the converted symbols.",
    img("A sprite sheet of 12 animation frames in a grid of 4 columns by 3 rows, each frame the same size, showing a glowing frost-cyan ritual circle drawn on the ground that grows from a tiny point into a full snowflake-and-rune circle, spins, pulses once, then collapses inward into a bright spark by the last frame, flat ink-outlined shapes, seen from above, transparent between frames."))
add(A,"N17","Symbol Removal - conversion swirl (sheet)","fx_convert_sheet.png","4096x3072 (4x3 grid of 1024)","12 frames, plays over a symbol while it becomes another.",
    img("A sprite sheet of 12 animation frames in a grid of 4 columns by 3 rows, each frame the same size, showing a swirl of frost-cyan and aurora-violet snow twisting upward around an empty centre, tightening into a bright flash at frame 7, then bursting outward into drifting snowflakes and sparkles by frame 12, flat ink-outlined shapes."))
add(A,"N18","Marked symbol glow (sacrifice target)","fx_marked_ring.webp","512x512","Ring shown on every symbol that is about to be sacrificed.",
    img("A single round marking ring for a game symbol: a glowing frost-cyan double ring with small angular runes between the two rings and four small ice spikes at north, south, east and west, thick black ink outline, completely empty centre, centred."))
add(A,"N19","Scatter pair aura","fx_scatter_aura.webp","512x512","Pulsing halo behind two matching scatters when a pair forms.",
    img("A soft round halo: a flat ring of pale-frost and frost-cyan star points radiating outward in a circle with small snowflakes between the points, empty centre, thin black ink outline on each point, centred."))
add(A,"N20","Aurora Surge overlay","fx_aurora_surge.webp","2039x1000","Full-screen overlay while Aurora Surge is active (more scatters).",
    img("A wide overlay of flowing aurora ribbons in aurora-violet and frost-cyan flat colour shapes sweeping across the top two thirds of the frame with a few sparkle stars, completely transparent in the lower third and in the centre so a game board stays visible, wide landscape composition."))
add(A,"N21","Frost Moon wheel-up effect","fx_frost_moon.webp","1024x1024","Plays behind the wheel when it levels up.",
    img("A big pale full moon with a few flat crater shapes, wrapped in a ring of tall ice crystals and a thin frost-cyan halo, tiny snowflakes around it, thick black ink outline, centred."))
add(A,"N22","Multiplier badge - maximum (gold)","ft_badge_max.webp","1024x1024","The gold version for very high global multipliers (x50 and above).",
    img("A round medallion: a thick ink-outlined iron ring with small ice spikes, a warm gold flat-colour rim band with angular runes, a pale-paper centre left empty for a number, one white highlight arc, small snowflake sparkles around it, front view, centred."))
add(A,"N23","Buy card art - Mystery Rite","card_mystery.webp","1024x800","Bet mode: buy_mystery (500x). A hidden outcome.",
    img("A closed frozen spellbook wrapped in chains of ice and tied with a violet ribbon, a large glowing question mark made of frost-cyan light floating above it, swirling aurora ribbons and sparkles around it, small flat oval ground shadow, centred composition."))
add(A,"N24","Buy card art - Glacier Rite","card_glacier.webp","1024x800","Bet mode: buy_glacier (1500x).",
    img("A frozen spellbook with a purple scatter-gem on its cover standing open on an ice pedestal in front of a towering glacier wall, golden cracks of light running through the glacier, small flat oval ground shadow, centred composition."))
for k,(w,n) in {"glacier":("glacier","Glacier Rite"),"absolute_zero":("absolute_zero","Absolute Zero")}.items():
    pass
BG = {"glacier":"The same pale snowfield, but under a towering wall of deep-blue glacier ice that fills the sky behind the hills, ice cliffs with golden light cracks, calm snow falling, thick iron-grey chains hanging at the top corners",
      "absolute_zero":"The same pale snowfield frozen solid: everything coated in thick white frost, a huge cracked-ice moon overhead, aurora-violet light, floating ice shards and frozen snowflakes hanging motionless in the air, thick iron-grey chains hanging at the top corners"}
for k,b in BG.items():
    add("A. NEW ART FOR THE NEW MECHANICS" ,"N25" if k=="glacier" else "N26",f"Background - {k} (desktop)",f"bg_{k}_desktop.webp","2039x1000","Optional: the game reuses the blizzard/whiteout paintings for these rites until this exists.",
        img(b+", a calm empty centre for the game board, low contrast so game symbols stay readable, no characters, wide landscape composition, aspect ratio 2039 by 1000.",bg="Fully painted opaque background, no transparency."))
    add("A. NEW ART FOR THE NEW MECHANICS" ,"N27" if k=="glacier" else "N28",f"Background - {k} (portrait)",f"bg_{k}_portrait.webp","1242x2208","Optional, as above.",
        img(b+", a calm empty area in the lower centre for the game board, low contrast so game symbols stay readable, no characters, tall portrait composition, aspect ratio 1242 by 2208.",bg="Fully painted opaque background, no transparency."))

OPT = "A2. OPTIONAL: SYMBOLS THE REFERENCE GAME HAS THAT WE DO NOT (needs a math change: 5 low + 6 high symbols)"
add(OPT,"O1","Fifth low symbol - card rank '10'","l5_rank_10.webp","1024x1024 (export 512)","Generate together with A K Q J reference. Only if you want the symbol count to match the reference.",
    img('A single hand-lettered playing-card rank glyph, the number "10" in chunky ink-outlined lettering filled with pale frost white mixed with soft gold, wearing a small crown of ice spikes on top, a tiny six-point snowflake carved into the zero, thick black outline, one white highlight stripe, centred, square composition, the glyph fills about 75 percent of the frame.',text_ok=True))
add(OPT,"O2","Sixth high symbol - Ice Dragon Whelp","h6_ice_dragon.webp","1024x1024 (export 512)","Must own a distinct dominant colour: use teal-green so it is separable from the other five heroes.",
    img("A cute-but-eerie baby ice dragon whelp sitting up, very large round head with two small crystal horns, huge glowing cyan eyes, teal-green #2FB7A4 scales with pale-frost belly and wing membranes, a small snow-covered tail curled around its feet, a tiny frost breath cloud, three-quarter view, small flat oval ground shadow, square composition."))

B = "B. STILL MISSING FROM THE ORIGINAL PLAN"
LOGO = 'A game title logo reading "FROZEN RITE" in chunky hand-brushed lettering with sharp icicle-like drips hanging from the letters, thick black ink outline, letters filled with a frost-cyan to deep-blue flat two-tone, a white highlight stripe on each letter, "FROZEN" larger on the top line and "RITE" below it, a round six-point snowflake emblem with an almond-shaped eye sitting between the two words, a few snowflakes around it, centred.'
add(B,"M1","Logo","logo.webp","1800x700","Check the spelling F-R-O-Z-E-N R-I-T-E; regenerate if any letter is wrong.",img(LOGO,text_ok=True))
add(B,"M2","Logo - compact (top-left of the game)","logo_small.webp","840x320","Single line version, readable at 330 px wide.",
    img('A compact game title logo reading "FROZEN RITE" on a single line in chunky hand-brushed lettering with small icicle drips, thick black ink outline, letters filled with a frost-cyan to deep-blue flat two-tone, a white highlight stripe on each letter, a small six-point snowflake with an eye between the two words, wide composition.',text_ok=True))
for k,(sz,ar,corner) in {"square":("1024x1024","square","at the top"),"wide":("1920x1080","wide 16 by 9","at the top-left")}.items():
    add(B,"M3" if k=="square" else "M4",f"Lobby thumbnail ({k})",f"thumb_{k}.webp",sz,"Add the logo afterwards.",
        img(f"Key art: the frost witch centred in front of a glowing hand-drawn chalk grid and a prize wheel on a pale snowfield, small snow-spirit acolytes on both sides, ice lanterns at the corners, aurora sky, empty space {corner} for a logo, {ar} composition.",bg="Fully painted opaque background."))
add(B,"M5","Favicon","favicon.svg","512x512","Trace to vector afterwards.",
    f"A flat two-colour icon: a six-point snowflake with an almond-shaped eye in the centre in ink black on a frost-cyan #3FC8F4 round background, thick simple shapes, centred, readable at 16 pixels, no gradients. Avoid: {NEG}")
add(B,"M6","Loading sigil","loader_sigil.webp","512x512","Rotates on the loading screen.",
    img("A single emblem: a six-point snowflake drawn in thick black ink with pale-frost fill and pale-blue inner shading, a vertical almond-shaped eye in the exact centre with a frost-cyan iris, black slit pupil and a white highlight dot, tiny angular runes along each arm, perfectly symmetrical, front view, centred."))
add(B,"M7","Intro card frame (x3 copies)","intro_card_frame.webp","1800x2000","Title and body text are drawn by the game.",
    img("A tall dark card: night-navy fill with a torn, ragged frost-cyan ink edge with a few cyan drips and frozen droplets, a thin pale-blue inner border with a small notch ornament at the top centre, completely empty interior, portrait composition."))
INTRO = {"1":("Intro card art - scatters and rites","three frozen spellbooks side by side, one cyan, one sapphire blue and one violet, each glowing, small flat oval ground shadows"),
         "2":("Intro card art - Symbol Removal","two small ice figurines on a stone altar, one cracking into frost shards that swirl into the other, a glowing snowflake circle underneath"),
         "3":("Intro card art - the wheel and the multiplier","a prize wheel with ice spikes and a big glowing 'x' multiplier medallion floating above it, sparkle stars around")}
for i,(n,d) in INTRO.items():
    add(B,f"M{7+int(i)}",n,f"intro_art_{i}.webp","1024x800","Sits at the top of intro card "+i+".",img(f"{d}, centred composition."))
add(B,"M11","Snow-wraith transition (full cover frame)","transition_full.webp","2560x1440","Cover frame of the wipe; generate 3 growth stages by asking for 'smaller blobs near the edges only' / 'blobs covering half the frame' / this full version.",
    img("Large round swirling snow-cloud blobs with ragged edges in night-navy and pale blue, each blob containing one big glowing frost-cyan eye with a white highlight and a vertical slit pupil, the blobs completely covering the whole frame from edge to edge with the biggest eye in the centre, thick ink outline, full-frame 16 by 9 composition.",bg="Opaque full-frame image, no transparency."))
TIERS = {"big":("BIG WIN","pale paper with a frost-cyan band"),"mega":("MEGA WIN","pale paper with a deep-blue band and small ice spikes along the top"),
         "epic":("EPIC WIN","pale paper with an aurora-violet band, gold trim and larger ice crystals"),"max":("MAX WIN","pale paper with gold and violet trim and a crown of tall ice spikes"),
         "superwin":("SUPER WIN","pale paper with gold and violet trim, a crown of tall ice spikes and a starburst behind the scroll")}
for j,(k,(n,d)) in enumerate(TIERS.items()):
    add(B,f"M{12+j}",f"Win plate - {n.title()}",f"win_{k}.webp","2800x1000","The amount/label is drawn by the game.",
        img(f"A wide win-banner plate in the style of a torn paper scroll with a thick black ink outline: {d}, an empty centre left blank for a number, front view, very wide composition."))
add(B,"M17","Ice coin","ice_coin.webp","512x512","",img("A round token coin made of pale-blue ice with a thick black ink outline, a gold ring around the rim, a small six-point snowflake with an eye stamped in the centre, one white highlight arc, front view, centred."))
add(B,"M18","Ice coin - spin sheet","ice_coin_sheet.webp","4096x2048","8 frames, 4 columns x 2 rows.",
    img("A sprite sheet of 8 frames in a grid of 4 columns by 2 rows showing a round pale-blue ice coin with a gold rim and a snowflake stamp spinning around its vertical axis: front view, then turning edge-on, then showing the back, then returning, each frame the same size, thick black ink outlines."))
add(B,"M19","Win burst sheet","win_burst_sheet.webp","4096x3072","12 frames, 4 columns x 3 rows.",
    img("A sprite sheet of 12 animation frames arranged in a grid of 4 columns by 3 rows, each frame the same size, showing a flat starburst of ink-outlined shards in frost cyan and pale frost expanding from a small flash to a big burst and fading out."))
add(B,"M20","Control bar plate - slim version","ui_bar_slim.webp","3040x314","The first plate was 3:1 and could not be used; this one must be very wide and thin (ratio about 9.7:1). Interior empty.",
    img("A very wide, thin, fully rounded game control bar in dark night-navy #0E1B2E with a thick black ink outline and a thin pale-blue inner line, tiny frost-crack lines in the corners, small snow caps on the top edge, tiny rivets, completely empty interior, front view, extremely wide and thin composition with a height of only one tenth of its width."))
add(B,"M21","Buy Bonus label icon (optional upgrade)","icon_buy_bonus_ornate.webp","512x512","Only if you want something richer than the key icon.",
    img("A single flat game icon of a gold-rimmed ice treasure chest with a snowflake lock, thick black ink outline, one white highlight, centred."))

# audio
SFX = [("sfx_sacrifice","1.6 s","A cold ritual sting: a low choir 'ooh' swell, a glass crack, and a short magical whoosh as one symbol transforms into another."),
       ("sfx_symbol_convert","0.9 s","A bright shimmering swirl that tightens and pops, like snowflakes spiralling into a single point and bursting open."),
       ("sfx_scatter_pair","1.0 s","A soft rising two-note chime and a faint wind swell, announcing that two scatters have paired up."),
       ("sfx_wheel_upgrade","1.8 s","A heavy ice-bell strike followed by a rising sparkle arpeggio and a choir lift, the wheel being upgraded."),
       ("sfx_aurora_surge","2.0 s","A shimmering rising aurora wash with glassy sparkles and distant wind, scatters becoming more likely."),
       ("sfx_frost_moon","1.5 s","A deep resonant gong with a bright rising shimmer, the wheel levelling up."),
       ("sfx_rite_glacier","3.0 s","A low ice-cracking boom with a deep horn swell and shimmering high bells, the Glacier Rite awakening."),
       ("sfx_rite_absolute_zero","3.5 s","A total silence for a split second, then a huge crystalline shockwave with a heavenly choir swell and a long frozen reverb tail, Absolute Zero awakening.")]
BRIEF = "Sound effect for a cute-spooky winter slot game: "
AU = "C. NEW SOUND EFFECTS (the older audio prompts are in docs/frozen-rite-asset-prompts.txt)"

bar = "-" * 69
out = ["FROZEN RITE - NEW AND MISSING ART PROMPTS", "="*69,
 "Every prompt below is COMPLETE and self-contained (style, subject, background and negatives are all inside it).",
 "Copy only the text between 'COPY FROM HERE' and 'END OF PROMPT'. Use the same generator and settings as the approved art so the set stays consistent.",
 "Approved reference images to attach when a note says so: art/generated/ (h1 witch, s_frozen_codex, sigil, emblems, etc.).",
 "Transparent-background prompts: if your tool bakes in a white/checkerboard background, tell me and I cut it out along the outline (done for several assets already).",
 "", "A. = needed by the new mechanics (coloured scatters, Symbol Removal, wheel results/levels, new rites, new buy cards)",
 "A2. = optional symbols to match the reference game's symbol count (requires a math change)",
 "B. = items from the original plan that were never generated (logo, thumbnails, intro, transition, win plates, coins, slim bar)",
 "C. = new sound effects", "",
 "PRIORITY ORDER: N1,N2 (scatters) > N3,N4 (emblems) > N5-N10 (wheel icons) > N11-N15 (level badges) > N16-N19 (conversion FX) > M1,M2 (logo) > M7-M11 (intro/transition) > M12-M19 (win) > the rest.", ""]
cur=None
for sec,i,name,f,size,note,p in P:
    if sec!=cur:
        out += [bar, sec, bar]; cur=sec
    out += [f"[{i}] {name}", f"  FILE: {f}    SIZE: {size}"] + ([f"  NOTE: {note}"] if note else []) + ["  COPY FROM HERE v", p, "  ^ END OF PROMPT", ""]
out += [bar, AU, bar, "Settings: WAV 44.1 kHz, no words, peak -3 dBFS. Keep the id as the file name.", ""]
for i,ln,p in SFX:
    out += [f"[{i}] SFX - {ln}", f"  FILE: {i}.wav", "  COPY FROM HERE v", f"{BRIEF}{p} Duration: {ln}. No music, no voice, clean start and end.", "  ^ END OF PROMPT", ""]
open(os.path.join(HERE,"frozen-rite-new-art-prompts.txt"),"w").write("\n".join(out))
print(len(P),"image prompts,",len(SFX),"sfx")
