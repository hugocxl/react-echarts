/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
  output: 'export',
  basePath: '/react-echarts',
  images: {
    unoptimized: true
  }
})
