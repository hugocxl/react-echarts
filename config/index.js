'use strict'

// Dependencies
const path = require('path')

// PRODUCTION OPTIMIZATION
const PRODUCTION_OPTIMIZATION = process.env.NODE_ENV === 'production'

// Default Configuration
const config = {
  env: process.env.NODE_ENV || 'development',
  productionOptimization: PRODUCTION_OPTIMIZATION,
  productionBundle: PRODUCTION_OPTIMIZATION,
  pathBase: path.resolve(__dirname, '..'),
  dir: {
    src: 'src',
    build: 'build',
    public: 'public',
    config: 'config'
  },
  compiler: {
    target: 'web',
    mode: PRODUCTION_OPTIMIZATION ? 'production' : 'development',
    devtool: PRODUCTION_OPTIMIZATION ? 'none' : 'eval-cheap-module-source-map',
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: ''
    },
    cache: true,
    watch: true,
    watchOptions: {
      aggregateTimeout: 500,
      ignored: /node_modules/
    },
    resolve: {
      unsafeCache: true
    },
    devServer: {
      host: '0.0.0.0',
      port: process.env.PORT || 5000,
      hot: true,
      open: true,
      watchContentBase: true,
      historyApiFallback: true,
      disableHostCheck: true
    }
  }
}

// Environment
// N.B.: globals added here must (also) be added to .eslintrc
config.globals = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.env)
  },
  NODE_ENV: config.env,
  ENV_PRODUCTION: config.env === 'production',
  ENV_DEVELOPMENT: config.env !== 'production'
}

// Utilities
function base () {
  const args = [config.pathBase].concat([].slice.call(arguments))
  return path.resolve.apply(path, args)
}

config.paths = {
  base: base,
  src: base.bind(null, config.dir.src),
  public: base.bind(null, config.dir.public),
  build: base.bind(null, config.dir.build),
  config: base.bind(null, config.dir.config)
}

module.exports = config
