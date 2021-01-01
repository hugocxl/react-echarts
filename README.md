<div align="center">
  <img src="public/logo.png" width="100%" align="center">

[![NPM](https://img.shields.io/npm/v/@hcorta/react-echarts.svg)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![NPM](https://badgen.net/bundlephobia/minzip/@hcorta/react-echarts)](https://bundlephobia.com/result?p=@hcorta/react-echarts)
[![NPM](https://img.shields.io/npm/dm/@hcorta/react-echarts.svg)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![Build Status](https://travis-ci.com/hcorta/jsx-table.svg?branch=master)](https://travis-ci.com/hcorta/react-echarts)
[![dependencies Status](https://david-dm.org/hcorta/react-echarts/status.svg)](https://david-dm.org/hcorta/react-echarts)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<p>A <strong>simple</strong> and <strong>declarative</strong> superset of React components built on top of <strong><a href="https://echarts.apache.org/en/index.html">ECharts.js</a></strong></p>

</div>

---

</br>

## Installation

In order to use react-echarts, all you need to do is install the `@hcorta/react-echarts` package:

```sh
yarn add @hcorta/react-echarts
```

## Features

- 16 chart types
- SVG Rendering
- Lightweight
- Highly customizable
- Interactive
- Responsive design

## Principles

- **Easy to customize**: In most cases, charts look and behave exactly as you need without modifications. A simple options-structure allows for deep customization, and styling can be done via JavaScript or CSS.
- **Concise API**: react-echarts makes it easy to generate ECharts.js charts by wrapping the code required to construct the entire chart.
- **Controlled components**: exports [controlled](https://reactjs.org/docs/forms.html#controlled-components) components only.

## Usage

`react-echarts` exposes a set of components for developers that can be combined to set up interactive charts in their web pages. In order to render a chart you have to provide a reference to a [valid option object](https://echarts.apache.org/next/en/option.html#title). Some examples list as follows:

- Minimal area chart

```jsx
import { AreaChart } from '@hcorta/react-echarts'

function MyChart() {
  return (
    <AreaChart
      animation={true}
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
  )
}
```

- Simple 2-series bar chart

```jsx
import { BarChart } from '@hcorta/react-echarts'

function MyChart() {
  return (
    <BarChart
      smooth
      stacked
      legend={{ show: true, data: ['MySerie1', 'MySerie2'] }}
      xAxis={{
        show: true,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }}
      series={[
        { name: 'MySerie1', data: [12, 44, 36, 45, 77, 43, 76] },
        { name: 'MySerie2', data: [15, 26, 73, 26, 73, 21, 41] }
      ]}
    />
  )
}
```

Check out the [live example](https://codesandbox.io/s/basic-map-wvlol)

For other examples and components, check out the [documentation](https://www.react-simple-maps.io/docs/getting-started).

## License

MIT licensed. Copyright (c) Hugo Corta 2021. See [LICENSE.md](https://github.com/hcorta/react-echarts/blob/master/LICENSE) for more details.
