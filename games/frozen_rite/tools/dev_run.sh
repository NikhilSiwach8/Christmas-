#!/usr/bin/env bash
# Sync this game into a math-sdk clone and run it.  Usage: tools/dev_run.sh [SDK_DIR]
# Env: FR_SIMS (sims per mode, default 100000), FR_OPT=0 to skip optimizer/analysis, FR_COMPRESS=0 for plain books.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SDK="${1:-$HERE/../../math-sdk}"
rm -rf "$SDK/games/frozen_rite/"*.py "$SDK/games/frozen_rite/reels"
mkdir -p "$SDK/games/frozen_rite"
cp -r "$HERE"/*.py "$HERE/reels" "$SDK/games/frozen_rite/"
cd "$SDK" && source env/bin/activate && make run GAME=frozen_rite
