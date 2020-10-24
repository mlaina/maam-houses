const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        template: './app/index.html'
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  performance: {
      hints: false
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, exclude: /node_modules/, use:['style-loader','css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|svg|gif)$/, exclude: /node_modules/, use: [{loader: 'file-loader', options: { name: 'assets/[name].[hash:7].[ext]'}}]},
      { test: /\.(mp4)$/, exclude: /node_modules/, use: [{loader: 'file-loader', options: { name: 'assets/[name].[hash:7].[ext]'}}]},
      { test: /\.scss$/, use:['style-loader','css-loader', 'sass-loader']}
      // Las imagenes se guardarán bajo /dist/assets/
    ]
  },
};