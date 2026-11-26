// Procedural ink-cartoon drawings (placeholder art until the generated assets land).
// Everything: thick ink outline, flat fills, one highlight. Palette from ./theme (ICE).
import type { Graphics } from 'pixi.js';

import { ICE } from './theme';

export const seeded = (seed: number) => {
	let s = seed % 2147483647;
	if (s <= 0) s += 2147483646;
	return () => (s = (s * 16807) % 2147483647) / 2147483647;
};

type Pt = [number, number];

/** Stroke a polyline twice: thick ink, then the coloured chalk on top. */
export const inkStroke = (g: Graphics, pts: Pt[], width: number, color: number, ink = true) => {
	const path = () => {
		g.moveTo(pts[0][0], pts[0][1]);
		for (const [x, y] of pts.slice(1)) g.lineTo(x, y);
	};
	if (ink) {
		path();
		g.stroke({ color: ICE.ink, width: width + 4, cap: 'round', join: 'round' });
	}
	path();
	g.stroke({ color, width, cap: 'round', join: 'round' });
};

export const wobble = (x0: number, y0: number, x1: number, y1: number, jitter: number, rnd: () => number, n = 10): Pt[] => {
	const pts: Pt[] = [];
	for (let i = 0; i <= n; i++) {
		const t = i / n;
		const edge = i === 0 || i === n ? 0 : 1;
		pts.push([x0 + (x1 - x0) * t + (rnd() - 0.5) * jitter * edge, y0 + (y1 - y0) * t + (rnd() - 0.5) * jitter * edge]);
	}
	return pts;
};

/** Frost Eye Sigil: six-arm snowflake with an almond eye in the middle. */
export const drawSigil = (g: Graphics, r: number, fill = ICE.frost, iris = ICE.glacier) => {
	for (let k = 0; k < 6; k++) {
		const a = (k * Math.PI) / 3 - Math.PI / 2;
		const ex = Math.cos(a) * r;
		const ey = Math.sin(a) * r;
		inkStroke(g, [[0, 0], [ex, ey]], r * 0.14, fill);
		for (const side of [-1, 1]) {
			const bx = Math.cos(a) * r * 0.62;
			const by = Math.sin(a) * r * 0.62;
			const ba = a + side * 0.75;
			inkStroke(g, [[bx, by], [bx + Math.cos(ba) * r * 0.3, by + Math.sin(ba) * r * 0.3]], r * 0.1, fill);
		}
	}
	g.ellipse(0, 0, r * 0.5, r * 0.3).fill({ color: ICE.paper }).stroke({ color: ICE.ink, width: r * 0.08 });
	g.ellipse(0, 0, r * 0.22, r * 0.26).fill({ color: iris }).stroke({ color: ICE.ink, width: r * 0.05 });
	g.ellipse(0, 0, r * 0.06, r * 0.2).fill({ color: ICE.ink });
	g.circle(-r * 0.07, -r * 0.08, r * 0.045).fill({ color: 0xffffff });
};

/** Little snowball acolyte in a knit hood (flanks the board). */
export const drawAcolyte = (g: Graphics, r: number, hood = ICE.deep) => {
	g.ellipse(0, r * 1.05, r * 0.95, r * 0.22).fill({ color: ICE.ink, alpha: 0.25 });
	g.circle(0, 0, r).fill({ color: ICE.frost }).stroke({ color: ICE.ink, width: r * 0.1 });
	g.poly([-r * 0.95, -r * 0.1, -r * 0.1, -r * 1.9, r * 0.2, -r * 1.75, r * 0.95, -r * 0.1])
		.fill({ color: hood })
		.stroke({ color: ICE.ink, width: r * 0.1, join: 'round' });
	g.ellipse(0, -r * 0.2, r * 0.62, r * 0.5).fill({ color: ICE.night }).stroke({ color: ICE.ink, width: r * 0.06 });
	for (const sx of [-1, 1]) {
		g.ellipse(sx * r * 0.27, -r * 0.2, r * 0.13, r * 0.18).fill({ color: ICE.glacier });
		g.circle(sx * r * 0.25, -r * 0.27, r * 0.05).fill({ color: 0xffffff });
		g.circle(sx * r * 0.5, r * 0.55, r * 0.2).fill({ color: ICE.deep }).stroke({ color: ICE.ink, width: r * 0.07 });
	}
	g.roundRect(-r * 0.9, r * 0.3, r * 1.8, r * 0.3, r * 0.15).fill({ color: ICE.glacier }).stroke({ color: ICE.ink, width: r * 0.07 });
};

/** Torn hanging banner with the sigil. Anchored at the pole top-centre. */
export const drawBanner = (g: Graphics, w: number, h: number) => {
	g.roundRect(-w * 0.62, -h * 0.04, w * 1.24, h * 0.05, 4).fill({ color: ICE.ink });
	g.rect(-w * 0.03, -h * 0.04, w * 0.06, h * 1.15).fill({ color: ICE.ink });
	g.poly([-w / 2, 0, w / 2, 0, w / 2, h, w * 0.2, h * 0.88, 0, h, -w * 0.2, h * 0.9, -w / 2, h])
		.fill({ color: ICE.deep })
		.stroke({ color: ICE.ink, width: 5, join: 'round' });
	g.poly([-w / 2 + 6, 8, w / 2 - 6, 8, w / 2 - 6, h * 0.62, -w / 2 + 6, h * 0.62]).stroke({ color: ICE.frost, width: 2, alpha: 0.6 });
	g.circle(0, h * 0.36, w * 0.3).fill({ color: ICE.night, alpha: 0.35 });
};

export const drawLantern = (g: Graphics, s: number) => {
	g.ellipse(0, s * 1.02, s * 0.7, s * 0.14).fill({ color: ICE.ink, alpha: 0.25 });
	g.roundRect(-s * 0.5, s * 0.78, s, s * 0.22, 4).fill({ color: ICE.paper }).stroke({ color: ICE.ink, width: 4 });
	g.roundRect(-s * 0.42, s * 0.0, s * 0.84, s * 0.8, 8).fill({ color: ICE.frost, alpha: 0.9 }).stroke({ color: ICE.ink, width: 4 });
	g.poly([0, s * 0.12, s * 0.2, s * 0.5, 0, s * 0.72, -s * 0.2, s * 0.5]).fill({ color: ICE.glacier }).stroke({ color: ICE.ink, width: 3 });
	g.ellipse(0, -s * 0.05, s * 0.5, s * 0.16).fill({ color: 0xffffff }).stroke({ color: ICE.ink, width: 4 });
};

export const drawBasin = (g: Graphics, w: number) => {
	g.ellipse(0, w * 0.5, w * 0.55, w * 0.12).fill({ color: ICE.ink, alpha: 0.25 });
	g.roundRect(-w * 0.32, w * 0.15, w * 0.64, w * 0.32, 6).fill({ color: ICE.paper }).stroke({ color: ICE.ink, width: 4 });
	g.ellipse(0, w * 0.1, w * 0.5, w * 0.16).fill({ color: ICE.night }).stroke({ color: ICE.ink, width: 4 });
	g.poly([0, -w * 0.22, w * 0.12, w * 0.05, -w * 0.12, w * 0.05]).fill({ color: ICE.glacier }).stroke({ color: ICE.ink, width: 3 });
};

export const drawChain = (g: Graphics, length: number, link = 22) => {
	for (let y = 0, i = 0; y < length; y += link * 0.8, i++) {
		if (i % 2 === 0) g.ellipse(0, y, link * 0.38, link * 0.6).stroke({ color: ICE.ink, width: 6 });
		else g.ellipse(0, y, link * 0.14, link * 0.6).stroke({ color: ICE.ink, width: 6 });
		if (i % 2 === 0) g.ellipse(0, y, link * 0.38, link * 0.6).stroke({ color: 0x9fb4c8, width: 3 });
	}
};

/** Scalloped snow-drift hills across the bottom of the canvas. */
export const drawHills = (g: Graphics, width: number, height: number, tone: number) => {
	const rnd = seeded(7);
	for (let i = 0; i < 9; i++) {
		const cx = (i / 8) * width + (rnd() - 0.5) * 80;
		const rw = width * (0.16 + rnd() * 0.08);
		const rh = height * (0.22 + rnd() * 0.12);
		g.ellipse(cx, height * (0.62 + rnd() * 0.1), rw, rh).fill({ color: tone, alpha: 0.6 });
	}
};
