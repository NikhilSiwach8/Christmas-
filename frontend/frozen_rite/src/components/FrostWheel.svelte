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
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { FONT_TITLE, FONT_UI } from '../game/uiTheme';

	const context = getContext();
	// Wheel art geometry (measured from the generated stand: opening centre (289,267) r=134.5 in the 580x679 export).
	const HOLE = 40; // opening radius in layout units
	const K = HOLE / 134.5; // layout units per exported pixel
	const R = HOLE; // radius used for text placement
	const STAND = { w: 580 * K, h: 679 * K, ax: 289 / 580, ay: 267 / 679 };
	const FACE_W = (627 / 288) * HOLE * 1.04; // face disc radius is 288 exported px; tuck it slightly under the rim
	const BELOW = (679 - 267) * K; // stand height below the opening centre

	let segments = $state<number[]>([1, 2, 3, 5, 10, 25, 50, 100]);
	let rotation = $state(0);
	let spinning = $state(false);
	let landed = $state(false);
	let result = $state(1);
	let pre = $state(0);
	let post = $state(0);
	let sway = $state(0);
	onMount(() => {
		let raf = 0;
		const tick = (t: number) => { sway = t / 900; raf = requestAnimationFrame(tick); };
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
	let flare = $state(0); // 0..1 burst progress after landing
	const zoom = new Tween(1, { duration: 700 });
	const lift = new Tween(0, { duration: 700 }); // 0 = mounted above the board, 1 = centred over the board

	const layout = $derived(context.stateGameDerived.boardLayout());
	const cx = $derived(layout.x);
	const cyRest = $derived(layout.y - layout.height / 2 - BELOW - 3);
	const cy = $derived(cyRest + (layout.y - cyRest) * lift.current);

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
	<!-- frost serpent coiled beside the wheel post -->
	<Sprite key="wheel_tail" anchor={{ x: 0.5, y: 1 }} x={cx - HOLE - 30} y={cyRest + BELOW + 1} height={96} width={96 * 0.49} alpha={spinning ? 0 : 1} rotation={Math.sin(sway) * 0.03} />

	<!-- stone basins with frost flames, either side of the wheel -->
	{#each [-1, 1] as side (side)}
		<Sprite
			key="prop_basin"
			anchor={{ x: 0.5, y: 1 }}
			x={cx + side * (HOLE + 78)}
			y={cy + 30}
			height={92}
			width={96 * 1.05}
		/>
	{/each}

	{#if landed}
			<Sprite key="wheel_flare" anchor={0.5} x={cx} y={cy} width={330} height={330} rotation={sway * 0.4} zIndex={59} />
		{/if}
		<Container x={cx} y={cy} scale={zoom.current} zIndex={60}>
			<Sprite key="wheel_stand" anchor={{ x: STAND.ax, y: STAND.ay }} width={STAND.w} height={STAND.h} />
			<Container {rotation}>
				<Sprite key="wheel_face" anchor={0.5} width={FACE_W} height={FACE_W} />
				{#each segments as seg, i (i)}
					<Container rotation={(i * Math.PI * 2) / segments.length}>
						<Text
							anchor={{ x: 0.5, y: 0.5 }}
							y={-R * 0.68}
							text={`x${seg}`}
							style={{
								fontFamily: FONT_UI,
								fontWeight: '800',
								fontSize: 9,
								fill: 0xffffff,
								stroke: { color: ICE.ink, width: 2.5 },
							}}
						/>
					</Container>
				{/each}
			</Container>
			<Sprite key="wheel_hub" anchor={0.5} width={HOLE * 0.5} height={HOLE * 0.5} />
			<!-- fixed pointer: coral crystal, tip inside the face -->
			<Sprite key="wheel_pointer" anchor={{ x: 0.5, y: 0.9 }} y={-HOLE + 4} width={HOLE * 0.36} height={HOLE * 0.54} />
		</Container>

		{#if landed}
			<Sprite key="wheel_tag" anchor={0.5} x={cx} y={layout.y + 205} width={470} height={470 * 160 / 307 * 0.62} zIndex={60} />
			<Text
				x={cx + 22}
				y={layout.y + 205}
				anchor={{ x: 0.5, y: 0.5 }}
				text={`x${result}   ${bookEventAmountToCurrencyString(pre)} > ${bookEventAmountToCurrencyString(post)}`}
				style={{
					fontFamily: FONT_TITLE,
					fontWeight: '400',
					fontSize: 19,
					fill: ICE.ink,
				}}
				zIndex={61}
			/>
		{/if}
	</MainContainer>
