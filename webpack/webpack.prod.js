"use strict";

// Dependencies
const { merge } = require("webpack-merge");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// Common webpack config
const common = require("./webpack.common.js");

// Paths setup
const srcPath = path.resolve(__dirname, "../src");
const libPath = path.resolve(__dirname, "../lib");
const readmePath = path.resolve(__dirname, "../README.md");

const webpackconfig = {
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: readmePath, to: libPath }],
    }),
    new UglifyJsPlugin({
      include: [srcPath],
      parallel: true,
      cache: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};

module.exports = merge(common, webpackconfig);
