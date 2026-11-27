<script lang="ts" module>
	export type EmitterEventFreeSpinCounter =
		| { type: 'freeSpinCounterShow' }
		| { type: 'freeSpinCounterHide' }
		| { type: 'freeSpinCounterUpdate'; current?: number; total?: number };
</script>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { anchorToPivot, Text, Container, Sprite, type Sizes } from 'pixi-svelte';
	import { FONT_UI } from '../game/uiTheme';
	import { ICE } from '../game/theme';

	const context = getContext();
	const PANEL_KEY_DESKTOP = 'ft_counter';
	const PANEL_RATIO_DESKTOP = 415 / 320;
	const panelKey = PANEL_KEY_DESKTOP;
	const panelWidth = $derived(SYMBOL_SIZE * 2);
	const panelSizes = $derived({
		width: panelWidth,
		height: panelWidth / PANEL_RATIO_DESKTOP,
	});
	const scale = 1;
	const position = $derived({
		x:
			context.stateGameDerived.boardLayout().x -
			context.stateGameDerived.boardLayout().width * 0.5 -
			panelSizes.width -
			SYMBOL_SIZE * 0.7,
		y:
			context.stateGameDerived.boardLayout().y -
			context.stateGameDerived.boardLayout().height * 0.5,
	});

	const fontSize = 17;

	let show = $state(false);
	let current = $state(0);
	let total = $state(0);
	let titleSizes: Sizes = $state({ width: 0, height: 0 });
	let counterSizes: Sizes = $state({ width: 0, height: 0 });

	const textContainerSizes = $derived({
		width: titleSizes.width,
		height: titleSizes.height + counterSizes.height,
	});
	const counterPosition = $derived({ x: titleSizes.width / 2, y: titleSizes.height });

	context.eventEmitter.subscribeOnMount({
		freeSpinCounterShow: () => (show = true),
		freeSpinCounterHide: () => (show = false),
		freeSpinCounterUpdate: (emitterEvent) => {
			if (emitterEvent.current !== undefined) current = emitterEvent.current;
			if (emitterEvent.total !== undefined) total = emitterEvent.total;
		},
	});
</script>

<MainContainer>
	<FadeContainer {show} {...position} {scale}>
		<Sprite key={panelKey} {...panelSizes} />
		<Container
			x={panelSizes.width * 0.5}
			y={panelSizes.height * 0.6}
			pivot={anchorToPivot({
				sizes: textContainerSizes,
				anchor: { x: 0.5, y: 0.5 },
			})}
		>
			<Text
				text={'FREE SPIN'}
				style={{
					fontFamily: FONT_UI,
					fontWeight: '800',
					fill: ICE.ink,
					fontSize,
					wordWrap: false,
				}}
				onresize={(sizes) => (titleSizes = sizes)}
			/>
			<Text
				text={`${current} OF ${total}`}
				{...counterPosition}
				anchor={{ x: 0.5, y: 0 }}
				style={{
					fontFamily: FONT_UI,
					fontWeight: '800',
					fill: ICE.ink,
					fontSize,
				}}
				onresize={(sizes) => (counterSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
</MainContainer>
