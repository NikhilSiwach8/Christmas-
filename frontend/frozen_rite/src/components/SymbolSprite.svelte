<script lang="ts">
	import { Sprite, type SpriteProps } from 'pixi-svelte';

	import { getSymbolInfo } from '../game/utils';
	import { SYMBOL_SIZE } from '../game/constants';

	type Props = {
		x?: number;
		y?: number;
		state?: string;
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		oncomplete?: () => void;
	};

	const props: Props = $props();

	// Win: a bouncy pulse (about 0.9 s) then oncomplete; land: tiny squash; everything else completes at once.
	let scaleX = $state(1);
	let scaleY = $state(1);
	let boom = $state(-1); // current burst frame (-1 = none)
	const faded = $derived(props.state === 'postWinStatic' && props.symbolInfo.assetKey !== 'sym_w_exploded');
	let timer: ReturnType<typeof requestAnimationFrame> | undefined;

	const animate = (duration: number, frame: (t: number) => void, done: () => void) => {
		const start = performance.now();
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			frame(t);
			if (t < 1) timer = requestAnimationFrame(tick);
			else done();
		};
		timer = requestAnimationFrame(tick);
	};

	$effect(() => {
		props.symbolInfo;
		const state = props.state;
		if (timer) cancelAnimationFrame(timer);
		scaleX = 1;
		scaleY = 1;
		boom = -1;
		if (state === 'win') {
			animate(
				900,
				(t) => {
					const pulse = Math.sin(t * Math.PI * 3) * (1 - t * 0.5);
					scaleX = 1 + 0.12 * Math.max(0, pulse);
					scaleY = scaleX + 0.04 * Math.sin(t * Math.PI * 6);
					// shard burst over the last 60% of the win, 12 frames
					boom = t < 0.4 ? -1 : Math.min(11, Math.floor(((t - 0.4) / 0.6) * 12));
				},
				() => {
					scaleX = scaleY = 1;
					boom = -1;
					props.oncomplete?.();
				},
			);
		} else if (state === 'land') {
			animate(
				220,
				(t) => {
					scaleX = 1 + 0.08 * Math.sin(t * Math.PI);
					scaleY = 1 - 0.08 * Math.sin(t * Math.PI);
				},
				() => {},
			);
			props.oncomplete?.();
		} else {
			props.oncomplete?.();
		}
		return () => timer && cancelAnimationFrame(timer);
	});
</script>

<Sprite
	x={props.x}
	y={props.y}
	anchor={0.5}
	key={props.symbolInfo.assetKey}
	alpha={faded ? 0.55 : 1}
	width={SYMBOL_SIZE * props.symbolInfo.sizeRatios.width * scaleX}
	height={SYMBOL_SIZE * props.symbolInfo.sizeRatios.height * scaleY}
/>

{#if faded}
	<!-- paid symbol: faded art with an ink-line crack overlay -->
	<Sprite
		x={props.x}
		y={props.y}
		anchor={0.5}
		key="fx_crack"
		alpha={0.9}
		width={SYMBOL_SIZE * 1.1}
		height={SYMBOL_SIZE * 1.1}
	/>
{/if}
{#if boom >= 0}
	<Sprite
		x={props.x}
		y={props.y}
		anchor={0.5}
		key={`fx_boom_${String(boom).padStart(2, '0')}`}
		width={SYMBOL_SIZE * 1.7}
		height={SYMBOL_SIZE * 1.7}
	/>
{/if}
