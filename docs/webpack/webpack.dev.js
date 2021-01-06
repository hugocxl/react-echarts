'use strict'

// Dependencies
const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

// Paths setup
const srcPath = path.resolve(__dirname, '../src')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '',
    pathinfo: false,
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    hot: true,
    open: true,
    watchContentBase: true,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: [srcPath],
    contentBasePublicPath: '/public',
  },
  cache: true,
  devtool: 'eval-cheap-module-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 5000,
    ignored: /node_modules/,
  },
  resolve: {
    unsafeCache: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
})
