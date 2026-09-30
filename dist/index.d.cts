declare const primitives: {
    readonly black: "#000000";
    readonly ink: "#121416";
    readonly white: "#ffffff";
    readonly orange: "#f05a24";
    readonly orangeLight: "#ff7440";
    readonly orangeDark: "#d94b18";
    readonly green: "#006837";
    readonly signal: "#22c55e";
    readonly signalDeep: "#15803d";
    readonly gray: {
        readonly 50: "#f8f8f8";
        readonly 100: "#efefef";
        readonly 200: "#e5e5e5";
        readonly 300: "#d4d4d4";
        readonly 400: "#a4a4a4";
        readonly 500: "#808080";
        readonly 600: "#5c5c5c";
        readonly 700: "#3a3a3a";
        readonly 800: "#262626";
        readonly 900: "#1a1a1a";
    };
    readonly division: {
        readonly security: {
            readonly light: "#3b5bdb";
            readonly onDark: "#748ffc";
        };
        readonly network: {
            readonly light: "#237a36";
            readonly onDark: "#2f9e44";
        };
        readonly smarthome: {
            readonly light: "#b35c00";
            readonly onDark: "#e67700";
        };
        readonly digital: {
            readonly light: "#7048e8";
            readonly onDark: "#9775fa";
        };
    };
};
type Division = keyof typeof primitives.division;

declare const dark: {
    readonly bg: "#000000";
    readonly surface: "#121416";
    readonly surfaceRaised: "#1a1a1a";
    readonly border: "#1a1a1a";
    readonly borderStrong: "#3a3a3a";
    readonly text: "#ffffff";
    readonly textMid: "#b3b3b3";
    readonly textDim: "#808080";
    readonly action: "#f05a24";
    readonly actionHover: "#ff7440";
    readonly onAction: "#000000";
    readonly brand: "#006837";
    readonly signal: "#22c55e";
    readonly focus: "#22c55e";
    readonly security: "#748ffc";
    readonly network: "#2f9e44";
    readonly smarthome: "#e67700";
    readonly digital: "#9775fa";
};
declare const light: {
    bg: "#ffffff";
    surface: "#f8f8f8";
    surfaceRaised: "#ffffff";
    border: "#e5e5e5";
    borderStrong: "#a4a4a4";
    text: "#121416";
    textMid: "#3a3a3a";
    textDim: string;
    action: "#f05a24";
    actionHover: "#d94b18";
    onAction: "#000000";
    brand: "#006837";
    signal: "#15803d";
    focus: "#15803d";
    security: "#3b5bdb";
    network: "#237a36";
    smarthome: "#b35c00";
    digital: "#7048e8";
};
type ColorRole = keyof typeof dark;
declare const colorRoles: ColorRole[];

declare const fonts: {
    readonly sans: readonly ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"];
    readonly googleFontsHref: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap";
};
declare const fontWeight: {
    readonly regular: 400;
    readonly medium: 500;
    readonly bold: 700;
    readonly heavy: 800;
};
declare const typeScale: {
    readonly display: {
        readonly size: "48px";
        readonly lineHeight: "1.08";
        readonly weight: 800;
        readonly letterSpacing: "-0.02em";
    };
    readonly h1: {
        readonly size: "32px";
        readonly lineHeight: "1.15";
        readonly weight: 700;
        readonly letterSpacing: "-0.02em";
    };
    readonly h2: {
        readonly size: "28px";
        readonly lineHeight: "1.2";
        readonly weight: 700;
        readonly letterSpacing: "-0.02em";
    };
    readonly h3: {
        readonly size: "20px";
        readonly lineHeight: "1.2";
        readonly weight: 700;
        readonly letterSpacing: "-0.01em";
    };
    readonly title: {
        readonly size: "16px";
        readonly lineHeight: "1.3";
        readonly weight: 700;
    };
    readonly body: {
        readonly size: "15px";
        readonly lineHeight: "1.65";
        readonly weight: 400;
    };
    readonly bodySm: {
        readonly size: "13px";
        readonly lineHeight: "1.65";
        readonly weight: 400;
    };
    readonly caption: {
        readonly size: "12px";
        readonly lineHeight: "1.5";
        readonly weight: 400;
    };
    readonly nav: {
        readonly size: "13px";
        readonly lineHeight: "1";
        readonly weight: 700;
        readonly letterSpacing: "0.08em";
    };
    readonly eyebrow: {
        readonly size: "11px";
        readonly lineHeight: "1.4";
        readonly weight: 700;
        readonly letterSpacing: "0.1em";
        readonly uppercase: true;
    };
    readonly button: {
        readonly size: "11px";
        readonly lineHeight: "1";
        readonly weight: 800;
        readonly letterSpacing: "0.08em";
        readonly uppercase: true;
    };
};
declare const radius: {
    readonly sm: "3px";
    readonly md: "6px";
};
declare const layout: {
    readonly navHeight: "52px";
    readonly maxWidth: "1280px";
    readonly gutter: {
        readonly mobile: "28px";
        readonly tablet: "48px";
    };
    readonly sectionPadding: "80px";
    readonly cardGap: "24px";
};

/** CSS custom property name for a semantic role, e.g. `--ost-text-mid`. */
declare function cssVar(role: ColorRole): string;
/** '#f05a24' → '240 90 36' (space-separated, for `rgb(var(--x) / <alpha>)`). */
declare function hexToChannels(hex: string): string;
/** WCAG 2.x contrast ratio between two opaque hex colors. */
declare function contrastRatio(a: string, b: string): number;

export { type ColorRole, type Division, colorRoles, contrastRatio, cssVar, dark, fontWeight, fonts, hexToChannels, layout, light, primitives, radius, typeScale };
