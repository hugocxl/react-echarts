'use strict'

// Dependencies
const webpack = require('webpack')
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  cache: true,
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/
  },
  resolve: {
    unsafeCache: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
