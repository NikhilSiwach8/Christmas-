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
	import { Container, Graphics, Text, Rectangle } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../game/context';
	import { FONT_TITLE, FONT_UI } from '../game/uiTheme';
	import { ICE, WHEEL_COLORS, UI_UNIT } from '../game/theme';

	const context = getContext();
	const RADIUS = UI_UNIT * 2;

	let show = $state(false);
	let segments = $state<number[]>([1, 2, 3, 5, 10, 25, 50, 100]);
	let rotation = $state(0);
	let result = $state(1);
	let landed = $state(false);
	let pre = $state(0);
	let post = $state(0);
	const layout = $derived(context.stateGameDerived.boardLayout());

	const drawWheel = (g: import('pixi.js').Graphics) => {
		const n = segments.length;
		const step = (Math.PI * 2) / n;
		for (let i = 0; i < n; i++) {
			const a0 = i * step - Math.PI / 2 - step / 2;
			g.moveTo(0, 0)
				.arc(0, 0, RADIUS, a0, a0 + step)
				.lineTo(0, 0)
				.fill({ color: WHEEL_COLORS[i % WHEEL_COLORS.length] })
				.stroke({ color: ICE.frost, width: 3 });
		}
		g.circle(0, 0, RADIUS * 0.16).fill({ color: ICE.night }).stroke({ color: ICE.frost, width: 4 });
	};

	// segment i is centred at angle i*step (pointer at top); spin so the result segment ends under the pointer
	const spinTo = (index: number) =>
		new Promise<void>((resolve) => {
			const step = (Math.PI * 2) / segments.length;
			const target = Math.PI * 2 * 6 - index * step; // 6 full turns, then settle
			const start = performance.now();
			const duration = 4200;
			const tick = (now: number) => {
				const t = Math.min(1, (now - start) / duration);
				const eased = 1 - Math.pow(1 - t, 4);
				rotation = target * eased;
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
			show = true;
			await waitForTimeout(500);
			context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_superfreespin' });
			const idx = Math.max(0, segments.indexOf(e.result));
			await spinTo(idx);
			landed = true;
			await waitForTimeout(2200);
			show = false;
			await waitForTimeout(400);
		},
	});
</script>

<FadeContainer {show} zIndex={60}>
	<CanvasSizeRectangle backgroundColor={ICE.night} backgroundAlpha={0.82} />
	<MainContainer>
		<Container x={layout.x} y={layout.y}>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				y={-RADIUS - UI_UNIT * 0.55}
				text="FROST WHEEL"
				style={{ fontFamily: FONT_TITLE, fontWeight: '900', fontSize: UI_UNIT * 0.42, fill: ICE.glacier }}
			/>
			<Container {rotation}>
				<Graphics draw={drawWheel} />
				{#each segments as seg, i (i)}
					{@const a = (i * Math.PI * 2) / segments.length}
					<Container rotation={a}>
						<Text
							anchor={{ x: 0.5, y: 0.5 }}
							y={-RADIUS * 0.72}
							text={`x${seg}`}
							style={{ fontFamily: FONT_TITLE, fontWeight: '900', fontSize: UI_UNIT * 0.3, fill: ICE.gold }}
						/>
					</Container>
				{/each}
			</Container>
			<!-- fixed pointer -->
			<Graphics
				draw={(g) => {
					g.poly([-16, -RADIUS - 6, 16, -RADIUS - 6, 0, -RADIUS + 36]).fill({ color: ICE.danger });
				}}
			/>
			{#if landed}
				<Text
					anchor={{ x: 0.5, y: 0.5 }}
					y={RADIUS + UI_UNIT * 0.6}
					text={`x${result}  ${bookEventAmountToCurrencyString(pre)} > ${bookEventAmountToCurrencyString(post)}`}
					style={{ fontFamily: FONT_TITLE, fontWeight: '900', fontSize: UI_UNIT * 0.3, fill: ICE.frost }}
				/>
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>
