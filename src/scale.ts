// Typography, radius and layout scales shared by every OST frontend.

export const fonts = {
  sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  googleFontsHref: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap',
} as const;

// Marketing sites use 400 / 700 / 800 only. `medium` exists for dense product UIs.
export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
  heavy: 800,
} as const;

type TypeRole = { size: string; lineHeight: string; weight: number; letterSpacing?: string; uppercase?: boolean };

export const typeScale = {
  display: { size: '48px', lineHeight: '1.08', weight: 800, letterSpacing: '-0.02em' },
  h1: { size: '32px', lineHeight: '1.15', weight: 700, letterSpacing: '-0.02em' },
  h2: { size: '28px', lineHeight: '1.2', weight: 700, letterSpacing: '-0.02em' },
  h3: { size: '20px', lineHeight: '1.2', weight: 700, letterSpacing: '-0.01em' },
  title: { size: '16px', lineHeight: '1.3', weight: 700 },
  body: { size: '15px', lineHeight: '1.65', weight: 400 },
  bodySm: { size: '13px', lineHeight: '1.65', weight: 400 },
  caption: { size: '12px', lineHeight: '1.5', weight: 400 },
  nav: { size: '13px', lineHeight: '1', weight: 700, letterSpacing: '0.08em' },
  eyebrow: { size: '11px', lineHeight: '1.4', weight: 700, letterSpacing: '0.1em', uppercase: true },
  button: { size: '11px', lineHeight: '1', weight: 800, letterSpacing: '0.08em', uppercase: true },
} as const satisfies Record<string, TypeRole>;

export const radius = {
  sm: '3px', // buttons, inputs, badges
  md: '6px', // cards, panels
} as const;

export const layout = {
  navHeight: '52px',
  maxWidth: '1280px',
  gutter: { mobile: '28px', tablet: '48px' },
  sectionPadding: '80px',
  cardGap: '24px',
} as const;
