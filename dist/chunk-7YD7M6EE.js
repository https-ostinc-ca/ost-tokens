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

// src/scale.ts
var fonts = {
  sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  googleFontsHref: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
};
var fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
  heavy: 800
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

// src/color.ts
function cssVar(role) {
  return `--ost-${role.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;
}
function hexToChannels(hex) {
  const n = parseInt(hex.slice(1), 16);
  return `${n >> 16 & 255} ${n >> 8 & 255} ${n & 255}`;
}
function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [n >> 16 & 255, n >> 8 & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrastRatio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export {
  primitives,
  dark,
  light,
  colorRoles,
  fonts,
  fontWeight,
  typeScale,
  radius,
  layout,
  cssVar,
  hexToChannels,
  contrastRatio
};
