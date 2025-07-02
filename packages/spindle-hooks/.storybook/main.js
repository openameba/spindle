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

  framework: {
    name: '@storybook/react-webpack5',
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: false,
  },
};
