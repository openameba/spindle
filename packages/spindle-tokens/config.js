const transitionFilter = {
  name: 'transition',
  filter: async (token) => {
    return token.$type === 'transition' || token.$type === 'cubicBezier';
  },
};

const primitiveColorFilter = {
  name: 'primitive-color',
  filter: async (token) => {
    return token.filePath.endsWith('primitive-color.tokens.json');
  },
};

const themeLightFilter = {
  name: 'theme-light',
  filter: async (token) => {
    return token.filePath.endsWith('theme-light.tokens.json');
  },
};

const themeDarkFilter = {
  name: 'theme-dark',
  filter: async (token) => {
    return token.filePath.endsWith('theme-dark.tokens.json');
  },
};

// Using dynamic import until ESM is supported in this repogitory
import('style-dictionary').then((module) => {
  const StyleDictionary = module.default;
  StyleDictionary.registerFilter(transitionFilter);
  StyleDictionary.registerFilter(primitiveColorFilter);
  StyleDictionary.registerFilter(themeLightFilter);
  StyleDictionary.registerFilter(themeDarkFilter);
});

module.exports = {
  source: [`tokens/**/*.tokens.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      files: [
        {
          destination: 'dist/css/spindle-tokens-animation.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          filter: 'transition',
        },
        {
          destination: 'dist/css/spindle-tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          filter: 'transition',
        },
      ],
    },
  },
};
