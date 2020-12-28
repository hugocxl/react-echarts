'use strict'

// Dependencies
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

// Common webpack config
const common = require('./webpack.common.js')

// Paths setup
const srcPath = path.resolve(__dirname, '..', 'src')

const webpackconfig = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      include: [srcPath],
      parallel: true,
      cache: true
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
}

module.exports = merge(common, webpackconfig)
