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
    cssShadow: ({ dictionary }) => {
      const tokens = makeShadowTokens(dictionary);
      return [':root {', ...tokens, '}', ''].join('\n');
    },
    cssPrimitiveColor: ({ dictionary }) => {
      const tokens = makePrimitiveColorTokens(dictionary);
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
    cssAllTokens: ({ dictionary }) => {
      const darkThemeTokens = makeThemeColorTokens('dark', dictionary);
      return [
        ':root {',
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
  },
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/css'],
      files: [
        {
          destination: 'dist/css/spindle-tokens-shadow.css',
          format: 'cssShadow',
        },
        {
          destination: 'dist/css/spindle-tokens-primitive-color.css',
          format: 'cssPrimitiveColor',
        },
        {
          destination: 'dist/css/spindle-tokens-light-theme-color.css',
          format: 'cssLightThemeColor',
        },
        {
          destination: 'dist/css/spindle-tokens-dark-theme-color.css',
          format: 'cssDarkThemeColor',
        },
        {
          destination: 'dist/css/spindle-tokens.css',
          format: 'cssAllTokens',
        },
      ],
    },
  },
};
