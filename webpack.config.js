
/** @type {import('webpack').Configuration} */
const webpack = {
  mode: process.env.NODE_ENV || 'development',
  entry: `${__dirname}/src/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: `${__dirname}/public/`,
    filename: 'index.js',
  },
  // externals: /node_modules/i,
  devtool: 'source-map',
  context: `${__dirname}/src`,
  target: 'web',
  serve: {
    port: 1337,
    content: `${__dirname}/public/`,
  },
};

module.exports = webpack;
