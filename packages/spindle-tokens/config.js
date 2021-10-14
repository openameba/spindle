module.exports = {
  source: [`tokens/**/!(*.css).json`],
  format: {
    jsonDataSource: ({ dictionary }) => {
      // Flatten data to be a data source of some querying use cases
      // Stringify the child values to ensure the types are the same, but original.value keeps their type
      const tokens = dictionary.allTokens.map((token) => ({
        ...token,
        value: `${token.value}`, // ensure the value type is string
        pathString: token.path.join('.'), // useful for filtering the token
      }));
      return JSON.stringify(tokens, null, 2);
    },
  },
  platforms: {
    json: {
      files: [
        {
          destination: 'dist/json/spindle-tokens.json',
          format: 'json',
        },
        {
          destination: 'dist/json/spindle-tokens-flat.json',
          format: 'jsonDataSource',
        },
      ],
    },
  },
};
