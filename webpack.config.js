const webpack = require("webpack");

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js"
  },
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
      }
    ]
  }
};
