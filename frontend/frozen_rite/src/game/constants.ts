import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 90; // 4 rows x 90 = same board height as the sample's 3 rows x 120

export const REEL_PADDING = 0.53;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[{ name: 'H1' }, { name: 'H1' }, { name: 'L4' }, { name: 'L4' }, { name: 'L3' }, { name: 'L4' }],
	[{ name: 'H3' }, { name: 'H4' }, { name: 'L1' }, { name: 'L2' }, { name: 'L4' }, { name: 'H2' }],
	[{ name: 'L2' }, { name: 'L2' }, { name: 'L3' }, { name: 'H5' }, { name: 'H2' }, { name: 'H3' }],
	[{ name: 'L3' }, { name: 'H2' }, { name: 'H2' }, { name: 'H5' }, { name: 'L1' }, { name: 'L4' }],
	[{ name: 'L3' }, { name: 'H2' }, { name: 'L2' }, { name: 'L2' }, { name: 'L4' }, { name: 'H1' }],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4', 'H5'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelFallInDelay: 80,
	reelPaddingMultiplierNormal: 1.25,
	reelPaddingMultiplierAnticipated: 18,
	reelFallOutDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 3.5,
	symbolFallInInterval: 30,
	symbolFallInBounceSpeed: 0.15,
	symbolFallInBounceSizeMulti: 0.5,
	symbolFallOutSpeed: 3.5,
	symbolFallOutInterval: 20,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 7,
	symbolFallInInterval: 0,
	symbolFallInBounceSpeed: 0.3,
	symbolFallInBounceSizeMulti: 0.25,
	symbolFallOutSpeed: 7,
	symbolFallOutInterval: 0,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

// Frozen Rite: every symbol is one generated sprite used for all states (win = bounce, drawn in SymbolSprite).
// Ratios are relative to SYMBOL_SIZE; wild/scatter are drawn slightly larger than a cell, like hero symbols.
const sprite = (key: string, w = 1.0, h = 1.0) => ({
	type: 'sprite' as const,
	assetKey: key,
	sizeRatios: { width: w, height: h },
});
const allStates = (key: string, w = 1.0, h = 1.0, exploded?: ReturnType<typeof sprite>) => {
	const base = sprite(key, w, h);
	return {
		explosion: base,
		win: base,
		postWinStatic: exploded ?? base,
		static: base,
		spin: base,
		land: base,
	};
};

export const SYMBOL_INFO_MAP = {
	H1: allStates('sym_h1'),
	H2: allStates('sym_h2'),
	H3: allStates('sym_h3'),
	H4: allStates('sym_h4'),
	H5: allStates('sym_h5'),
	L1: allStates('sym_l1', 0.92, 0.92),
	L2: allStates('sym_l2', 0.92, 0.92),
	L3: allStates('sym_l3', 0.92, 0.92),
	L4: allStates('sym_l4', 0.92, 0.92),
	// wild art is 3:4 portrait; after a win it leaves the cracked ice ring behind
	W: allStates('sym_w', 1.0, 1.33, sprite('sym_w_exploded', 1.0, 1.33)),
	// scatter is drawn oversized so it pops out of its cell
	S: allStates('sym_s', 1.15, 1.15),
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
