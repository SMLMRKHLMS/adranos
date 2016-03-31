'use strict';

// const argv               = require('minimist')(process.argv.slice(2));
const extractTextPlugin  = require("extract-text-webpack-plugin");
const openBrowserPlugin  = require('open-browser-webpack-plugin');
const pathRewriterPlugin = require('webpack-path-rewriter');
const webpack            = require('webpack');

// const query = {
//   presets: [
//     require.resolve('babel-preset-es2015'),
//     require.resolve('babel-preset-stage-0'),
//     require.resolve('babel-preset-react')
//   ]
// };

const config = {
  devServer: {
    contentBase: './dist/',
    port: 3000,
    host: 'localhost',
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: { colors: true },
    watchOptions: {
      poll: true,
      aggregateTimeout: 300
    }
  },
  entry: {
    main: [
      'webpack/hot/dev-server',
      './src/index.js'
    ]
  },
  module: {
    loaders:  [
      { test: /\.jade(\?.*)?$/, loader: pathRewriterPlugin.rewriteAndEmit({ name: '[name].html', loader: ['jade-html?pretty=true&hash=&local=true'] })},
      { test: /\.json(\?.*)?$/, loader: 'json' },
      { test: /\.jsx?(\?.*)?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss(\?.*)?$/, loader: 'style!css!autoprefixer!sass!import-glob-loader' },
      { test: /\.(jpe?g|png|gif)(\?.*)?$/i, loader: 'file?name=[name].[ext]!image-webpack?optimizationLevel=3' },
      { test: /\.ttf(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.eot(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.woff2?(\?.*)?$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  output: {
    filename: '[name].js',
    path: './dist/',
    publicPath: '/'
  },
  plugins: [
    new extractTextPlugin('[name].[hash].css'),
    new openBrowserPlugin({ url: 'http://localhost:3000/' }),
    new pathRewriterPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
};

module.exports = config;
