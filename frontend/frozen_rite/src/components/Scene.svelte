<script lang="ts">
	import { Container, Graphics } from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import { ICE } from '../game/theme';
	import { drawAcolyte } from '../game/art';

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
