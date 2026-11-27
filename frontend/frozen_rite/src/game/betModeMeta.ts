import type { BetModeMeta } from 'state-shared';

const noAssets = { icon: '', dialogImage: '', dialogVolatility: '', volatility: '', button: '' };

/** Local/dev bet-mode metadata for Frozen Rite. In production the Stake platform supplies its own meta. */
export const FROZEN_RITE_BET_MODE_META: BetModeMeta = {
	BASE: {
		mode: 'BASE',
		costMultiplier: 1,
		type: 'default',
		parent: '',
		children: '',
		maxWin: 10000,
		assets: noAssets,
		text: { title: '', dialog: '', button: '', tickerIdle: '', tickerSpin: '' },
	},
	BONUS_BET: {
		mode: 'BONUS_BET',
		costMultiplier: 1.25,
		type: 'activate',
		parent: '',
		children: '',
		maxWin: 10000,
		assets: { ...noAssets, dialogImage: '/art/menu/aurora.webp' },
		text: {
			title: 'AURORA BET',
			dialog:
				'Raise your bet by 25% to wake the Frozen Codex more often. Features trigger roughly twice as frequently. Stays active until disabled.',
			description: 'Free Spins trigger more often.',
			button: 'ACTIVATE',
			betAmountLabel: 'AURORA BET',
			tickerIdle: 'AURORA BET IS ACTIVE',
			tickerSpin: 'GOOD LUCK',
		},
	},
	BUY_BLIZZARD: {
		mode: 'BUY_BLIZZARD',
		costMultiplier: 100,
		type: 'buy',
		parent: '',
		children: '',
		maxWin: 10000,
		assets: { ...noAssets, dialogImage: '/art/menu/blizzard.webp' },
		text: {
			title: 'BLIZZARD RITE',
			dialog:
				'Triggers the BLIZZARD RITE free spins for 100x your bet. 10-16 spins; the multiplier starts at x1 and rises by 1 with every winning spin (up to x20). The Frost Wheel spins at the end.',
			description: 'Long storm, steady multiplier climb.',
			button: 'BUY',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'BLIZZARD RITE ACTIVATED',
		},
	},
	BUY_WHITEOUT: {
		mode: 'BUY_WHITEOUT',
		costMultiplier: 150,
		type: 'buy',
		parent: '',
		children: '',
		maxWin: 10000,
		assets: { ...noAssets, dialogImage: '/art/menu/whiteout.webp' },
		text: {
			title: 'WHITEOUT RITE',
			dialog:
				'Triggers the WHITEOUT RITE free spins for 150x your bet. 6-10 spins; the multiplier starts at x2 and rises by 2 with every winning spin (up to x30). The Frost Wheel spins at the end.',
			description: 'Short, ferocious, high multipliers.',
			button: 'BUY',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'WHITEOUT RITE ACTIVATED',
		},
	},
};
