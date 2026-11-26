import { setUiTheme } from 'components-ui-pixi';

import { ICE } from './theme';

// Typography: engraved Roman capitals (Cinzel, SIL OFL) for UI, Cinzel Decorative for titles/logo.
export const FONT_UI = 'Cinzel';
export const FONT_TITLE = 'Cinzel Decorative';

/** Ice look for the shared control bar: deep-navy panels, glacier rims, frost text. */
export const applyIceUiTheme = () =>
	setUiTheme({
		fontFamily: FONT_UI,
		fontWeight: '700',
		letterSpacing: 1.5,
		text: ICE.frost,
		panelFill: ICE.deep,
		panelAlpha: 0.9,
		panelBorder: ICE.glacier,
		panelBorderWidth: 3,
		buttonFill: ICE.night,
		buttonText: ICE.frost,
		buttonBorder: ICE.glacier,
		buttonBorderWidth: 3,
		buttonFillLight: ICE.frost,
		buttonTextLight: ICE.night,
		buttonDisabled: 0x2b3f55,
		accent: ICE.gold,
		spinFill: 0x0e6a9c,
	});

const FONT_FILES = [
	{ family: FONT_UI, url: '/fonts/Cinzel-Variable.woff2', weight: '400 900' },
	{ family: FONT_TITLE, url: '/fonts/CinzelDecorative-700.woff2', weight: '700' },
	{ family: FONT_TITLE, url: '/fonts/CinzelDecorative-900.woff2', weight: '900' },
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
