# react-echarts

<div align="center">
  <img src="public/img/logo.png" width="100%" align="center">

[![NPM](https://img.shields.io/npm/v/@hcorta/react-echarts.svg?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![NPM](https://img.shields.io/bundlephobia/minzip/@hcorta/react-echarts?style=flat-square)](https://bundlephobia.com/result?p=@hcorta/react-echarts)
[![NPM](https://img.shields.io/npm/dm/@hcorta/react-echarts.svg?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![dependencies Status](https://david-dm.org/hcorta/react-echarts/status.svg?style=flat-square&logo=appveyor)](https://david-dm.org/hcorta/react-echarts)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&logo=appveyor)](https://opensource.org/licenses/MIT)

<p>A <strong>simple</strong> and <strong>declarative</strong> set of powerful React components built on top of <strong><a href="https://echarts.apache.org/en/index.html">ECharts.js</a></strong></p>

</div>

---

## Features

- **16** chart types
- **SVG** Rendering
- **Lightweight**
- Highly **customizable**
- **Themes**
- **Interactive**
- **Responsive** design

## Installation

In order to use `react-echarts`, all you need to do is install the npm package:

```sh
yarn add @hcorta/react-echarts
```

## Sponsoring

I do this open source work in my free time. If you use `react-echarts` for an important work, and you'd like me to invest more time on it, you may [buy me a coffee](https://www.buymeacoffee.com/hcorta). Thanks!

## Introduction

`react-echarts` is an abstraction layer built with [React](https://facebook.github.io/react/) on top of [ECharts](https://echarts.apache.org/en/index.html).

It exposes a set of components for developers that can be combined to set up interactive charts in their web pages.
Main principles of `react-echarts` are:

1. **Simplicty:** `react-echarts` makes it easy to generate ECharts.js components by wrapping the code required to render the entire chart.
2. **Easy to customize**: In most cases, charts look and behave exactly as you need without modifications. A simple options-structure allows for deep customization, and styling can be done via JavaScript or CSS.
3. **Declarative**: components of charts are purely presentational.

## Usage

While some props have been provided to facilitate some use cases, most of them follow the [ECharts option schema](https://echarts.apache.org/next/en/option.html#title):

- **Quick start example:** Check out the [live demo](https://codesandbox.io/s/react-echarts-simple-area-umnfw)

```jsx
import { AreaChart, ColumnChart } from '@hcorta/react-echarts'

function App() {
  return (
    <AreaChart
      smooth
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
  )
}
```

<img src="public/img/example-area-chart.png" width="100%">

---

- **A bit more complex example:** Check out the [live demo](https://codesandbox.io/s/react-echarts-simple-area-umnfw)

```jsx
function CustomChart() {
  return (
    <ColumnChart
      tooltip
      grid={{ bottom: 100 }}
      legend={{
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        left: '10%'
      }}
      series={[
        {
          name: 'bar',
          stack: 'one',
          data: [2, 6, 8, 2]
        },
        {
          name: 'bar2',
          stack: 'one',
          data: [5, 7, 1, 0]
        },
        {
          name: 'bar3',
          data: [3, 4, -2, 8]
        },
        {
          name: 'bar4',
          data: [3, 5, 6, 9]
        }
      ]}
      xAxis={{
        data: ['class1', 'class2', 'class3', 'class4'],
        name: 'X Axis',
        axisLine: { onZero: true },
        splitLine: { show: true }
      }}
    />
  )
}
```

<img src="public/img/example-bar-chart.png" width="100%">

For other examples and components, check out the [documentation](hcorta.github.io/react-echarts/).

## Components Props

- **_`Common Props`_**

| Prop            |        Type        | Description                                                                 | Default |
| :-------------- | :----------------: | --------------------------------------------------------------------------- | :-----: |
| **style**       |      `Object`      | Styles object applied to the container                                      |  null   |
| **className**   |      `String`      | Classname of the container                                                  |   ''    |
| **height**      | `Number or String` | Height of the chart                                                         |   280   |
| **width**       | `Number or String` | Width of the chart                                                          | '100%'  |
| **getInstance** |     `Function`     | Callback called on mount that returns the ECharts instance of the component |  null   |
| **getRef**      |     `Function`     | Get the div container ref after mount                                       |  null   |
| **getEcharts**  |     `Function`     | Returns the ECharts lib on first mount                                      |  null   |

- **_`State Props`_**

| Prop             |    Type    | Description                                                                                                          |   Default    |
| :--------------- | :--------: | -------------------------------------------------------------------------------------------------------------------- | :----------: |
| **shouldUpdate** | `Function` | Callback to control whether the component should update or not. Custom `shouldComponentUpdate` method.               | `() => true` |
| **isLoading**    | `Boolean`  | Whether the component is loading. When is set to true, it will display the loading component.                        |    false     |
| **isMounting**   | `Boolean`  | Whether the component is mounting. When is set to true, it will display the skeleton commponent instead of the chart |    false     |
| **useSkeleton**  | `Boolean`  | Enables triggering loading                                                                                           |     true     |
| **useLoading**   | `Boolean`  | Enables triggering loading                                                                                           |    false     |

- **_`Custom Components`_**

| Prop                  |    Type     | Description               |    Default    |
| :-------------------- | :---------: | ------------------------- | :-----------: |
| **loadingComponent**  | `Component` | Custom loading component  | `<Loading/>`  |
| **skeletonComponent** | `Component` | Custom skeleton component | `<Skeleton/>` |

- **_`ECharts Props`_**

| Prop           |    Type    | Description                                              | Default |
| :------------- | :--------: | -------------------------------------------------------- | :-----: |
| **onUnmmount** | `Function` | Callback to be called when the component is unmounted.   |  null   |
| **onMount**    | `Function` | Callback to be called on first component mount.          |  null   |
| **onUpdate**   | `Function` | Callback to be called whenever the component is updated. |  null   |

- **_`Events Props`_**

| Prop           |    Type    | Description                                              | Default |
| :------------- | :--------: | -------------------------------------------------------- | :-----: |
| **onUnmmount** | `Function` | Callback to be called when the component is unmounted.   |  null   |
| **onMount**    | `Function` | Callback to be called on first component mount.          |  null   |
| **onUpdate**   | `Function` | Callback to be called whenever the component is updated. |  null   |

<!--
notMerge: false,
lazyUpdate: false,
replaceMerge: null,
silent: false,
transition: null,
theme: null,
group: null,
options: {},

// External added props
onEvents: {},
on: null,

// Events register
onClick: null,
onDoubleClick: null,
onMouseDown: null,
onMouseMove: null,
onMouseUp: null,
onMouseOver: null,
onMouseOut: null,
onGlobalOut: null,
onContextMenu: null,
onHighlight: null,
onDownplay: null,
onSelectChanged: null,
onLegendSelectChanged: null,
onLegendSelected: null,
onLegendUnselected: null,
onLegendSelectAll: null,
onLegendInverseSelect: null,
onLegendScroll: null,
onDataZoom: null,
onDataRangeSelected: null,
onTimelineChanged: null,
onTimelinePlayChanged: null,
onRestore: null,
onDataViewChanged: null,
onMagicTypeChanged: null,
onGeoSelectChanged: null,
onGeoSelected: null,
onGeoUnselected: null,
onAxisAreaSelected: null,
onFocusNodeadJacency: null,
onUnfocusNodeAdjacency: null,
onBrush: null,
onBrushEnd: null,
onBrushSelected: null,
onGlobalCursorTaken: null,
onRendered: null,
onFinished: null -->

## Contributing

No one’s perfect. If you’ve found any errors, want to suggest enhancements, or expand on a topic, please feel free to open an Issue or collaborate by PR.

## Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

<br>

## License

**react-echarts** is open source software licensed as MIT © [Hugo Corta](https://github.com/hcorta).
