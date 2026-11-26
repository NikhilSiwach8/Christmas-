#!/usr/bin/env bash
# Build the Frozen Rite frontend inside a StakeEngine/web-sdk clone.
# Usage: frontend/setup.sh [WEB_SDK_DIR]   (default ../web-sdk; cloned if missing)
# Needs Node 22.x and pnpm 10.x. Placeholder art (static/assets, ~54MB) is copied from the SDK's `ways` sample.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SDK="${1:-$HERE/../web-sdk}"
[ -d "$SDK/apps" ] || git clone --depth 1 https://github.com/StakeEngine/web-sdk.git "$SDK"
rm -rf "$SDK/apps/frozen_rite"
mkdir -p "$SDK/apps/frozen_rite"
cp -r "$HERE/frozen_rite/." "$SDK/apps/frozen_rite/"
cp -r "$SDK/apps/ways/static/assets" "$SDK/apps/frozen_rite/static/assets"
cd "$SDK"
# Themeable shared UI (fonts/colours for the control bar). Idempotent.
if [ ! -f packages/components-ui-pixi/src/theme.svelte.ts ]; then patch -p1 < "$HERE/ui-theme.patch"; fi
pnpm install --no-frozen-lockfile
pnpm exec turbo run build --filter=frozen_rite
echo "Built: $SDK/apps/frozen_rite/build   |   Dev: pnpm run dev --filter=frozen_rite   |   Stories: pnpm run storybook --filter=frozen_rite"
