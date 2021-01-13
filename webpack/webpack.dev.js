'use strict'

// Dependencies
const webpack = require('webpack')
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  cache: false,
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/
  },
  resolve: {
    unsafeCache: true
  },
  optimization: {
    minimize: false
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
