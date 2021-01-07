'use strict'

// Dependencies
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// Paths setup
const srcPath = path.resolve(__dirname, '../src')
const publicPath = path.resolve(__dirname, '../public')
const entryPoint = path.resolve(__dirname, '../src/index.js')
const readmePath = path.resolve(__dirname, '../../README.md')
const externalPublicPath = path.resolve(__dirname, '../../public')

module.exports = {
  entry: entryPoint,
  target: 'web',
  resolve: {
    modules: [srcPath, publicPath, 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      public$: path.resolve(__dirname, '../public'),
      constants$: path.resolve(__dirname, '../src/constants'),
      helpers$: path.resolve(__dirname, '../src/helpers'),
      components$: path.resolve(__dirname, '../src/components'),
      pages$: path.resolve(__dirname, '../src/pages'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'React ECharts',
    }),
    new CopyPlugin({
      patterns: [
        { from: readmePath, to: publicPath },
        { from: externalPublicPath, to: publicPath },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
}
