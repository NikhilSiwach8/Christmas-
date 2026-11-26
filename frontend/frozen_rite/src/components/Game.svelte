<script lang="ts">
	import { onMount } from 'svelte';

	import { EnablePixiExtension } from 'components-pixi';
	import { EnableHotkey } from 'components-shared';
	import { MainContainer } from 'components-layout';
	import { App, Text, REM } from 'pixi-svelte';
	import { stateModal, stateMeta } from 'state-shared';

	import { UI, UiGameName } from 'components-ui-pixi';
	import { GameVersion, Modals } from 'components-ui-html';

	import { getContext } from '../game/context';
	import EnableSound from './EnableSound.svelte';
	import EnableGameActor from './EnableGameActor.svelte';
	import ResumeBet from './ResumeBet.svelte';
	import Sound from './Sound.svelte';
	import Background from './Background.svelte';
	import LoadingScreen from './LoadingScreen.svelte';
	import BoardFrame from './BoardFrame.svelte';
	import Scene from './Scene.svelte';
	import Board from './Board.svelte';
	import Anticipations from './Anticipations.svelte';
	import Win from './Win.svelte';
	import FreeSpinIntro from './FreeSpinIntro.svelte';
	import FreeSpinCounter from './FreeSpinCounter.svelte';
	import FreeSpinOutro from './FreeSpinOutro.svelte';
	import Transition from './Transition.svelte';
	import RiteBanner from './RiteBanner.svelte';
	import MultiplierBadge from './MultiplierBadge.svelte';
	import FrostWheel from './FrostWheel.svelte';
	import { FROZEN_RITE_BET_MODE_META } from '../game/betModeMeta';
	import { applyIceUiTheme, loadFonts, FONT_TITLE } from '../game/uiTheme';
	import { ICE } from '../game/theme';

	const context = getContext();

	applyIceUiTheme();

	onMount(async () => {
		await loadFonts();
		context.stateLayout.showLoadingScreen = true;
		stateMeta.betModeMeta = FROZEN_RITE_BET_MODE_META;
	});

	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
	});
</script>

<App>
	<EnableSound />
	<EnableHotkey />
	<EnableGameActor />
	<EnablePixiExtension />

	<Background />

	{#if context.stateLayout.showLoadingScreen}
		<LoadingScreen onloaded={() => (context.stateLayout.showLoadingScreen = false)} />
	{:else}
		<ResumeBet />
		<!--
			The reason why <Sound /> is rendered after clicking the loading screen:
			"Autoplay with sound is allowed if: The user has interacted with the domain (click, tap, etc.)."
			Ref: https://developer.chrome.com/blog/autoplay
		-->
		<Sound />

		<Scene />

		<MainContainer>
			<BoardFrame />
		</MainContainer>

		<MainContainer>
			<Board />
			<Anticipations />
		</MainContainer>

		<UI>
			{#snippet gameName()}
				<Text
					anchor={{ x: 0, y: 0 }}
					x={8}
					y={6}
					text="FROZEN RITE"
					style={{
						fontFamily: FONT_TITLE,
						fontSize: REM * 2,
						fontWeight: '400',
						letterSpacing: 2,
						fill: ICE.glacier,
						stroke: { color: ICE.ink, width: 7 },
					}}
				/>
			{/snippet}
			{#snippet logo()}{/snippet}
		</UI>
		<Win />
		<FreeSpinIntro />
		{#if ['desktop', 'landscape'].includes(context.stateLayoutDerived.layoutType())}
			<FreeSpinCounter />
		{/if}
		<FreeSpinOutro />
		<MultiplierBadge />
		<RiteBanner />
		<FrostWheel />
		<Transition />

	{/if}
</App>

<Modals>
	{#snippet version()}
		<GameVersion version="0.0.0" />
	{/snippet}
</Modals>
