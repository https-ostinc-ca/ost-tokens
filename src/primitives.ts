// Raw palette. Components never import these directly — use the semantic
// roles in semantic.ts (or the Tailwind classes / CSS vars built from them).
//
// Source: pixel-sampled from the live Wix site (see home-page/src/tokens.js
// history), plus `signal` — a bright green for glow/icons/small text on dark,
// because brand green #006837 only reaches 3.0:1 on black.
// Swap for Tommy's confirmed brand file when it arrives — this file only.

export const primitives = {
  black: '#000000',
  ink: '#121416',
  white: '#ffffff',

  orange: '#f05a24',
  orangeLight: '#ff7440',
  orangeDark: '#d94b18',

  green: '#006837',
  signal: '#22c55e',
  signalDeep: '#15803d',

  gray: {
    50: '#f8f8f8',
    100: '#efefef',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a4a4a4',
    500: '#808080',
    600: '#5c5c5c',
    700: '#3a3a3a',
    800: '#262626',
    900: '#1a1a1a',
  },

  // Division accents — working values. `onDark` variants are lifted so
  // eyebrow-size text still passes 4.5:1 on black.
  division: {
    security: { light: '#3b5bdb', onDark: '#748ffc' },
    network: { light: '#237a36', onDark: '#2f9e44' },
    smarthome: { light: '#b35c00', onDark: '#e67700' },
    digital: { light: '#7048e8', onDark: '#9775fa' },
  },
} as const;

export type Division = keyof typeof primitives.division;
