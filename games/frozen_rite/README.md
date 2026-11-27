# Frozen Rite (ice-themed 5x4 ways slot) - Stake Math SDK game

Status: first working draft, copied from the SDK's `0_0_ways` sample (5 reels x 4 rows, 1024 ways).

Run it:
    git clone --depth 1 https://github.com/StakeEngine/math-sdk.git math-sdk
    cp -r games/frozen_rite math-sdk/games/
    cd math-sdk && make run GAME=frozen_rite     # run from the SDK root, not the game folder

TODO (from docs/frost-ritual-reskin-plan.md): own paytable and reel strips, free-spin mode choice,
Frost Wheel, random multipliers, bonus-bet mode, 100k+ sims per mode, then optimizer sign-off.
Current numbers come from only 2,000 sims per mode and sample reels - not submission quality.

## Status update: math model complete (100k sims/mode)
Modes: `base` (1x), `bonus_bet` (1.25x, more frequent triggers), `buy_blizzard` (100x), `buy_whiteout` (150x).
Features: Aurora random multiplier (base), two free-spin rites with progressive multipliers, Frost Wheel at feature end,
10,000x cap. Verified from the published lookup tables: RTP 96.70% in all four modes, SDK format checks + risk checks pass.
Custom book events: `riteAwaken`, `auroraMult`, `frostWheel` (plus SDK standard events and `updateGlobalMult`).
Reproduce: `FR_SIMS=100000 tools/dev_run.sh <math-sdk dir>` (needs a math-sdk clone with its venv). Reports in `reports/`.
Note: natural free-spin triggers pick a random rite; players choose a rite only via the buy modes (RGS books are pre-drawn).

## Mechanics v2 (reference-style structure) - 100k sims/mode
Coloured scatters (red/blue/purple), Symbol Removal (scatter pair converts one symbol into another; base = one spin, bonus = persistent, +2 spins),
four rites (Blizzard x2/LV1, Whiteout x5/LV2, Glacier x10/LV3 higher-wins, Absolute Zero x20/LV3 lows converted), in-bonus wheel (multipliers, extra sacrifice,
Chosen Offering = random wheel upgrade or symbol promotion, Aurora Surge, Frost Moon, Frost Frenzy), no wilds, 40,000x cap.
Modes: base, bonus_bet (3x), buy_blizzard (100x), buy_whiteout (300x), buy_mystery (500x), buy_glacier (1500x).
Verified from lookup tables: RTP 96.70% in all six modes. SDK risk checks: 6 of 6 pass after retuning buy_mystery (P(>=10,000x) 1.38% -> 0.24%). buy_glacier sits close to the limit at 0.98% (limit 1%).
Numbers not in public sources (wheel odds, reel frequencies) are our own tuning.
