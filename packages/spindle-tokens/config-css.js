function makeAnimationTokens(dictionary) {
  return dictionary.allTokens
    .filter((token) => {
      return token.attributes.category === 'Animation';
    })
    .map((token) => {
      if (dictionary.usesReference(token.original.value)) {
        const [ref] = dictionary.getReferences(token.original.value);
        token.value = `var(--${ref.name})`;
      }
      if (token.attributes.type === 'Easing') {
        token.value = `cubic-bezier(${token.value})`;
      }
      return token;
    })
    .map((token) => `  --${token.name}: ${token.value};`);
}

function makeShadowTokens(dictionary) {
  return dictionary.allTokens
    .filter((token) => token.filePath.includes('shadow'))
    .map((token) => `  --${token.name}: ${token.value};`);
}

function makePrimitiveColorTokens(dictionary) {
  return dictionary.allTokens
    .filter((token) => token.filePath.includes('primitive'))
    .map((token) => `  --${token.name}: ${token.value};`);
}

function makeUsedPrimitiveColors(dictionary) {
  const filtered = dictionary.allTokens
    .filter((token) => token.filePath.includes('light'))
    .map((token) => {
      if (dictionary.usesReference(token.original.value)) {
        const [ref] = dictionary.getReferences(token.original.value);
        return ref;
      }
      return null;
    })
    .filter(Boolean);
  // eslint-disable-next-line no-undef
  return Array.from(new Set(filtered)).map(
    (token) => `  --${token.name}: ${token.value};`,
  );
}

function makeThemeColorTokens(theme, dictionary) {
  return dictionary.allTokens
    .filter((token) => token.filePath.includes(theme))
    .map((token) => {
      if (dictionary.usesReference(token.original.value)) {
        const [ref] = dictionary.getReferences(token.original.value);
        token.value = `var(--${ref.name})`;
      }
      token.name = token.name.replace(`-theme-${theme}`, '');
      return token;
    })
    .map((token) => `  --${token.name}: ${token.value};`);
}

module.exports = {
  source: ['tokens/**/*.json'],
  format: {
    cssAnimation: ({ dictionary }) => {
      const tokens = makeAnimationTokens(dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssShadow: ({ dictionary }) => {
      const tokens = makeShadowTokens(dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssAllPrimitiveColor: ({ dictionary }) => {
      const tokens = makePrimitiveColorTokens(dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssUsedPrimitiveColor: ({ dictionary }) => {
      const tokens = makeUsedPrimitiveColors(dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssLightThemeColor: ({ dictionary }) => {
      const tokens = makeThemeColorTokens('light', dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssDarkThemeColor: ({ dictionary }) => {
      const tokens = makeThemeColorTokens('dark', dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssColor: ({ dictionary }) => {
      const darkThemeTokens = makeThemeColorTokens('dark', dictionary);
      return [
        ':root {',
        ...makeUsedPrimitiveColors(dictionary),
        ...makeThemeColorTokens('light', dictionary),
        '}',
        '',
        ':root[data-theme="dark"] {',
        ...darkThemeTokens,
        '}',
        '',
        '@media (prefers-color-scheme: dark) {',
        ':root:not([data-theme]),',
        ':root[data-theme="dark"] {',
        ...darkThemeTokens,
        '}',
        '}',
        '',
      ].join('\n');
    },
    cssAllTokens: ({ dictionary }) => {
      const darkThemeTokens = makeThemeColorTokens('dark', dictionary);
      return [
        ':root {',
        ...makeAnimationTokens(dictionary),
        ...makeShadowTokens(dictionary),
        ...makePrimitiveColorTokens(dictionary),
        ...makeThemeColorTokens('light', dictionary),
        '}',
        '',
        ':root[data-theme="dark"] {',
        ...darkThemeTokens,
        '}',
        '',
        '@media (prefers-color-scheme: dark) {',
        ':root:not([data-theme]),',
        ':root[data-theme="dark"] {',
        ...darkThemeTokens,
        '}',
        '}',
        '',
      ].join('\n');
    },
    cssTokens: ({ dictionary }) => {
      const darkThemeTokens = makeThemeColorTokens('dark', dictionary);
      return [
        ':root {',
        ...makeAnimationTokens(dictionary),
        ...makeShadowTokens(dictionary),
        ...makeUsedPrimitiveColors(dictionary),
        ...makeThemeColorTokens('light', dictionary),
        '}',
        '',
        ':root[data-theme="dark"] {',
        ...darkThemeTokens,
        '}',
        '',
        '@media (prefers-color-scheme: dark) {',
        ':root:not([data-theme]),',
        ':root[data-theme="dark"] {',
        ...darkThemeTokens,
        '}',
        '}',
        '',
      ].join('\n');
    },
  },
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/css'],
      files: [
        {
          destination: 'dist/css/spindle-tokens-animation.css',
          format: 'cssAnimation',
        },
        {
          destination: 'dist/css/spindle-tokens-shadow.css',
          format: 'cssShadow',
        },
        {
          destination: 'dist/css/spindle-tokens-primitive-color-all.css',
          format: 'cssAllPrimitiveColor',
        },
        {
          destination: 'dist/css/spindle-tokens-primitive-color.css',
          format: 'cssUsedPrimitiveColor',
        },
        {
          destination: 'dist/css/spindle-tokens-light-theme.css',
          format: 'cssLightThemeColor',
        },
        {
          destination: 'dist/css/spindle-tokens-dark-theme.css',
          format: 'cssDarkThemeColor',
        },
        {
          destination: 'dist/css/spindle-tokens-color.css',
          format: 'cssColor',
        },
        {
          destination: 'dist/css/spindle-tokens-all.css',
          format: 'cssAllTokens',
        },
        {
          destination: 'dist/css/spindle-tokens.css',
          format: 'cssTokens',
        },
      ],
    },
  },
};
