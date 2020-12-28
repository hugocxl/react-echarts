'use strict'

// Dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Common webpack config
const common = require('./webpack.common.js')

// Config
const config = require('../config')

// Paths setup
const buildPath = config.paths.build()
const publicPath = config.paths.public()
const projectEntry = config.paths.src('index.js')
const srcPath = config.paths.src()

const webpackconfig = {
  entry: [projectEntry],

  output: {
    ...config.compiler.output,
    path: buildPath
  },

  devtool: config.compiler.devtool,

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicPath,
          to: `${buildPath}/public`
        }
      ]
    }),
    new OptimizeCSSAssetsPlugin(),
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
              importLoaders: 2
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(common, webpackconfig)
