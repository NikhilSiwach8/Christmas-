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
