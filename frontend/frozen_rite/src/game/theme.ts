// Frozen Rite ice palette (art placeholders use these until final assets land)
export const ICE = {
	// light snowfield look: ink-cartoon on a pale ground (see docs/frozen-rite-asset-prompts.txt)
	bone: 0xf3efe6, // main background
	paper: 0xe9e2d0, // cards, plaques
	ink: 0x14141c, // every outline
	night: 0x0e1b2e, // UI bar / dark cards
	deep: 0x1f5fa8,
	glacier: 0x3fc8f4, // main accent
	frost: 0xdff6ff,
	aurora: 0x8f6bff,
	gold: 0xf2c14e, // rare
	danger: 0xff5a6e, // wheel pointer only
};

export type RiteName = 'blizzard' | 'whiteout';

export const RITE_INFO: Record<RiteName, { title: string; subtitle: string; color: number }> = {
	blizzard: { title: 'BLIZZARD RITE', subtitle: 'Long storm - multiplier climbs +1 per win', color: ICE.glacier },
	whiteout: { title: 'WHITEOUT RITE', subtitle: 'Short, ferocious - multiplier climbs +2 per win', color: ICE.aurora },
};

// Frost Wheel segment colours cycle through the palette
export const WHEEL_COLORS = [ICE.glacier, ICE.deep, ICE.aurora, ICE.frost];

// Frozen Rite overlay components size themselves from this (independent of the board symbol size)
export const UI_UNIT = 120;
