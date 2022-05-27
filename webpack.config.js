const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'src'),
  mode: 'development',
  output: {
   path: path.join(__dirname, 'bundle'),
   filename: 'bundle.js'
  },
  devServer: {
    static: 'src',
    hot: true,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      title: "Webpack Demo",
      template: 'src/index.html'
    }),
  ]
};