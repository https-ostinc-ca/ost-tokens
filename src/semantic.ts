import { primitives as p } from './primitives';

// Semantic color roles — the only colors components should reference.
// Dark is the default theme (marketing sites); light serves portals and any
// page that opts in with [data-theme="light"].

export const dark = {
  bg: p.black,
  surface: p.ink,
  surfaceRaised: p.gray[900],
  border: p.gray[900],
  borderStrong: p.gray[700],
  text: p.white,
  textMid: '#b3b3b3', // white @ 70% on black, flattened so Tailwind alpha works
  textDim: p.gray[500], // white @ 50% on black
  action: p.orange,
  actionHover: p.orangeLight,
  onAction: p.black, // white on orange is only 3.4:1 — buttons use black text
  brand: p.green, // logo + large display text only (3.0:1 on black)
  signal: p.signal,
  focus: p.signal,
  security: p.division.security.onDark,
  network: p.division.network.onDark,
  smarthome: p.division.smarthome.onDark,
  digital: p.division.digital.onDark,
} as const;

export const light = {
  bg: p.white,
  surface: p.gray[50],
  surfaceRaised: p.white,
  border: p.gray[200],
  borderStrong: p.gray[400],
  text: p.ink,
  textMid: p.gray[700],
  textDim: '#6b6b6b',
  action: p.orange,
  actionHover: p.orangeDark,
  onAction: p.black,
  brand: p.green,
  signal: p.signalDeep,
  focus: p.signalDeep,
  security: p.division.security.light,
  network: p.division.network.light,
  smarthome: p.division.smarthome.light,
  digital: p.division.digital.light,
} satisfies Record<keyof typeof dark, string>;

export type ColorRole = keyof typeof dark;
export const colorRoles = Object.keys(dark) as ColorRole[];
