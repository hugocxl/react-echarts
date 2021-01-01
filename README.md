<div align="center">
  <img src="public/logo.png" width="100%" align="center">

[![NPM](https://img.shields.io/npm/v/@hcorta/react-echarts.svg)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![NPM](https://badgen.net/bundlephobia/minzip/@hcorta/react-echarts)](https://bundlephobia.com/result?p=@hcorta/react-echarts)
[![NPM](https://img.shields.io/npm/dm/@hcorta/react-echarts.svg)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![Build Status](https://travis-ci.com/hcorta/jsx-table.svg?branch=master)](https://travis-ci.com/hcorta/react-echarts)
[![dependencies Status](https://david-dm.org/hcorta/react-echarts/status.svg)](https://david-dm.org/hcorta/react-echarts)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p>A <strong>simple</strong> and <strong>declarative</strong> superset of React components built on top of <strong><a href="https://echarts.apache.org/en/index.html">ECharts.js</a></strong></p>

</div>

---

## Installation

In order to use `react-echarts`, all you need to do is install the npm package:

```sh
yarn add @hcorta/react-echarts
```

## Features

- **16** chart types
- **SVG** Rendering
- **Lightweight**
- Highly **customizable**
- **Themes**
- **Interactive**
- **Responsive** design

## Introduction

`react-echarts` is an abstraction layer built with [React](https://facebook.github.io/react/) on top of [ECharts](https://echarts.apache.org/en/index.html).

It exposes a set of components for developers that can be combined to set up interactive charts in their web pages.
Main principles of react-echarts are:

1. **Simplicty:** react-echarts makes it easy to generate ECharts.js components by wrapping the code required to construct the entire chart.
1. **Easy to customize**: In most cases, charts look and behave exactly as you need without modifications. A simple options-structure allows for deep customization, and styling can be done via JavaScript or CSS.
1. **Declarative**: components of charts are purely presentational.

## Usage

In order to render a chart you have to provide a reference to a [valid option object](https://echarts.apache.org/next/en/option.html#title):

```jsx
import { AreaChart } from '@hcorta/react-echarts'

function MyChart() {
  return (
    <AreaChart
      smooth
      tooltip={{ show: true }}
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
  )
}
```

Check out the [live example](https://codesandbox.io/s/react-echarts-simple-area-umnfw)

For other examples and components, check out the [documentation](hcorta.github.io/react-echarts/).

## Component Props

| Prop              |       Type       | Description                                                                                                   |    Default    |
| :---------------- | :--------------: | ------------------------------------------------------------------------------------------------------------- | :-----------: |
| style             |      Object      | Styles object passed down to the chart container                                                              |     null      |
| className         |      String      | Classname applied to the container                                                                            |      ''       |
| height            | Number or String | Height of the chart                                                                                           |      280      |
| width             | Number or String | Width of the chart                                                                                            |    '100%'     |
| useLoading        |     Boolean      | Enables triggering loading                                                                                    |     false     |
| isLoading         |     Boolean      | Whether the component is loading. In case `useLoading` is set to true, it will display `loadingComponent`.    |     false     |
| loadingComponent  |    Component     | Custom component to display when `isLoading` is set to true                                                   | `<Loading/>`  |
| useSkeleton       |     Boolean      | Enables triggering loading                                                                                    |     false     |
| isMounting        |     Boolean      | Whether the component is mounting. In case `useSkeleton` is set to true, it will display `skeletonComponent`. |     false     |
| skeletonComponent |    Component     | Custom component to display when `isMounting` is set to true                                                  | `<Skeleton/>` |

## Sponsoring

I do this open source work in my free time. If you use `react-echarts` for an important work, and you'd like me to invest more time on it, you may [buy me a coffee](https://www.buymeacoffee.com/hcorta). Thanks!

## License

MIT licensed. Copyright (c) Hugo Corta 2021. See [LICENSE.md](https://github.com/hcorta/react-echarts/blob/master/LICENSE) for more details.
