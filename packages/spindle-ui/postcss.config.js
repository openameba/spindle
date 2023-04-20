const path = require('path');

module.exports = {
  /**
   * TODO: create .browserslistrc
   * - for modern browsers
   * - for IE11
   */
  plugins: [
    require('autoprefixer'),
    require('postcss-import')({
      root: path.resolve(__dirname, '../../'),
      path: ['node_modules', 'packages/*/node_modules'],
    }),
    require('cssnano'),
  ],
};
