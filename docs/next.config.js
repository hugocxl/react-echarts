/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  output: 'export',
  basePath: '/react-echarts'
})

module.exports = withNextra()
