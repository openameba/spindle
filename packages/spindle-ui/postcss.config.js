module.exports = {
  /**
   * TODO: cerate .browserslistrc
   * - for modern browsers
   * - for IE11
   */
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('cssnano'),
  ],
};
