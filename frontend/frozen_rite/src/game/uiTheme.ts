import { setUiTheme } from 'components-ui-pixi';

import { ICE } from './theme';

// Typography: heavy rounded sans for the bar (Nunito Sans), uncial caps for titles/cards (Uncial Antiqua). Both SIL OFL.
export const FONT_UI = 'Nunito Sans';
export const FONT_TITLE = 'Uncial Antiqua';

/** Ice-cartoon look for the shared control bar: one dark rounded plate, cyan labels over white values. */
export const applyIceUiTheme = () =>
	setUiTheme({
		fontFamily: FONT_UI,
		fontWeight: '800',
		letterSpacing: 1,
		text: 0xffffff,
		labelText: ICE.glacier,
		labelScale: 0.55,
		barPlate: true,
		plateFill: ICE.night,
		plateBorder: ICE.ink,
		panelFill: ICE.night,
		panelAlpha: 0,
		panelBorder: ICE.ink,
		panelBorderWidth: 0,
		buttonFill: 0x23416b,
		buttonText: 0xffffff,
		buttonBorder: ICE.glacier,
		buttonBorderWidth: 3,
		buttonFillLight: ICE.frost,
		buttonTextLight: ICE.night,
		buttonDisabled: 0x2b3f55,
		accent: ICE.glacier,
		spinFill: ICE.deep,
		spinSprite: 'ui_spin',
		icons: {
			increase: { key: 'ui_icon_plus', w: 0.5, h: 0.5 },
			decrease: { key: 'ui_icon_minus', w: 0.55, h: 0.18 },
			menu: { key: 'ui_icon_menu', w: 0.5, h: 0.5 },
			turbo: { key: 'ui_icon_turbo', w: 0.4, h: 0.5 },
			autoSpin: { key: 'ui_icon_auto', w: 0.5, h: 0.5 },
		},
		roundSprite: '', // ornate round art exists (ui_round*) but is too detailed at button size; set to 'ui_round' to try it
	});

const FONT_FILES = [
	{ family: FONT_UI, url: '/fonts/NunitoSans-Variable.woff2', weight: '200 1000' },
	{ family: FONT_TITLE, url: '/fonts/UncialAntiqua-400.woff2', weight: '400' },
];

/** Register + load the bundled fonts (works in the built app and in Storybook), so Pixi measures text correctly. */
export const loadFonts = async () => {
	try {
		const faces = FONT_FILES.map(
			(f) => new FontFace(f.family, `url(${f.url}) format('woff2')`, { weight: f.weight }),
		);
		await Promise.all(
			faces.map(async (face) => {
				await face.load();
				document.fonts.add(face);
			}),
		);
	} catch {
		// fall back to a system serif if the browser blocks font loading
	}
};
