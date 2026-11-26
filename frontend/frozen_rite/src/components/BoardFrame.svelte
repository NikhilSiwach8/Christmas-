<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Container, Graphics } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { SYMBOL_SIZE, BOARD_DIMENSIONS } from '../game/constants';
	import { drawLantern, inkStroke, seeded, wobble } from '../game/art';

	const context = getContext();
	let glow = $state(false);

	context.eventEmitter.subscribeOnMount({
		boardFrameGlowShow: () => (glow = true),
		boardFrameGlowHide: () => (glow = false),
	});

	const layout = $derived(context.stateGameDerived.boardLayout());
	const x0 = $derived(layout.x - layout.width / 2);
	const y0 = $derived(layout.y - layout.height / 2);

	/** Hand-scratched chalk grid on the snow (cells line up with the reels). */
	const drawGrid = (g: import('pixi.js').Graphics) => {
		const w = layout.width;
		const h = layout.height;
		const rnd = seeded(5);
		g.roundRect(x0 - 8, y0 - 8, w + 16, h + 16, 14).fill({ color: ICE.frost, alpha: 0.5 });
		if (glow) g.roundRect(x0 - 14, y0 - 14, w + 28, h + 28, 18).stroke({ color: ICE.glacier, width: 14, alpha: 0.4 });
		for (let c = 0; c <= BOARD_DIMENSIONS.x; c++) {
			const x = x0 + c * SYMBOL_SIZE;
			inkStroke(g, wobble(x, y0 - 6, x, y0 + h + 6, 5, rnd), 4, ICE.glacier);
		}
		for (let r = 0; r <= BOARD_DIMENSIONS.y; r++) {
			const y = y0 + r * SYMBOL_SIZE;
			inkStroke(g, wobble(x0 - 6, y, x0 + w + 6, y, 5, rnd), 4, ICE.glacier);
		}
		// frost-paint splatter dots
		for (let i = 0; i < 26; i++) {
			const px = x0 + rnd() * w;
			const py = y0 + rnd() * h;
			g.circle(px, py, 1.5 + rnd() * 3).fill({ color: ICE.glacier }).stroke({ color: ICE.ink, width: 1.2 });
		}
	};
</script>

<Graphics draw={drawGrid} />
<!-- ice lanterns on the four corners -->
{#each [[-1, -1], [1, -1], [-1, 1], [1, 1]] as [sx, sy], i (i)}
	<Container x={layout.x + sx * (layout.width / 2 + 18)} y={layout.y + sy * (layout.height / 2 + 6) - 28}>
		<Graphics draw={(g) => drawLantern(g, 34)} />
	</Container>
{/each}
