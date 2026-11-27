<script lang="ts">
	import { onMount } from 'svelte';
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { seeded } from '../game/art';
	import { RITE_INFO } from '../game/theme';

	const context = getContext();
	const canvas = $derived(context.stateLayoutDerived.canvasSizes());
	const blizzard = $derived(context.stateGame.gameType === 'freegame' && RITE_INFO[context.stateGame.rite].bg === 'blizzard');

	type Flake = { x: number; y: number; size: number; speed: number; drift: number; phase: number; spin: number; kind: string; alpha: number; rot: number };
	const KINDS = ['fx_snow_a', 'fx_snow_b', 'fx_snow_c'];
	const MAX = 64;
	const rnd = seeded(11);
	let flakes = $state<Flake[]>(
		Array.from({ length: MAX }, (_, i) => ({
			x: rnd(),
			y: rnd(),
			size: 10 + rnd() * 20,
			speed: 0.02 + rnd() * 0.05,
			drift: 0.01 + rnd() * 0.03,
			phase: rnd() * 6.28,
			spin: (rnd() - 0.5) * 0.02,
			kind: KINDS[i % 3],
			alpha: 0.55 + rnd() * 0.4,
			rot: rnd() * 6.28,
		})),
	);
	// twinkling sparkles around the scene
	type Spark = { x: number; y: number; t: number; speed: number; size: number };
	let sparks = $state<Spark[]>(Array.from({ length: 7 }, () => ({ x: rnd(), y: rnd() * 0.7, t: rnd(), speed: 0.004 + rnd() * 0.006, size: 14 + rnd() * 14 })));

	// number of visible flakes: calm in base, heavy in the blizzard rite
	const visible = $derived(blizzard ? MAX : 26);

	onMount(() => {
		let raf = 0;
		let last = performance.now();
		const tick = (now: number) => {
			const dt = Math.min(50, now - last) / 16.7;
			last = now;
			const wind = blizzard ? 0.045 : 0;
			const fall = blizzard ? 2.4 : 1;
			for (const f of flakes) {
				f.y += (f.speed * fall * dt) / 6;
				f.x += ((Math.sin(now / 1400 + f.phase) * f.drift * 0.2 + wind) * dt) / 6;
				f.rot += f.spin * dt;
				if (f.y > 1.05) { f.y = -0.05; f.x = Math.random(); }
				if (f.x > 1.05) f.x = -0.05;
			}
			for (const s of sparks) {
				s.t += s.speed * dt;
				if (s.t > 1) { s.t = 0; s.x = Math.random(); s.y = Math.random() * 0.7; }
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

{#if context.stateApp.loaded}
	{#each flakes.slice(0, visible) as f, i (i)}
		<Sprite key={f.kind} anchor={0.5} x={f.x * canvas.width} y={f.y * canvas.height} width={f.size} height={f.size} rotation={f.rot} alpha={f.alpha} zIndex={-0.5} />
	{/each}
	{#each sparks as s, i (i)}
		{@const k = Math.sin(s.t * Math.PI)}
		<Sprite key="fx_sparkle" anchor={0.5} x={s.x * canvas.width} y={s.y * canvas.height} width={s.size * k} height={s.size * k} alpha={k} rotation={s.t * 1.5} zIndex={-0.5} />
	{/each}
{/if}
