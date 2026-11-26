<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Container, Graphics, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { SYMBOL_SIZE, BOARD_DIMENSIONS } from '../game/constants';

	const context = getContext();
	let glow = $state(false);

	context.eventEmitter.subscribeOnMount({
		boardFrameGlowShow: () => (glow = true),
		boardFrameGlowHide: () => (glow = false),
	});

	const layout = $derived(context.stateGameDerived.boardLayout());
	const x0 = $derived(layout.x - layout.width / 2);
	const y0 = $derived(layout.y - layout.height / 2);

	// Generated chalk-grid art: 5x4 equal cells of 260 px with a 70 px margin -> scale to the 90 px board cell.
	const ART_CELL = 260;
	const ART_MARGIN = 70;
	const artScale = SYMBOL_SIZE / ART_CELL;
	const artW = (BOARD_DIMENSIONS.x * ART_CELL + 2 * ART_MARGIN) * artScale;
	const artH = (BOARD_DIMENSIONS.y * ART_CELL + 2 * ART_MARGIN) * artScale;

	/** Pale backing + free-spin glow under the chalk art. */
	const drawBacking = (g: import('pixi.js').Graphics) => {
		g.roundRect(x0 - 8, y0 - 8, layout.width + 16, layout.height + 16, 14).fill({ color: ICE.frost, alpha: 0.5 });
		if (glow) g.roundRect(x0 - 14, y0 - 14, layout.width + 28, layout.height + 28, 18).stroke({ color: ICE.glacier, width: 14, alpha: 0.4 });
	};
</script>

<Graphics draw={drawBacking} />
<Sprite key="board_grid" anchor={0.5} x={layout.x} y={layout.y} width={artW} height={artH} />
<!-- ice lanterns on the four corners: [corner x, corner y, sprite, mirrored] -->
{#each [[-1, -1, 'tall', 1], [1, -1, 'leaning', 1], [-1, 1, 'leaning', -1], [1, 1, 'squat', 1]] as [sx, sy, kind, flip], i (i)}
	<Sprite
		key={`prop_lantern_${kind}`}
		anchor={{ x: 0.5, y: 1 }}
		x={layout.x + (sx as number) * (layout.width / 2 + 20)}
		y={layout.y + (sy as number) * (layout.height / 2 + 8) + 26}
		height={(kind === 'squat' ? 66 : 96)}
		width={(kind === 'squat' ? 60 : 64) * (flip as number)}
	/>
{/each}
