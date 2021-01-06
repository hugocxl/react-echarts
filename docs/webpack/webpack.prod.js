'use strict'

// Dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

// Common webpack config
const common = require('./webpack.common.js')

// Paths setup
const srcPath = path.resolve(__dirname, '../src')
const buildPath = path.resolve(__dirname, '..')

const webpackconfig = {
  mode: 'production',

  output: {
    publicPath: '',
    path: buildPath,
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new UglifyJsPlugin({
      include: [srcPath],
      parallel: true,
      cache: true,
    }),
  ],

  optimization: {
    splitChunks: false,
    minimize: true,
    moduleIds: 'deterministic',
    mergeDuplicateChunks: true,
    chunkIds: 'deterministic',
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
        ],
      },
    ],
  },
}

module.exports = merge(common, webpackconfig)
