import {
  colorRoles,
  cssVar,
  fonts,
  layout,
  radius,
  typeScale
} from "./chunk-7YD7M6EE.js";

// src/tailwind-preset.ts
var kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
var colors = Object.fromEntries(colorRoles.map((role) => [kebab(role), `rgb(var(${cssVar(role)}) / <alpha-value>)`]));
var fontSize = Object.fromEntries(
  Object.entries(typeScale).map(([name, t]) => [
    kebab(name),
    [t.size, { lineHeight: t.lineHeight, fontWeight: String(t.weight), ..."letterSpacing" in t ? { letterSpacing: t.letterSpacing } : {} }]
  ])
);
var preset = {
  theme: {
    extend: {
      colors,
      fontFamily: { sans: [...fonts.sans] },
      fontSize,
      borderRadius: { ...radius },
      maxWidth: { page: layout.maxWidth },
      spacing: { nav: layout.navHeight }
    }
  }
};
var tailwind_preset_default = preset;
export {
  tailwind_preset_default as default
};
