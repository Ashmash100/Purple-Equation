const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development'
let plugins = [
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/index.html',
    filename: 'index.html'
  }),
]

if (process.env.NODE_ENV === "production") {
  mode = "production";
  plugins.push(new CleanWebpackPlugin())
}

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[name][ext]'
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: "asset/inline"
      }
    ],
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'src'),
      },
    compress: true,
    hot: true,
    port: 8000,
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  plugins: plugins,
};