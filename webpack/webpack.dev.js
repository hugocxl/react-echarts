'use strict'

// Dependencies
const webpack = require('webpack')
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

// config
const config = require('../config')

// Paths setup
const buildPath = config.paths.build()
const srcPath = config.paths.src()
const publicPath = config.paths.public()
const projectEntry = config.paths.src('index.js')

module.exports = merge(common, {
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${config.compiler.devServer.host}:${config.compiler.devServer.port}`,
      'webpack/hot/only-dev-server',
      projectEntry
    ]
  },
  output: {
    ...config.compiler.output,
    pathinfo: false
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  devServer: {
    ...config.compiler.devServer,
    contentBase: [srcPath, publicPath],
    contentBasePublicPath: '/public'
  },
  cache: config.compiler.cache,
  devtool: config.compiler.devtool,
  watch: config.compiler.watch,
  watchOptions: config.compiler.watchOptions,
  resolve: {
    unsafeCache: config.compiler.resolve.unsafeCache
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
})
