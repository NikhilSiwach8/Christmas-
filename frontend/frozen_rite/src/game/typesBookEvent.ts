import type { BetType } from 'rgs-requests';

import type { SymbolName, RawSymbol, GameType, Position } from './types';

// book events shared with scatter game
type BookEventReveal = {
	index: number;
	type: 'reveal';
	board: RawSymbol[][];
	paddingPositions: number[];
	anticipation: number[];
	gameType: GameType;
};

type BookEventSetTotalWin = {
	index: number;
	type: 'setTotalWin';
	amount: number;
};

type BookEventFinalWin = {
	index: number;
	type: 'finalWin';
	amount: number;
};

type BookEventFreeSpinTrigger = {
	index: number;
	type: 'freeSpinTrigger';
	totalFs: number;
	positions: Position[];
};

type BookEventUpdateFreeSpin = {
	index: number;
	type: 'updateFreeSpin';
	amount: number;
	total: number;
};

type BookEventSetWin = {
	index: number;
	type: 'setWin';
	amount: number;
	winLevel: number;
};

type BookEventFreeSpinEnd = {
	index: number;
	type: 'freeSpinEnd';
	amount: number;
	winLevel: number;
};

type BookEventWinInfo = {
	index: number;
	type: 'winInfo';
	totalWin: number;
	wins: {
		symbol: SymbolName;
		kind: number;
		win: number;
		positions: Position[];
		meta: {
			ways: number;
			globalMult: number;
			winWithoutMult: number;
			symbolMult: number;
		};
	}[];
};

type BookEventFreeSpinRetrigger = {
	index: number;
	type: 'freeSpinRetrigger';
	totalFs: number;
	positions: Position[];
};

type BookEventWincap = {
	index: number;
	type: 'wincap';
	amount: number;
};

type BookEventUpdateGlobalMult = {
	index: number;
	type: 'updateGlobalMult';
	globalMult: number;
};

// Frozen Rite custom events
type BookEventRiteAwaken = {
	index: number;
	type: 'riteAwaken';
	rite: 'blizzard' | 'whiteout' | 'glacier' | 'absolute_zero';
	purchased: boolean;
	startMult: number;
	wheelLevel: number;
	startSpins: number;
	higherWins: boolean;
	convertLows: boolean;
};

type BookEventAuroraMult = {
	index: number;
	type: 'auroraMult';
	mult: number;
};

// Symbol Removal: every `loser` symbol turns into `winner`
type BookEventSymbolSacrifice = {
	index: number;
	type: 'symbolSacrifice';
	source: 'scatter' | 'wheel' | 'hollow';
	loser: string;
	winner: string;
	positions: Position[];
	persistent: boolean;
	extraSpins: number;
};

type BookEventFrostWheel = {
	index: number;
	type: 'frostWheel';
	level: number;
	kind: 'mult' | 'extra_sacrifice' | 'chosen_offering' | 'dark_surge' | 'blood_moon' | 'frenzy';
	value: number;
	labels: { kind: string; value: number }[];
	resultIndex: number;
	newLevel: number;
	multAfter: number;
};

// customised
type BookEventCreateBonusSnapshot = {
	index: number;
	type: 'createBonusSnapshot';
	bookEvents: BookEvent[];
};

export type BookEvent =
	| BookEventReveal
	| BookEventWinInfo
	| BookEventSetTotalWin
	| BookEventFreeSpinTrigger
	| BookEventUpdateFreeSpin
	| BookEventCreateBonusSnapshot
	| BookEventFinalWin
	| BookEventSetWin
	| BookEventFreeSpinEnd
	| BookEventFreeSpinRetrigger
	| BookEventWincap
	| BookEventUpdateGlobalMult
	| BookEventRiteAwaken
	| BookEventAuroraMult
	| BookEventFrostWheel
	| BookEventSymbolSacrifice
	// customised
	| BookEventCreateBonusSnapshot;

export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };
