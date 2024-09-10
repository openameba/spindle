import StyleDictionary from 'style-dictionary';

const transitionOnlyFilter = {
  name: 'transition-only',
  filter: async (token) => {
    return token.$type === 'transition' || token.$type === 'cubicBezier';
  },
};

StyleDictionary.registerFilter(transitionOnlyFilter);

export default {
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      files: [
        {
          destination: 'dist/spindle-tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'dist/animation.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
          filter: 'transition-only',
        },
      ],
    },
  },
};
