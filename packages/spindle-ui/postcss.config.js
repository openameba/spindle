module.exports = {
  /**
   * TODO: cerate .browserslistrc
   * - for modern browsers
   * - for IE11
   */
  // TODO: minify css for production
  /* eslint-disable @typescript-eslint/no-var-requires */
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-pxtorem')({ useEM: true }),
  ],
};
