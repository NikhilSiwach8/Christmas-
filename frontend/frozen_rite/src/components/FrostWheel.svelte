<script lang="ts" module>
	export type EmitterEventFrostWheel = {
		type: 'frostWheelSpin';
		level: number;
		kind: 'mult' | 'extra_sacrifice' | 'chosen_offering' | 'dark_surge' | 'blood_moon' | 'frenzy';
		value: number;
		newLevel: number;
		multAfter: number;
		boosted?: boolean;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { waitForTimeout } from 'utils-shared/wait';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { FONT_TITLE, FONT_UI } from '../game/uiTheme';

	const context = getContext();

	// Wheel art geometry (measured from the generated stand: opening centre (289,267) r=134.5 in the 580x679 export).
	const HOLE = 40;
	const K = HOLE / 134.5;
	const STAND = { w: 580 * K, h: 679 * K, ax: 289 / 580, ay: 267 / 679 };
	const FACE_W = (627 / 288) * HOLE * 1.04;
	const BELOW = (679 - 267) * K;
	const WEDGES = 8;

	let sway = $state(0);
	onMount(() => {
		let raf = 0;
		const tick = (t: number) => {
			sway = t / 900;
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});

	let rotation = $state(0);
	let spinning = $state(false);
	let landed = $state(false);
	let level = $state(1);
	let resultText = $state('');
	let subText = $state('');
	const zoom = new Tween(1, { duration: 450 });
	const lift = new Tween(0, { duration: 450 }); // 0 = mounted above the board, 1 = over the board centre

	const layout = $derived(context.stateGameDerived.boardLayout());
	const cx = $derived(layout.x);
	const cyRest = $derived(layout.y - layout.height / 2 - BELOW - 3);
	const cy = $derived(cyRest + (layout.y - cyRest) * lift.current);

	const describe = (e: EmitterEventFrostWheel) => {
		switch (e.kind) {
			case 'mult':
				return { t: e.boosted ? `UPGRADED WHEEL +${e.value}` : `MULTIPLIER +${e.value}`, s: `x${e.multAfter}` };
			case 'frenzy':
				return { t: `FROST FRENZY +${e.value}`, s: `x${e.multAfter}` };
			case 'extra_sacrifice':
				return { t: 'EXTRA SACRIFICE', s: 'a symbol is converted' };
			case 'chosen_offering':
				return { t: 'CHOSEN OFFERING', s: 'sacrifice + a random upgrade' };
			case 'dark_surge':
				return { t: 'AURORA SURGE', s: 'more scatters from now on' };
			case 'blood_moon':
				return { t: 'FROST MOON', s: `wheel level ${e.newLevel}` };
		}
	};

	const spinTo = (target: number, duration: number) =>
		new Promise<void>((resolve) => {
			const from = rotation;
			const start = performance.now();
			const tick = (now: number) => {
				const t = Math.min(1, (now - start) / duration);
				rotation = from + (target - from) * (1 - Math.pow(1 - t, 3));
				if (t < 1) requestAnimationFrame(tick);
				else resolve();
			};
			requestAnimationFrame(tick);
		});

	context.eventEmitter.subscribeOnMount({
		frostWheelSpin: async (e) => {
			level = e.level;
			const d = describe(e);
			resultText = d.t;
			subText = d.s;
			landed = false;
			spinning = true;
			zoom.set(1.9);
			lift.set(1);
			await waitForTimeout(450);
			context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_superfreespin' });
			const wedge = Math.floor(Math.random() * WEDGES);
			const turn = Math.PI * 2;
			await spinTo(rotation + turn * 3 + ((wedge * turn) / WEDGES - (rotation % turn)), 1900);
			landed = true;
			context.eventEmitter.broadcast({ type: 'soundOnce', name: e.kind === 'mult' ? 'sfx_multiplier_up' : 'sfx_scatter_win' });
			await waitForTimeout(1500);
			landed = false;
			spinning = false;
			zoom.set(1);
			lift.set(0);
			await waitForTimeout(500);
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
		<Sprite key="prop_basin" anchor={{ x: 0.5, y: 1 }} x={cx + side * (HOLE + 78)} y={cy + 30} height={92} width={96 * 1.05} />
	{/each}

	{#if landed}
		<Sprite key="wheel_flare" anchor={0.5} x={cx} y={cy} width={330} height={330} rotation={sway * 0.4} zIndex={59} />
	{/if}
	<Container x={cx} y={cy} scale={zoom.current} zIndex={60}>
		<Sprite key="wheel_stand" anchor={{ x: STAND.ax, y: STAND.ay }} width={STAND.w} height={STAND.h} />
		<Container {rotation}>
			<Sprite key="wheel_face" anchor={0.5} width={FACE_W} height={FACE_W} />
		</Container>
		<Sprite key="wheel_hub" anchor={0.5} width={HOLE * 0.5} height={HOLE * 0.5} />
		<Text
			anchor={{ x: 0.5, y: 0.5 }}
			text={`LV ${level}`}
			style={{ fontFamily: FONT_UI, fontWeight: '800', fontSize: 8, fill: 0xffffff, stroke: { color: ICE.ink, width: 2 } }}
		/>
		<!-- fixed pointer: coral crystal, tip inside the face -->
		<Sprite key="wheel_pointer" anchor={{ x: 0.5, y: 0.9 }} y={-HOLE + 4} width={HOLE * 0.36} height={HOLE * 0.54} />
	</Container>

	{#if landed}
		<Sprite key="wheel_tag" anchor={0.5} x={cx} y={layout.y + 205} width={470} height={((470 * 160) / 307) * 0.62} zIndex={60} />
		<Text
			x={cx + 22}
			y={layout.y + 198}
			anchor={{ x: 0.5, y: 0.5 }}
			text={resultText}
			style={{ fontFamily: FONT_TITLE, fontWeight: '400', fontSize: 19, fill: ICE.ink }}
			zIndex={61}
		/>
		<Text
			x={cx + 22}
			y={layout.y + 216}
			anchor={{ x: 0.5, y: 0.5 }}
			text={subText}
			style={{ fontFamily: FONT_UI, fontWeight: '800', fontSize: 11, fill: ICE.ink }}
			zIndex={61}
		/>
	{/if}
</MainContainer>
