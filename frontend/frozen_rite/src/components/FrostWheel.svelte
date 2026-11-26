<script lang="ts" module>
	export type EmitterEventFrostWheel = {
		type: 'frostWheelSpin';
		segments: number[];
		result: number;
		preWheelAmount: number;
		postWheelAmount: number;
	};
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { Container, Graphics, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../game/context';
	import { ICE, WHEEL_COLORS } from '../game/theme';
	import { FONT_TITLE, FONT_UI } from '../game/uiTheme';
	import { drawBasin, drawSigil } from '../game/art';

	const context = getContext();
	const R = 50; // resting radius (main-layout units)

	let segments = $state<number[]>([1, 2, 3, 5, 10, 25, 50, 100]);
	let rotation = $state(0);
	let spinning = $state(false);
	let landed = $state(false);
	let result = $state(1);
	let pre = $state(0);
	let post = $state(0);
	const zoom = new Tween(1, { duration: 700 });
	const lift = new Tween(0, { duration: 700 }); // 0 = mounted above the board, 1 = centred over the board

	const layout = $derived(context.stateGameDerived.boardLayout());
	const cx = $derived(layout.x);
	const cyRest = $derived(layout.y - layout.height / 2 - R - 40);
	const cy = $derived(cyRest + (layout.y - cyRest) * lift.current);

	/** Wheel face: eight flat-coloured wedges with ink dividers, spiked rim, sigil hub. */
	const drawWheel = (g: import('pixi.js').Graphics) => {
		const n = segments.length;
		const step = (Math.PI * 2) / n;
		for (let i = 0; i < n; i++) {
			const a0 = i * step - Math.PI / 2 - step / 2;
			g.moveTo(0, 0).arc(0, 0, R, a0, a0 + step).lineTo(0, 0).fill({ color: WHEEL_COLORS[i % WHEEL_COLORS.length] });
			g.moveTo(0, 0).lineTo(Math.cos(a0) * R, Math.sin(a0) * R).stroke({ color: ICE.ink, width: 3 });
		}
		g.circle(0, 0, R).stroke({ color: ICE.ink, width: 6 });
	};
	const drawRim = (g: import('pixi.js').Graphics) => {
		// heavy dark rim with eight white ice spikes
		g.circle(0, 0, R + 9).stroke({ color: ICE.night, width: 14 });
		g.circle(0, 0, R + 16).stroke({ color: ICE.ink, width: 3 });
		for (let k = 0; k < 8; k++) {
			const a = (k * Math.PI) / 4 + Math.PI / 8 - Math.PI / 2;
			const bx = Math.cos(a) * (R + 14);
			const by = Math.sin(a) * (R + 14);
			const nx = -Math.sin(a) * 7;
			const ny = Math.cos(a) * 7;
			g.poly([bx + nx, by + ny, bx - nx, by - ny, Math.cos(a) * (R + 30), Math.sin(a) * (R + 30)])
				.fill({ color: ICE.frost })
				.stroke({ color: ICE.ink, width: 3, join: 'round' });
		}
	};
	const drawStand = (g: import('pixi.js').Graphics) => {
		g.ellipse(0, R + 38, R * 0.9, 10).fill({ color: ICE.ink, alpha: 0.25 });
		g.rect(-7, R + 8, 14, 26).fill({ color: ICE.night }).stroke({ color: ICE.ink, width: 3 });
		g.roundRect(-R * 0.55, R + 30, R * 1.1, 11, 5).fill({ color: ICE.paper }).stroke({ color: ICE.ink, width: 3 });
	};

	const spinTo = (index: number) =>
		new Promise<void>((resolve) => {
			const step = (Math.PI * 2) / segments.length;
			const target = Math.PI * 2 * 6 - index * step;
			const start = performance.now();
			const duration = 4200;
			const tick = (now: number) => {
				const t = Math.min(1, (now - start) / duration);
				rotation = target * (1 - Math.pow(1 - t, 4));
				if (t < 1) requestAnimationFrame(tick);
				else resolve();
			};
			requestAnimationFrame(tick);
		});

	context.eventEmitter.subscribeOnMount({
		frostWheelSpin: async (e) => {
			segments = e.segments;
			result = e.result;
			pre = e.preWheelAmount;
			post = e.postWheelAmount;
			landed = false;
			rotation = 0;
			spinning = true;
			zoom.set(1.9);
			lift.set(1);
			await waitForTimeout(650);
			context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_superfreespin' });
			await spinTo(Math.max(0, segments.indexOf(e.result)));
			landed = true;
			await waitForTimeout(2400);
			landed = false;
			spinning = false;
			zoom.set(1);
			lift.set(0);
			await waitForTimeout(750);
		},
	});
</script>

<!-- dim the scene while the wheel is the star -->
<FadeContainer show={spinning} zIndex={55}>
	<CanvasSizeRectangle backgroundColor={ICE.ink} backgroundAlpha={0.4} />
</FadeContainer>

<MainContainer>
	<!-- stone basins with frost flames, either side of the wheel -->
	{#each [-1, 1] as side (side)}
		<Container x={cx + side * (R + 120)} y={cy + 6}>
			<Graphics draw={(g) => drawBasin(g, 84)} />
		</Container>
	{/each}

	<Container x={cx} y={cy} scale={zoom.current} zIndex={60}>
		<Graphics draw={drawStand} />
		<Container {rotation}>
			<Graphics draw={drawWheel} />
			{#each segments as seg, i (i)}
				<Container rotation={(i * Math.PI * 2) / segments.length}>
					<Text
						anchor={{ x: 0.5, y: 0.5 }}
						y={-R * 0.7}
						text={`x${seg}`}
						style={{ fontFamily: FONT_UI, fontWeight: '800', fontSize: 11, fill: ICE.ink }}
					/>
				</Container>
			{/each}
		</Container>
		<Graphics draw={drawRim} />
		<Graphics draw={(g) => drawSigil(g, 17)} />
		<!-- fixed pointer -->
		<Graphics
			draw={(g) => {
				g.poly([-10, -R - 24, 10, -R - 24, 0, -R + 2]).fill({ color: ICE.danger }).stroke({ color: ICE.ink, width: 3, join: 'round' });
			}}
		/>
	</Container>

	{#if landed}
		<Text
			x={cx}
			y={layout.y + 205}
			anchor={{ x: 0.5, y: 0.5 }}
			text={`x${result}   ${bookEventAmountToCurrencyString(pre)} > ${bookEventAmountToCurrencyString(post)}`}
			style={{
				fontFamily: FONT_TITLE,
				fontWeight: '400',
				fontSize: 28,
				fill: ICE.frost,
				stroke: { color: ICE.ink, width: 6 },
			}}
			zIndex={61}
		/>
	{/if}
</MainContainer>
