<script lang="ts" module>
	export type EmitterEventMultiplierBadge =
		| { type: 'multiplierBadgeSet'; value: number; kind: 'aurora' | 'rite' }
		| { type: 'multiplierBadgeHide' };
</script>

<script lang="ts">
	import { Container, Text, Graphics } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { MainContainer } from 'components-layout';
	import { waitForTimeout } from 'utils-shared/wait';

	import { getContext } from '../game/context';
	import { FONT_TITLE, FONT_UI } from '../game/uiTheme';
	import { ICE, UI_UNIT } from '../game/theme';

	const context = getContext();
	let show = $state(false);
	let value = $state(1);
	let kind = $state<'aurora' | 'rite'>('rite');
	let pop = $state(1);
	const layout = $derived(context.stateGameDerived.boardLayout());
	const color = $derived(kind === 'aurora' ? ICE.aurora : ICE.glacier);

	context.eventEmitter.subscribeOnMount({
		multiplierBadgeSet: async (e) => {
			value = e.value;
			kind = e.kind;
			show = true;
			pop = 1.35;
			await waitForTimeout(160);
			pop = 1;
			// Aurora multipliers are one-shot: fade out after the win plays. Rite multiplier persists.
			if (e.kind === 'aurora') {
				await waitForTimeout(900);
				show = false;
			}
		},
		multiplierBadgeHide: () => (show = false),
	});
</script>

<MainContainer>
	<FadeContainer
		{show}
		x={layout.x + layout.width * 0.5 + UI_UNIT * 0.9}
		y={layout.y - layout.height * 0.5 + UI_UNIT * 0.5}
		scale={pop}
		zIndex={40}
	>
		<Graphics
			draw={(g) => {
				g.circle(0, 0, UI_UNIT * 0.55).fill({ color: ICE.night, alpha: 0.9 });
				g.circle(0, 0, UI_UNIT * 0.55).stroke({ color, width: 5 });
			}}
		/>
		<Container>
			<Text
				anchor={{ x: 0.5, y: 0.5 }}
				text={`x${value}`}
				style={{ fontFamily: FONT_TITLE, fontWeight: '400', stroke: { color: ICE.ink, width: 5 }, fontSize: UI_UNIT * 0.4, fill: ICE.frost }}
			/>
		</Container>
	</FadeContainer>
</MainContainer>
