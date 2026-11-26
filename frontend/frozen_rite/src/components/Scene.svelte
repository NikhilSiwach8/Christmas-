<script lang="ts">
	import { Container, Graphics } from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { drawAcolyte, drawBanner, drawChain, drawSigil } from '../game/art';

	const context = getContext();
	const layout = $derived(context.stateGameDerived.boardLayout());
	const left = $derived(layout.x - layout.width / 2);
	const right = $derived(layout.x + layout.width / 2);
	// acolyte group layout: [dx, dy, radius]
	const group = [
		[0, 40, 26],
		[-44, 90, 22],
		[44, 96, 24],
	];
</script>

<MainContainer>
	<!-- hanging chains in the four top corners -->
	{#each [60, 108, layout.x * 2 - 108, layout.x * 2 - 60] as cx (cx)}
		<Container x={cx} y={-6}>
			<Graphics draw={(g) => drawChain(g, 170 + (cx % 7) * 10)} />
		</Container>
	{/each}

	<!-- torn banners with the Frost Eye Sigil -->
	{#each [-1, 1] as side (side)}
		<Container x={(side < 0 ? left : right) + side * 175} y={layout.y - 215}>
			<Graphics draw={(g) => drawBanner(g, 92, 210)} />
			<Container y={210 * 0.36}>
				<Graphics draw={(g) => drawSigil(g, 24)} />
			</Container>
		</Container>
	{/each}

	<!-- frost acolytes -->
	{#each [-1, 1] as side (side)}
		<Container x={(side < 0 ? left : right) + side * 120} y={layout.y + 70}>
			{#each group as [dx, dy, r], i (i)}
				<Container x={dx} y={dy} scale={{ x: side, y: 1 }}>
					<Graphics draw={(g) => drawAcolyte(g, r, i === 1 ? ICE.aurora : ICE.deep)} />
				</Container>
			{/each}
		</Container>
	{/each}
</MainContainer>
