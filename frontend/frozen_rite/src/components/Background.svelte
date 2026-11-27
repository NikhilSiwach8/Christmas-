<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import { ICE, RITE_INFO } from '../game/theme';

	const context = getContext();
	const canvas = $derived(context.stateLayoutDerived.canvasSizes());
	const portrait = $derived(canvas.height > canvas.width);
	const inFeature = $derived(context.stateGame.gameType === 'freegame');
	const which = $derived(!inFeature ? 'base' : RITE_INFO[context.stateGame.rite].bg);

	// native sizes of the generated paintings (cover-fit to the canvas)
	const SIZES = {
		base_d: [1789, 879],
		base_p: [941, 1672],
		blizzard_d: [1789, 879],
		blizzard_p: [941, 1672],
		whiteout_d: [1789, 879],
		whiteout_p: [941, 1672],
	} as const;
	const HAVE_PORTRAIT = { base: true, blizzard: true, whiteout: true } as const;

	const pick = (kind: 'base' | 'blizzard' | 'whiteout') => {
		const usePortrait = portrait && HAVE_PORTRAIT[kind];
		const key = `${kind}_${usePortrait ? 'p' : 'd'}` as keyof typeof SIZES;
		const [w, h] = SIZES[key];
		const scale = Math.max(canvas.width / w, canvas.height / h);
		return { key: `bg_${key}`, width: w * scale, height: h * scale };
	};
	const layers = $derived(
		(['base', 'blizzard', 'whiteout'] as const).map((kind) => ({ kind, ...pick(kind) })),
	);
</script>

<Rectangle {...canvas} backgroundColor={ICE.bone} zIndex={-3} />

{#if context.stateApp.loaded}
{#each layers as layer (layer.kind)}
	<FadeContainer show={which === layer.kind} duration={SECOND} zIndex={layer.kind === 'base' ? -2 : -1}>
		<Sprite
			key={layer.key}
			anchor={0.5}
			x={canvas.width / 2}
			y={canvas.height / 2}
			width={layer.width}
			height={layer.height}
		/>
	</FadeContainer>
{/each}
{/if}
