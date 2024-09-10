const transitionOnlyFilter = {
  name: 'transition-only',
  filter: async (token) => {
    return token.$type === 'transition' || token.$type === 'cubicBezier';
  },
};

// Using dynamic import until ESM is supported in this repogitory
import('style-dictionary').then((module) => {
  module.default.registerFilter(transitionOnlyFilter);
});

module.exports = {
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
