import { colorRoles } from './semantic';
import { cssVar } from './color';
import { fonts, typeScale, radius, layout } from './scale';

// Tailwind 3 preset. Colors resolve through CSS vars (from tokens.css) so
// dark/light theming and opacity modifiers (`bg-action/20`) both work.
// Usage: `presets: [require('@ost/tokens/tailwind-preset')]` and import
// '@ost/tokens/tokens.css' once at the app root.

const colors = Object.fromEntries(colorRoles.map((role) => [role, `rgb(var(${cssVar(role)}) / <alpha-value>)`]));

const fontSize = Object.fromEntries(
  Object.entries(typeScale).map(([name, t]) => [
    name,
    [t.size, { lineHeight: t.lineHeight, fontWeight: String(t.weight), ...('letterSpacing' in t ? { letterSpacing: t.letterSpacing } : {}) }],
  ]),
);

const preset = {
  theme: {
    extend: {
      colors,
      fontFamily: { sans: [...fonts.sans] },
      fontSize,
      borderRadius: { ...radius },
      maxWidth: { page: layout.maxWidth },
      spacing: { nav: layout.navHeight },
    },
  },
};

export default preset;
