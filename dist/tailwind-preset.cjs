"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tailwind-preset.ts
var tailwind_preset_exports = {};
__export(tailwind_preset_exports, {
  default: () => tailwind_preset_default
});
module.exports = __toCommonJS(tailwind_preset_exports);

// src/primitives.ts
var primitives = {
  black: "#000000",
  ink: "#121416",
  white: "#ffffff",
  orange: "#f05a24",
  orangeLight: "#ff7440",
  orangeDark: "#d94b18",
  green: "#006837",
  signal: "#22c55e",
  signalDeep: "#15803d",
  gray: {
    50: "#f8f8f8",
    100: "#efefef",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a4a4a4",
    500: "#808080",
    600: "#5c5c5c",
    700: "#3a3a3a",
    800: "#262626",
    900: "#1a1a1a"
  },
  // Division accents — working values. `onDark` variants are lifted so
  // eyebrow-size text still passes 4.5:1 on black.
  division: {
    security: { light: "#3b5bdb", onDark: "#748ffc" },
    network: { light: "#237a36", onDark: "#2f9e44" },
    smarthome: { light: "#b35c00", onDark: "#e67700" },
    digital: { light: "#7048e8", onDark: "#9775fa" }
  }
};

// src/semantic.ts
var dark = {
  bg: primitives.black,
  surface: primitives.ink,
  surfaceRaised: primitives.gray[900],
  border: primitives.gray[900],
  borderStrong: primitives.gray[700],
  text: primitives.white,
  textMid: "#b3b3b3",
  // white @ 70% on black, flattened so Tailwind alpha works
  textDim: primitives.gray[500],
  // white @ 50% on black
  action: primitives.orange,
  actionHover: primitives.orangeLight,
  onAction: primitives.black,
  // white on orange is only 3.4:1 — buttons use black text
  brand: primitives.green,
  // logo + large display text only (3.0:1 on black)
  signal: primitives.signal,
  focus: primitives.signal,
  security: primitives.division.security.onDark,
  network: primitives.division.network.onDark,
  smarthome: primitives.division.smarthome.onDark,
  digital: primitives.division.digital.onDark
};
var light = {
  bg: primitives.white,
  surface: primitives.gray[50],
  surfaceRaised: primitives.white,
  border: primitives.gray[200],
  borderStrong: primitives.gray[400],
  text: primitives.ink,
  textMid: primitives.gray[700],
  textDim: "#6b6b6b",
  action: primitives.orange,
  actionHover: primitives.orangeDark,
  onAction: primitives.black,
  brand: primitives.green,
  signal: primitives.signalDeep,
  focus: primitives.signalDeep,
  security: primitives.division.security.light,
  network: primitives.division.network.light,
  smarthome: primitives.division.smarthome.light,
  digital: primitives.division.digital.light
};
var colorRoles = Object.keys(dark);

// src/color.ts
function cssVar(role) {
  return `--ost-${role.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;
}

// src/scale.ts
var fonts = {
  sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  googleFontsHref: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
};
var typeScale = {
  display: { size: "48px", lineHeight: "1.08", weight: 800, letterSpacing: "-0.02em" },
  h1: { size: "32px", lineHeight: "1.15", weight: 700, letterSpacing: "-0.02em" },
  h2: { size: "28px", lineHeight: "1.2", weight: 700, letterSpacing: "-0.02em" },
  h3: { size: "20px", lineHeight: "1.2", weight: 700, letterSpacing: "-0.01em" },
  title: { size: "16px", lineHeight: "1.3", weight: 700 },
  body: { size: "15px", lineHeight: "1.65", weight: 400 },
  bodySm: { size: "13px", lineHeight: "1.65", weight: 400 },
  caption: { size: "12px", lineHeight: "1.5", weight: 400 },
  nav: { size: "13px", lineHeight: "1", weight: 700, letterSpacing: "0.08em" },
  eyebrow: { size: "11px", lineHeight: "1.4", weight: 700, letterSpacing: "0.1em", uppercase: true },
  button: { size: "11px", lineHeight: "1", weight: 800, letterSpacing: "0.08em", uppercase: true }
};
var radius = {
  sm: "3px",
  // buttons, inputs, badges
  md: "6px"
  // cards, panels
};
var layout = {
  navHeight: "52px",
  maxWidth: "1280px",
  gutter: { mobile: "28px", tablet: "48px" },
  sectionPadding: "80px",
  cardGap: "24px"
};

// src/tailwind-preset.ts
var colors = Object.fromEntries(colorRoles.map((role) => [role, `rgb(var(${cssVar(role)}) / <alpha-value>)`]));
var fontSize = Object.fromEntries(
  Object.entries(typeScale).map(([name, t]) => [
    name,
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
