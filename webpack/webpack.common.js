'use strict'

// Dependencies
const pJson = require('../package.json')
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Paths setup
const srcPath = path.resolve(__dirname, '../src')
const libPath = path.resolve(__dirname, '../lib')
const entryPoint = path.resolve(__dirname, '../src/index.js')

module.exports = {
  target: 'web',
  entry: entryPoint,
  output: {
    path: libPath,
    filename: 'index.js',
    library: pJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      constants$: path.resolve(__dirname, '../src/constants'),
      core$: path.resolve(__dirname, '../src/core'),
      utils$: path.resolve(__dirname, '../src/utils'),
      components$: path.resolve(__dirname, '../src/components'),
      themes$: path.resolve(__dirname, '../src/themes')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: false
          }
        }
      }
    ]
  }
}
