const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/app",
  entry: "./App.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ["css-loader"]
      }
    ]
  }
};
