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

export type RiteName = 'blizzard' | 'whiteout' | 'glacier' | 'absolute_zero';

export const RITE_INFO: Record<RiteName, { title: string; subtitle: string; color: number; emblem: 'blizzard' | 'whiteout'; bg: 'blizzard' | 'whiteout' }> = {
	blizzard: { title: 'BLIZZARD RITE', subtitle: '3 scatters - x2 multiplier - wheel level 1', color: ICE.glacier, emblem: 'blizzard', bg: 'blizzard' },
	whiteout: { title: 'WHITEOUT RITE', subtitle: '2 red + blue scatter - x5 - wheel level 2', color: ICE.aurora, emblem: 'whiteout', bg: 'whiteout' },
	glacier: { title: 'GLACIER RITE', subtitle: '2 red + purple scatter - x10 - the higher symbol always wins', color: ICE.deep, emblem: 'blizzard', bg: 'blizzard' },
	absolute_zero: { title: 'ABSOLUTE ZERO', subtitle: 'x20 - every low symbol is converted', color: ICE.aurora, emblem: 'whiteout', bg: 'whiteout' },
};

// Frost Wheel segment colours cycle through the palette
export const WHEEL_COLORS = [ICE.glacier, ICE.deep, ICE.aurora, ICE.frost];

// Frozen Rite overlay components size themselves from this (independent of the board symbol size)
export const UI_UNIT = 120;
