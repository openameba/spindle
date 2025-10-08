import StyleDictionary from 'style-dictionary';

const commonPlatform = {
  transformGroup: 'css',
  buildPath: 'dist/css/',
};

// Base tokens (animation, font, shadow, primitive color)
await new StyleDictionary({
  source: [
    'tokens/animation.tokens.json',
    'tokens/font.tokens.json',
    'tokens/shadow.tokens.json',
    'tokens/primitive-color.tokens.json',
  ],
  platforms: {
    css: {
      ...commonPlatform,
      files: [
        {
          destination: 'spindle-tokens-animation.css',
          format: 'css/variables',
          options: { outputReferences: true },
          filter: (token) =>
            token.$type === 'transition' || token.$type === 'cubicBezier',
        },
        {
          destination: 'spindle-tokens-font.css',
          format: 'css/variables',
          options: { outputReferences: true },
          filter: (token) => token.$type === 'fontFamily',
        },
        {
          destination: 'spindle-tokens-shadow.css',
          format: 'css/variables',
          options: { outputReferences: true },
          filter: (token) => token.$type === 'shadow',
        },
        {
          destination: 'spindle-tokens.css',
          format: 'css/variables',
          options: { outputReferences: true },
          filter: (token) =>
            token.$type === 'transition' || token.$type === 'cubicBezier',
        },
      ],
    },
  },
}).buildAllPlatforms();

// Build each token set separately to avoid name collisions
// (e.g., theme-light/dark both have "Color.Background/Base")

// Theme colors will be enabled when migrating from ameba-color-palette.css
// Theme Light
// await new StyleDictionary({
//   source: ['tokens/primitive-color.tokens.json', 'tokens/theme-light.tokens.json'],
//   platforms: {
//     css: {
//       ...commonPlatform,
//       files: [
//         {
//           destination: 'spindle-tokens-theme-light.css',
//           format: 'css/variables',
//           options: { outputReferences: true },
//         },
//       ],
//     },
//   },
// }).buildAllPlatforms();

// // Theme Dark
// await new StyleDictionary({
//   source: ['tokens/primitive-color.tokens.json', 'tokens/theme-dark.tokens.json'],
//   platforms: {
//     css: {
//       ...commonPlatform,
//       files: [
//         {
//           destination: 'spindle-tokens-theme-dark.css',
//           format: 'css/variables',
//           options: { outputReferences: true },
//         },
//       ],
//     },
//   },
// }).buildAllPlatforms();

// Spacing Mobile
await new StyleDictionary({
  source: ['tokens/spacing-mobile.tokens.json'],
  platforms: {
    css: {
      ...commonPlatform,
      files: [
        {
          destination: 'spindle-tokens-spacing-mobile.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
  },
}).buildAllPlatforms();

// Spacing Tablet
await new StyleDictionary({
  source: ['tokens/spacing-tablet.tokens.json'],
  platforms: {
    css: {
      ...commonPlatform,
      files: [
        {
          destination: 'spindle-tokens-spacing-tablet.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
  },
}).buildAllPlatforms();

// Spacing Desktop
await new StyleDictionary({
  source: ['tokens/spacing-desktop.tokens.json'],
  platforms: {
    css: {
      ...commonPlatform,
      files: [
        {
          destination: 'spindle-tokens-spacing-desktop.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
  },
}).buildAllPlatforms();
