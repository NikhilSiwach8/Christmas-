# Reskin plan: "The Hollow Ritual" → ice theme ("Frozen Rite" working title)

## 0. Status and caveats
- **Demo not played.** Gamdom.com is unreachable from the Claude cloud container (network policy), and slotcatalog/other pages list the demo as unavailable. Everything below is based on public specs, not hands-on play. Play the demo yourself and note: cascade vs. static, how the wheel triggers, free-spin mode choices, and win-animation timing — then adjust Section 3.
- **Source game (public specs):** Bad Decision Gaming, 5×4 grid, 96.7% RTP, 40,000× max win, bets 0.1–100. Features: scatter-triggered Free Spins, free-spin mode choosing, additional free spins, free-spin multiplier, random multiplier, Multiplier Wheel, Buy Feature, Bonus Bet. Theme: horror / dark magic / candles / books / blood-red.
- **Legal/IP guardrail:** a reskin of a third-party commercial game must not reuse its name, art, audio, symbol designs, or exact math tables. Treat this as an *original ice-themed game inspired by the same feature set*. Generic mechanics (scatter free spins, multiplier wheel, buy feature) are not protectable, but the specific combination/tuning and all assets are. If you need an actual licensed reskin of their game, that needs a deal with Bad Decision Gaming. Also confirm Stake Engine's own rules for derivative games.

## 1. Concept
Dark-magic ritual → **glacial rite**: an ancient ice shrine where frost-priests wake a sleeping glacier spirit. Palette shifts from black/blood-red/candle-amber to deep navy, glacier cyan, white, and a single aurora-violet accent for specials.

| Original element | Ice replacement |
|---|---|
| Candles | Ice lanterns / frozen flames (blue-white flame) |
| Ritual book (scatter) | Frozen codex / rune-etched ice tablet |
| Blood / red glow | Aurora cyan-violet glow |
| Black backdrop | Night-sky glacier cavern, snowfall particles |
| Multiplier Wheel | Rotating ice-rune ring / frost compass |

## 2. Symbol set (all original art)
- **High:** Frost Priestess, Ice Wolf, Glacier Golem, Frozen Crown
- **Low:** rune-carved gems (A, K, Q, J, 10 style or 5 distinct crystal shapes)
- **Scatter:** Frozen Codex (3+ triggers free spins)
- **Special/multiplier symbol:** Aurora Shard (carries 2×–100× value, feeds the wheel)
- Match the original grid/pay structure only to the extent chosen in Section 3; re-derive paytable from your own math.

## 3. Mechanics to build (feature parity, original tuning)
1. 5×4 grid, win model TBD after demo play (lines vs. ways vs. scatter-pays).
2. Free Spins: 3+ scatters; **mode choice** (e.g. "Blizzard" = more spins/low multiplier, "Whiteout" = fewer spins/high multiplier); retrigger adds spins.
3. Free-spin multiplier that persists/grows during the feature.
4. Random multiplier on base-game spins.
5. Multiplier Wheel ("Frost Wheel") with weighted segments.
6. Buy Feature (e.g. 100× bet) and Bonus Bet (raise stake for higher trigger odds) — regional availability varies; some jurisdictions ban buys.
7. Max win cap (suggest 10,000×–40,000×; match your Stake approval target).

## 4. Math workstream (Stake Engine)
- Use `stake-math-sdk` skill: new game folder, bet modes (base, bonus buy, bonus bet), reel strips, paytable, distributions.
- Target RTP 96.0–96.7% with ≤0.5% spread between modes (Stake approval rule), documented max-win hit frequency.
- Simulate ≥ 1M–10M rounds per mode; generate books + lookup tables; run optimizer to hit RTP.
- Use `rtp-optimizer`, `senior-game-math-engineer`, `slot-qa-engineer` skills for sign-off evidence.
- Do **not** copy the source game's tables; derive your own.

## 5. Frontend workstream (Stake web-sdk)
- Use `stake-web-sdk` skill (Svelte + PixiJS) and `pixi-svelte-integrator`.
- New book events: spin, win, scatter trigger, mode select, multiplier award, wheel spin, feature end.
- VFX (`slot-vfx-artist`, `css-motion-designer`): snowfall particles, frost-crack on wins, ice-shatter symbol removal, aurora ribbon on big wins.
- Audio (`slot-audio-engineer`): wind/ambient drone, glass chimes for wins, deep ice-crack for scatters, choir swell for the wheel. Source from licensed/own assets only.
- Required UX: spacebar = spin, sound mute, autoplay confirmation, turbo spin, game-info panel (`game-info-author`).

## 6. Asset production checklist
- [ ] Logo + title screen
- [ ] 10–12 symbol sprites + win animations
- [ ] Background layers (cavern, parallax)
- [ ] Wheel + feature intro/outro screens
- [ ] Big-win tiers (Big/Mega/Epic) banners
- [ ] SFX + music loops (seamless)
- [ ] Mobile + desktop layouts, high-DPI

## 7. Phases
1. **Week 1:** play the original demo, lock mechanics spec, name/IP clearance.
2. **Weeks 2–3:** math model + simulation, RTP tuning.
3. **Weeks 3–5:** art/audio production, web-sdk integration, book event playback.
4. **Week 6:** QA (math, UI, compliance, social-language rules), approval submission.

## 8. Open questions for you
- Is this a licensed reskin of Bad Decision Gaming's game, or an original game inspired by it?
- Target platform: Stake Engine only, or other operators too?
- Buy Feature / Bonus Bet in scope given market restrictions?
