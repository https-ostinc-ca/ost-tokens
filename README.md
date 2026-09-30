# @ost/tokens

Design tokens for every One Stop Telecom Inc. frontend. The rules for using them live in `.github/docs/STYLE_GUIDE.md`. This package holds the values.

## Install

```jsonc
// package.json
"@ost/tokens": "github:https-ostinc-ca/ost-tokens#v1.0.0"   // CI / Cloudflare Pages
"@ost/tokens": "file:../ost-tokens"                         // local development
```

`dist/` is committed, so a git install doesn't need a build step.

## Use

```js
// tailwind.config.js
import ost from '@ost/tokens/tailwind-preset';
export default { presets: [ost], content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'] };
```

```ts
// src/main.tsx — once, at the root
import '@ost/tokens/tokens.css';
```

Classes: `bg-bg text-text bg-action text-on-action text-signal border-border text-eyebrow rounded-sm`.
Put `data-theme="light"` on any element to switch that subtree to the light set.

For non-CSS consumers, such as canvas or email HTML, import `{ dark, light, primitives }` directly.

## Change a value

1. Edit `src/primitives.ts` or `src/semantic.ts`. Never edit `dist/`.
2. Run `npm test`. The contrast suite has to pass.
3. Run `npm run build`, commit `dist/`, and tag a new version (`vX.Y.Z`).
4. Bump the tag in each consuming repo.
