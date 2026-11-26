<script lang="ts">
	import { Sprite } from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';

	const context = getContext();
	const layout = $derived(context.stateGameDerived.boardLayout());
	const left = $derived(layout.x - layout.width / 2);
	const right = $derived(layout.x + layout.width / 2);
	const ground = $derived(layout.y + 178); // feet line of the side props

	// native aspect ratios of the generated props (w/h)
	const BANNER = 278 / 640;
	const PRAY = 398 / 512;
	const STAFF = 400 / 512;
	// ground dressing (aspect w/h from the exported sprites)
	const ROCK = 512 / 384;
	const STUMP = 512 / 384;
	const TWIGS = 512 / 384;
</script>

<MainContainer>
	<!-- standing banners with the Frost Eye Sigil (mirrored on the right) -->
	<Sprite key="prop_banner" anchor={{ x: 0.5, y: 1 }} x={left - 205} y={ground - 6} height={250} width={250 * BANNER} />
	<Sprite key="prop_banner" anchor={{ x: 0.5, y: 1 }} x={right + 205} y={ground - 6} height={250} width={-250 * BANNER} />

	<!-- frost acolytes -->
	<Sprite key="prop_acolytes_pray" anchor={{ x: 0.5, y: 1 }} x={left - 95} y={ground} height={190} width={190 * PRAY} />
	<Sprite key="prop_acolytes_staff" anchor={{ x: 0.5, y: 1 }} x={right + 95} y={ground} height={190} width={-190 * STAFF} />

	<!-- ground dressing in front of / beside the side groups -->
	<Sprite key="prop_rock" anchor={{ x: 0.5, y: 1 }} x={left - 300} y={ground + 52} height={62} width={62 * ROCK} />
	<Sprite key="prop_stump" anchor={{ x: 0.5, y: 1 }} x={right + 300} y={ground + 50} height={64} width={64 * STUMP} />
	<Sprite key="prop_twigs" anchor={{ x: 0.5, y: 1 }} x={right + 170} y={ground + 60} height={44} width={44 * TWIGS} />
</MainContainer>
