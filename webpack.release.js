'use strict';

const extractTextPlugin  = require("extract-text-webpack-plugin");
const pathRewriterPlugin = require('webpack-path-rewriter');
const webpack            = require('webpack');

const config = {
  entry: { main: [ './src/index.js' ] },
  module: {
    loaders:  [
      { test: /\.jade(\?.*)?$/, loader: pathRewriterPlugin.rewriteAndEmit({ name: '[name].html', loader: ['jade-html?pretty=true&hash=.*&local=false'] })},
      { test: /\.json(\?.*)?$/, loader: 'json' },
      { test: /\.jsx?(\?.*)?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss(\?.*)?$/, loader: extractTextPlugin.extract('style', 'css!autoprefixer!sass!import-glob-loader')},
      { test: /\.(jpe?g|png|gif)(\?.*)?$/i, loader: 'file?name=[name].[hash].[ext]!image-webpack?optimizationLevel=3'},
      { test: /\.ttf(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
      { test: /\.eot(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
      { test: /\.woff2?(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: './dist/release/',
    publicPath: '/dist/release/'
  },
  plugins: [
    new extractTextPlugin('[name].[hash].css'),
    new pathRewriterPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
};

module.exports = config;
