module.exports = {
  stories: ['../src/**/*.@(mdx|stories.@(ts|tsx))'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  staticDirs: ['../assets'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
  },
  typescript: {
    reactDocgen: false,
  },
};
