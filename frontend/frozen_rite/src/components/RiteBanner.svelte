<script lang="ts" module>
	import type { RiteName } from '../game/theme';
	export type EmitterEventRiteBanner = {
		type: 'riteBannerShow';
		rite: RiteName;
		purchased: boolean;
	};
</script>

<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { MainContainer } from 'components-layout';
	import { waitForTimeout } from 'utils-shared/wait';

	import { getContext } from '../game/context';
	import { FONT_TITLE, FONT_UI } from '../game/uiTheme';
	import { ICE, RITE_INFO, UI_UNIT, type RiteName } from '../game/theme';

	const context = getContext();
	let show = $state(false);
	let rite = $state<RiteName>('blizzard');
	let purchased = $state(false);
	const info = $derived(RITE_INFO[rite]);
	const layout = $derived(context.stateGameDerived.boardLayout());
	const width = UI_UNIT * 5.2;
	const height = UI_UNIT * 1.5;

	context.eventEmitter.subscribeOnMount({
		riteBannerShow: async (e) => {
			rite = e.rite;
			purchased = e.purchased;
			show = true;
			context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_superfreespin' });
			await waitForTimeout(2400);
			show = false;
			await waitForTimeout(350);
		},
	});
</script>

<MainContainer>
	<FadeContainer {show} x={layout.x} y={layout.y} zIndex={50}>
		<Rectangle
			{width}
			{height}
			borderRadius={18}
			backgroundColor={ICE.night}
			backgroundAlpha={0.88}
			borderColor={info.color}
			borderWidth={4}
			anchor={{ x: 0.5, y: 0.5 }}
		/>
		<Container>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				y={-height * 0.17}
				text={info.title}
				style={{ fontFamily: FONT_TITLE, fontWeight: '900', fontSize: UI_UNIT * 0.44, fill: info.color }}
			/>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				y={height * 0.22}
				text={purchased ? 'YOU CALLED THE RITE' : info.subtitle}
				style={{ fontFamily: FONT_UI, fontWeight: '700', fontSize: UI_UNIT * 0.2, fill: ICE.frost }}
			/>
		</Container>
	</FadeContainer>
</MainContainer>
