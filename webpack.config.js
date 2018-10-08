
/** @type {import('webpack').Configuration} */
const webpack = {
  mode: process.env.NODE_ENV || 'development',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/public/`,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
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
