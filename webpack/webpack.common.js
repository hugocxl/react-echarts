'use strict'

// Dependencies
const pJson = require('../package.json')
const webpack = require('webpack')
const path = require('path')

// Paths setup
const srcPath = path.resolve(__dirname, '..', 'src')
const libPath = path.resolve(__dirname, '..', 'lib')
const entryPoint = path.resolve(
  __dirname, '..', 'src', 'index.js'
)

// Env
const env = process.env.NODE_ENV || 'development'

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
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      },
      NODE_ENV: env,
      ENV_PRODUCTION: env === 'production',
      ENV_DEVELOPMENT: env !== 'production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
}
