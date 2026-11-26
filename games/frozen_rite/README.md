# Frozen Rite (ice-themed 5x4 ways slot) - Stake Math SDK game

Status: first working draft, copied from the SDK's `0_0_ways` sample (5 reels x 4 rows, 1024 ways).

Run it:
    git clone --depth 1 https://github.com/StakeEngine/math-sdk.git math-sdk
    cp -r games/frozen_rite math-sdk/games/
    cd math-sdk && make run GAME=frozen_rite     # run from the SDK root, not the game folder

TODO (from docs/frost-ritual-reskin-plan.md): own paytable and reel strips, free-spin mode choice,
Frost Wheel, random multipliers, bonus-bet mode, 100k+ sims per mode, then optimizer sign-off.
Current numbers come from only 2,000 sims per mode and sample reels - not submission quality.
