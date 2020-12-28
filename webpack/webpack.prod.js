'use strict'

// Dependencies
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Common webpack config
const common = require('./webpack.common.js')

// Paths setup
const srcPath = path.resolve(__dirname, '..', 'src')

const webpackconfig = {
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJsPlugin({
      include: [srcPath],
      parallel: true,
      cache: true
    })
  ],

  optimization: {
    minimize: false,
    moduleIds: 'deterministic',
    mergeDuplicateChunks: true,
    chunkIds: 'deterministic',
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
}

module.exports = merge(common, webpackconfig)
