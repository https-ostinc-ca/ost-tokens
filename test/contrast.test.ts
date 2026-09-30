import { describe, expect, it } from 'vitest';
import { contrastRatio, dark, light } from '../src';

// Every pairing the style guide allows, with the WCAG level it must meet.
// 4.5 = body/small text, 3 = large text (≥24px, or ≥19px bold) and UI glyphs.
const TEXT = 4.5;
const LARGE = 3;

const themes = { dark, light } as const;

describe.each(Object.entries(themes))('%s theme', (_, t) => {
  const pairs: [string, string, string, number][] = [
    ['text on bg', t.text, t.bg, TEXT],
    ['text on surface', t.text, t.surface, TEXT],
    ['textMid on bg', t.textMid, t.bg, TEXT],
    ['textMid on surface', t.textMid, t.surface, TEXT],
    ['textDim on bg', t.textDim, t.bg, TEXT],
    ['onAction on action', t.onAction, t.action, TEXT],
    ['onAction on actionHover', t.onAction, t.actionHover, TEXT],
    ['action as text on bg', t.action, t.bg, LARGE],
    ['signal on bg', t.signal, t.bg, TEXT],
    ['focus ring on bg', t.focus, t.bg, LARGE],
    ['brand on bg (large only)', t.brand, t.bg, LARGE],
    ['borderStrong on bg', t.borderStrong, t.bg, 1.5],
    ['security on bg', t.security, t.bg, TEXT],
    ['network on bg', t.network, t.bg, TEXT],
    ['smarthome on bg', t.smarthome, t.bg, TEXT],
    ['digital on bg', t.digital, t.bg, TEXT],
  ];

  it.each(pairs)('%s ≥ required ratio', (_label, fg, bg, min) => {
    expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(min);
  });
});

it('white text on orange is documented as failing (guards the onAction rule)', () => {
  expect(contrastRatio('#ffffff', dark.action)).toBeLessThan(TEXT);
});
