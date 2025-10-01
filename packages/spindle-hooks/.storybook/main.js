module.exports = {
  stories: ['../src/**/*.@(mdx|stories.@(ts|tsx))'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
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
