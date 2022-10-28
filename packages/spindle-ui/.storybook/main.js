module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      target: 'web',
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.mjs$/,
            type: 'javascript/auto',
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    };
  },
};
