module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  features: {
    previewMdx2: true,
  },
  core: {
    builder: 'webpack5',
  },
};
