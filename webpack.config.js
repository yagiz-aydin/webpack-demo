const path = require('path');
// Absolute Path on import stage
const HTMLWebpackPlugin = require('html-webpack-plugin');
// All Css files sass less styled bundle 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Minify & Optimization with building stage
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src'),
  mode: 'development',
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
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      title: "Webpack Demo",
      template: 'src/index.html'
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // How Build Folder & File must be out in file structure when runs `npm run build` commands
  output: {
   path: path.join(__dirname, 'that_build'),
   filename: 'that_main_build_file.js'
  },
};