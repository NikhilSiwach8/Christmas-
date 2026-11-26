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
		if (state === 'win') {
			animate(
				900,
				(t) => {
					const pulse = Math.sin(t * Math.PI * 3) * (1 - t * 0.5);
					scaleX = 1 + 0.12 * Math.max(0, pulse);
					scaleY = scaleX + 0.04 * Math.sin(t * Math.PI * 6);
				},
				() => {
					scaleX = scaleY = 1;
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
	width={SYMBOL_SIZE * props.symbolInfo.sizeRatios.width * scaleX}
	height={SYMBOL_SIZE * props.symbolInfo.sizeRatios.height * scaleY}
/>
