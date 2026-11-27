<script lang="ts" module>
	import type { RiteName } from '../game/theme';
	export type EmitterEventRiteBanner = {
		type: 'riteBannerShow';
		rite: RiteName;
		purchased: boolean;
	};
</script>

<script lang="ts">
	import { Container, Sprite, Text } from 'pixi-svelte';
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
	const width = 560; // scroll art is 929x300
	const height = (width * 300) / 929;

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
		<Sprite
			key={info.emblem === 'blizzard' ? 'ft_emblem_blizzard' : 'ft_emblem_whiteout'}
			anchor={0.5}
			y={-height * 0.5 - 62}
			width={140}
			height={140}
		/>
		<Sprite key="ft_rite_banner" anchor={0.5} {width} {height} />
		<Container y={height * 0.03}>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				y={-height * 0.1}
				text={info.title}
				style={{ fontFamily: FONT_TITLE, fontWeight: '400', fontSize: 34, fill: info.emblem === 'blizzard' ? ICE.deep : 0x5a3fc0, stroke: { color: ICE.paper, width: 3 } }}
			/>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				y={height * 0.1}
				text={purchased ? 'YOU CALLED THE RITE' : info.subtitle}
				style={{ fontFamily: FONT_UI, fontWeight: '800', fontSize: 12, fill: ICE.ink, stroke: { color: ICE.paper, width: 3 } }}
			/>
		</Container>
	</FadeContainer>
</MainContainer>
