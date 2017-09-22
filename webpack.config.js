const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/app`,
  entry: './App.jsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${__dirname}/app/index.html`,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
};
