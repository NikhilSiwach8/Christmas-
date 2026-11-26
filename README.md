# Frozen Rite - ice-themed slot for Stake Engine

An original 5x4 (1,024 ways) ice-themed slot inspired by the feature set of a dark-ritual slot, built on Stake's Math SDK and Web SDK.
**Not affiliated with any third-party game; no third-party art, audio or math tables are used.**

| Part | Where | Status |
|---|---|---|
| Plan | `docs/frost-ritual-reskin-plan.md` | done |
| Math model (Python, Stake Math SDK) | `games/frozen_rite/` | complete: RTP 96.70% in all 4 modes at 100k sims/mode, SDK format + risk checks pass |
| Frontend (Svelte + PixiJS, Stake Web SDK) | `frontend/frozen_rite/` | working: new events render in Storybook; **art/audio are the SDK sample's placeholders (ice colour-graded)** |

## Game
- Base game: 5 reels x 4 rows, ways pays, wild (W), scatter (S, Frozen Codex), **Aurora random multiplier** (x2-x25) on winning spins.
- 3+ scatters awaken a **free-spin rite**: **Blizzard** (10/13/16 spins, multiplier +1 per winning spin, max x20) or **Whiteout** (6/8/10 spins, starts x2, +2 per winning spin, max x30). Retriggers add spins.
- **Frost Wheel** spins at the end of the feature and multiplies the whole feature win (x1 ... x100).
- Bet modes: `base` (1x), `bonus_bet` "Aurora Bet" (1.25x, features trigger more often), `buy_blizzard` (100x), `buy_whiteout` (150x). Max win 10,000x.
- Natural triggers pick a random rite (books are pre-drawn by the RGS); players choose a rite only via the buy modes.

## Build
Math: see `games/frozen_rite/README.md`. Frontend: `frontend/setup.sh` (clones web-sdk, copies the app, installs, builds).

## Before submission (not done)
Final art/audio, independent QA of the math (distributions, per-mode RTP with 1M+ sims), Stake math/frontend approval checklist, legal review.
