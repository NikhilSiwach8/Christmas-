// Frozen Rite ice palette (art placeholders use these until final assets land)
export const ICE = {
	night: 0x061226,
	deep: 0x0b2a4a,
	glacier: 0x5fd4ff,
	frost: 0xdff6ff,
	aurora: 0x9d7bff,
	gold: 0xffe9a8,
	danger: 0xff6b8a,
};

export type RiteName = 'blizzard' | 'whiteout';

export const RITE_INFO: Record<RiteName, { title: string; subtitle: string; color: number }> = {
	blizzard: { title: 'BLIZZARD RITE', subtitle: 'Long storm - multiplier climbs +1 per win', color: ICE.glacier },
	whiteout: { title: 'WHITEOUT RITE', subtitle: 'Short, ferocious - multiplier climbs +2 per win', color: ICE.aurora },
};

// Frost Wheel segment colours cycle through the palette
export const WHEEL_COLORS = [ICE.deep, ICE.glacier, ICE.aurora, ICE.frost];

// Frozen Rite overlay components size themselves from this (independent of the board symbol size)
export const UI_UNIT = 120;
