<script lang="ts">
	import { Rectangle, Graphics } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { drawHills, seeded } from '../game/art';

	const context = getContext();
	const canvas = $derived(context.stateLayoutDerived.canvasSizes());
	const inFeature = $derived(context.stateGame.gameType === 'freegame');
	const blizzard = $derived(inFeature && context.stateGame.rite === 'blizzard');
	const whiteout = $derived(inFeature && context.stateGame.rite === 'whiteout');

	// diagonal wind streaks (blizzard) and aurora ribbons (whiteout): flat ink-cartoon shapes
	const drawStreaks = (g: import('pixi.js').Graphics) => {
		const rnd = seeded(21);
		for (let i = 0; i < 46; i++) {
			const x = rnd() * canvas.width;
			const y = rnd() * canvas.height;
			const len = 60 + rnd() * 140;
			g.moveTo(x, y).lineTo(x - len, y + len * 0.35).stroke({ color: 0xffffff, width: 3 + rnd() * 4, alpha: 0.75, cap: 'round' });
		}
	};
	const drawRibbons = (g: import('pixi.js').Graphics) => {
		for (let i = 0; i < 3; i++) {
			const y = canvas.height * (0.12 + i * 0.07);
			g.moveTo(0, y);
			for (let x = 0; x <= canvas.width; x += 40) g.lineTo(x, y + Math.sin(x / 120 + i) * 26);
			g.stroke({ color: i % 2 ? ICE.glacier : ICE.aurora, width: 22, alpha: 0.35, cap: 'round' });
		}
	};
</script>

<Rectangle {...canvas} backgroundColor={ICE.bone} zIndex={-3} />
<Graphics zIndex={-2} draw={(g) => drawHills(g, canvas.width, canvas.height, 0xe2d9c6)} />

<FadeContainer show={blizzard} duration={SECOND} zIndex={-1}>
	<Rectangle {...canvas} backgroundColor={0xb7dcf0} backgroundAlpha={0.55} />
	<Graphics draw={drawStreaks} />
</FadeContainer>

<FadeContainer show={whiteout} duration={SECOND} zIndex={-1}>
	<Rectangle {...canvas} backgroundColor={0xe6defc} backgroundAlpha={0.6} />
	<Graphics draw={drawRibbons} />
</FadeContainer>
