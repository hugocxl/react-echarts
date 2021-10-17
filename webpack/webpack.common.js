'use strict'

// Dependencies
const packageJson = require('../package.json')
const path = require('path')
const webpack = require('webpack')
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
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
      echarts: path.resolve('./node_modules/echarts')
    }
  },
  externals: {
    echarts: 'echarts',
    react: 'react'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
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
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
}
