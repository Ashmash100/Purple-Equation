const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

let mode = 'development'
let plugins = [
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/html/index.html',
    filename: 'index.html',
    chunks: ["index"]
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/html/submit.html',
    filename: 'submit.html',
    chunks: ["submit"]
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/html/privacy-policy.html',
    filename: 'privacy-policy.html',
    chunks: ["privacyPolicy"]
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/html/terms.html',
    filename: 'terms.html',
    chunks: ["terms"]
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/html/cookie-policy.html',
    filename: 'cookie-policy.html',
    chunks: ["cookiePolicy"]
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/html/google2ed1a045c5ffe9ec.html',
    filename: 'google2ed1a045c5ffe9ec.html',
    chunks: ["google2ed1a045c5ffe9ec"]
  }),
]

if (process.env.NODE_ENV === "production") {
  mode = "production";
  plugins.push(
    new CleanWebpackPlugin(),
    new CopyPlugin({
    patterns: [
      { from: "./sitemap.xml", to: "./" },
      ],
    }),
    new CompressionPlugin() 
  )
}

module.exports = {
  mode: mode,
  entry: {
    index: './src/js/index.js',
    submit: './src/js/submit.js',
    privacyPolicy: "./src/js/privacy-policy.js",
    terms: "./src/js/terms.js",
    cookiePolicy: "./src/js/cookie-policy.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
        test: /\.(png|ico|webp|jp(e*)g)$/,
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