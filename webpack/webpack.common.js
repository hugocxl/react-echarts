'use strict'

// Dependencies
const webpack = require('webpack')

// Config
const config = require('../config')

// Paths setup
const srcPath = config.paths.src()
const publicPath = config.paths.public()

module.exports = {
  mode: config.compiler.mode,
  target: config.compiler.target,
  resolve: {
    modules: [srcPath, publicPath, 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  plugins: [new webpack.DefinePlugin(config.globals)],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  }
}
