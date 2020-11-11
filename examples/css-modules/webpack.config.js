module.exports = {
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      // Load Spindle UI CSS as a global style
      // You can also load locally removing this setting
      {
        test: /\.css$/i,
        include: [/node_modules/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  target: ['web', 'es5'],
};
