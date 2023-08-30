function makeAnimationTokens(dictionary) {
  return dictionary.allTokens
    .filter((token) => {
      return token.attributes.category === 'Animation';
    })
    .map((token) => {
      if (token.attributes.type === 'Easing') {
        if (token.value.startsWith('cubic-bezier')) {
          return token;
        }
        token.value = `cubic-bezier(${token.value})`;
        return token;
      }

      if (dictionary.usesReference(token.original.value)) {
        const [ref] = dictionary.getReferences(token.original.value);
        token.value = `var(--${ref.name})`;
        return token;
      }

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
  },
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      files: [
        {
          destination: 'dist/css/spindle-tokens-animation.css',
          format: 'cssAnimation',
        },
        {
          destination: 'dist/css/spindle-tokens.css',
          format: 'cssAnimation',
        },
        {
          destination: 'dist/css/spindle-tokens.all.css',
          format: 'css/variables',
        },
      ],
    },
  },
};
