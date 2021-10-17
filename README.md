# react-echarts

<div align="center">
  <img src="public/img/logo-text-vertical.png" width="100%" align="center" />

[![Version](https://img.shields.io/npm/v/@hcorta/react-echarts.svg?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![Size](https://img.shields.io/bundlephobia/minzip/@hcorta/react-echarts?style=flat-square)](https://bundlephobia.com/result?p=@hcorta/react-echarts)
[![NPM](https://img.shields.io/npm/dm/@hcorta/react-echarts.svg?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![Dependencies Status](https://img.shields.io/npm/v/echarts?color=mediumorchid&label=echarts&style=flat-square)](https://github.com/apache/incubator-echarts)

A React component for the **ECharts** library

</div>

---

## Table of Contents 📚

- [Installation](#Installation)
- [Introducction](#Introducction)
- [Usage](#Usage)
- [Props](#Props)
- [Contributing](#Contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#License)

## ⚡️ Installation

In order to use **`react-echarts`**, all you need to do is install the npm package:

```sh
yarn add @hcorta/react-echarts
```

> **`echarts`** and **`react`** are **peerDependencies** of **`react-echarts`**, you may **install your own versions**.

## 💡 Introduction

[Apache ECharts](https://echarts.apache.org/en/index.html) is a free, powerful charting and visualization library offering intuitive, interactive, and highly customizable charts. It is written in pure **JavaScript** and based on **zrender**, a canvas library.

**`react-echarts`** is an abstraction wrapper built with [React](https://facebook.github.io/react/) on top of Apache ECharts. Its main principles of are:

1. **Simplicty:** **`react-echarts`** makes it easy to generate ECharts components by wrapping the code required to interact with the core library.
2. **Declarative**: components are purely presentational.

## ⚡️ Usage

To start using `react-echarts`, you just need to import the **`<Chart />`** component from the root folder. Check the [props](#Props) section out for more info:

```js
import { Chart } from '@hcorta/react-echarts'

function App() {
  return (
    <Chart
      group={'echarts__example'}
      className={'my__example'}
      onMount={(props) => console.log('Mounted!', props)}
      getInstance={(instance) => console.log('Instance!', instance)}
      getRef={(ref) => console.log('Ref!', ref)}
      xAxis={{
        type: 'category'
      }}
      yAxis={{
        type: 'value',
        boundaryGap: [0, '30%']
      }}
      series={[
        {
          type: 'line',
          data: [
            ['2019-10-12', 750],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
          ]
        }
      ]}
    />
  )
}
```

Or you may pass the [option](https://echarts.apache.org/next/en/option.html) object directly, as described below:

_**Note**: In case it is passed down to the component, the rest of option-like props will be ommited (e.g: xAxis prop)._

```js
import { Chart } from '@hcorta/react-echarts'

function App() {
  return (
    <Chart
      option={{
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }}
    />
  )
}
```

## 🎓 Props

While some props have been provided to facilitate specific use cases, most of them follow the [Apache ECharts option schema](https://echarts.apache.org/next/en/option.html). The following props, grouped by category, are available:

### General

| Prop                        |     Type     | Description                                                                 |             Default              |
| :-------------------------- | :----------: | --------------------------------------------------------------------------- | :------------------------------: |
| **`id`**                    |  `{String}`  | id of the container                                                         |                ''                |
| **`className`**             |  `{String}`  | Classname of the container                                                  |                ''                |
| **`style`**                 |  `{Object}`  | Style object applied to the container                                       |               null               |
| **`getInstance`**           | `{Function}` | Callback called on mount that returns the ECharts instance of the component |               null               |
| **`getRef`**                | `{Function}` | Get the div container ref after mount                                       |               null               |
| **`shouldComponentUpdate`** | `{Function}` | Callback to control whether the component should update or not.             | `(nextProps, prevProps) => true` |

### ECharts

| Prop             |    Type     | Description                                                                                  | Default |
| :--------------- | :---------: | -------------------------------------------------------------------------------------------- | :-----: |
| **`option`**     | `{Object}`  | The ECharts option config, can see <https://echarts.apache.org/option.html>.                 |  null   |
| **`notMerge`**   | `{Boolean}` | Whether or not to merge with previous option                                                 |  false  |
| **`lazyUpdate`** | `{Boolean}` | Whether or not to update chart immediately;                                                  |  false  |
| **`silent`**     | `{Boolean}` | states whether not to prevent triggering events when calling setOption                       |  false  |
| **`theme`**      | `{String}`  | Theme to be applied. This can be a configuring object of a theme, or a theme name registered |   ''    |
| **`group`**      | `{String}`  | Group name to be used in chart connection.                                                   |   ''    |
| **`renderer`**   | `{String}`  | Supports 'canvas' or 'svg'                                                                   |  'svg'  |

### Option keys props

| Prop                          |    Type    | Description                                                      | Default |
| :---------------------------- | :--------: | ---------------------------------------------------------------- | :-----: |
| **`title`**                   | `{Object}` | <https://echarts.apache.org/option.html#title>                   |  null   |
| **`legend`**                  | `{Object}` | <https://echarts.apache.org/option.html#legend>                  |  null   |
| **`grid`**                    | `{Object}` | <https://echarts.apache.org/option.html#grid>                    |  null   |
| **`xAxis`**                   | `{Object}` | <https://echarts.apache.org/option.html#xAxis>                   |  null   |
| **`yAxis`**                   | `{Object}` | <https://echarts.apache.org/option.html#yAxis>                   |  null   |
| **`polar`**                   | `{Object}` | <https://echarts.apache.org/option.html#polar>                   |  null   |
| **`radiusAxis`**              | `{Object}` | <https://echarts.apache.org/option.html#radiusAxis>              |  null   |
| **`angleAxis`**               | `{Object}` | <https://echarts.apache.org/option.html#angleAxis>               |  null   |
| **`radar`**                   | `{Object}` | <https://echarts.apache.org/option.html#radar>                   |  null   |
| **`dataZoom`**                | `{Object}` | <https://echarts.apache.org/option.html#dataZoom>                |  null   |
| **`visualMap`**               | `{Object}` | <https://echarts.apache.org/option.html#visualMap>               |  null   |
| **`tooltip`**                 | `{Object}` | <https://echarts.apache.org/option.html#tooltip>                 |  null   |
| **`brush`**                   | `{Object}` | <https://echarts.apache.org/option.html#brush>                   |  null   |
| **`geo`**                     | `{Object}` | <https://echarts.apache.org/option.html#geo>                     |  null   |
| **`parallel`**                | `{Object}` | <https://echarts.apache.org/option.html#parallel>                |  null   |
| **`parallelAxis`**            | `{Object}` | <https://echarts.apache.org/option.html#parallelAxis>            |  null   |
| **`singleAxis`**              | `{Object}` | <https://echarts.apache.org/option.html#singleAxis>              |  null   |
| **`timeline`**                | `{Object}` | <https://echarts.apache.org/option.html#timeline>                |  null   |
| **`graphic`**                 | `{Object}` | <https://echarts.apache.org/option.html#graphic>                 |  null   |
| **`calendar`**                | `{Object}` | <https://echarts.apache.org/option.html#calendar>                |  null   |
| **`dataset`**                 | `{Object}` | <https://echarts.apache.org/option.html#dataset>                 |  null   |
| **`aria`**                    | `{Object}` | <https://echarts.apache.org/option.html#aria>                    |  null   |
| **`series`**                  | `{Object}` | <https://echarts.apache.org/option.html#series>                  |  null   |
| **`color`**                   | `{Object}` | <https://echarts.apache.org/option.html#color>                   |  null   |
| **`backgroundColor`**         | `{Object}` | <https://echarts.apache.org/option.html#backgroundColor>         |  null   |
| **`textStyle`**               | `{Object}` | <https://echarts.apache.org/option.html#textStyle>               |  null   |
| **`animation`**               | `{Object}` | <https://echarts.apache.org/option.html#animation>               |  null   |
| **`animationThreshold`**      | `{Object}` | <https://echarts.apache.org/option.html#animationThreshold>      |  null   |
| **`animationDuration`**       | `{Object}` | <https://echarts.apache.org/option.html#animationDuration>       |  null   |
| **`animationEasing`**         | `{Object}` | <https://echarts.apache.org/option.html#animationEasing>         |  null   |
| **`animationDelay`**          | `{Object}` | <https://echarts.apache.org/option.html#animationDelay>          |  null   |
| **`animationDurationUpdate`** | `{Object}` | <https://echarts.apache.org/option.html#animationDurationUpdate> |  null   |
| **`blendMode`**               | `{Object}` | <https://echarts.apache.org/option.html#blendMode>               |  null   |
| **`hoverLayerThreshold`**     | `{Object}` | <https://echarts.apache.org/option.html#hoverLayerThreshold>     |  null   |
| **`useUTC`**                  | `{Object}` | <https://echarts.apache.org/option.html#useUTC>                  |  null   |
| **`media`**                   | `{Object}` | <https://echarts.apache.org/option.html#media>                   |  null   |

> For more detailed info, check the [ECharts docs](https://echarts.apache.org/option.html)

### Events

| Prop                         |     Type     | Description                                                                                                 | Default |
| :--------------------------- | :----------: | ----------------------------------------------------------------------------------------------------------- | :-----: |
| **`onMount`**                | `{Function}` | Callback to be called on first component mount.                                                             |  null   |
| **`onUpdate`**               | `{Function}` | Callback to be called whenever the component is updated.                                                    |  null   |
| **`onUnmmount`**             | `{Function}` | Callback to be called when the component is unmounted.                                                      |  null   |
| **`onRendered`**             | `{Function}` | Trigger when a frame rendered. Notice that the rendered event does not indicate that the animation finished |  null   |
| **`onFinished`**             | `{Function}` | Triggered when render finished, that is, when animation finished                                            |  null   |
| **`onClick`**                | `{Function}` | Event of chart click.                                                                                       |  null   |
| **`onDoubleClick`**          | `{Function}` | Event of double chart click.                                                                                |  null   |
| **`onMouseDown`**            | `{Function}` | Event of mouse down chart                                                                                   |  null   |
| **`onMouseMove`**            | `{Function}` | Event of mouse mouse chart                                                                                  |  null   |
| **`onMouseUp`**              | `{Function}` | Event of mouse up chart                                                                                     |  null   |
| **`onMouseOver`**            | `{Function}` | Event of mouse over chart                                                                                   |  null   |
| **`onMouseOut`**             | `{Function}` | Event of global out chart                                                                                   |  null   |
| **`onGlobalOut`**            | `{Function}` | Event of global out chart                                                                                   |  null   |
| **`onContextMenu`**          | `{Function}` | Event of context menu                                                                                       |  null   |
| **`onHighlight`**            | `{Function}` | Event of data highlight.                                                                                    |  null   |
| **`onDownplay`.**            | `{Function}` | Event of data downplay.                                                                                     |  null   |
| **`onSelectChanged`**        | `{Function}` | Event emitted when data selection is changed.                                                               |  null   |
| **`onLegendSelectChanged`**  | `{Function}` | Event emitted after legend selecting state changes.                                                         |  null   |
| **`onLegendSelected`**       | `{Function}` | Event emitted after legend is selected.                                                                     |  null   |
| **`onLegendUnselected`**     | `{Function}` | Event emitted after unselecting legend.                                                                     |  null   |
| **`onLegendSelectAll`**      | `{Function}` | Event emitted after all legends are selected.                                                               |  null   |
| **`onLegendInverseSelect`**  | `{Function}` | Event emitted after inversing all legends.                                                                  |  null   |
| **`onLegendScroll`**         | `{Function}` | Event when trigger legend scroll.                                                                           |  null   |
| **`onDataZoom`**             | `{Function}` | Event emitted after zooming data area.                                                                      |  null   |
| **`onDataRangeSelected`**    | `{Function}` | Event emitted after range is changed in visualMap.                                                          |  null   |
| **`onTimelineChanged`**      | `{Function}` | Event emitted after time point in timeline is changed.                                                      |  null   |
| **`onTimelinePlayChanged`**  | `{Function}` | Switching event of play state in timeline.                                                                  |  null   |
| **`onRestore`**              | `{Function}` | Resets option event.                                                                                        |  null   |
| **`onDataViewChanged`**      | `{Function}` | Changing event of data view tool in toolbox.                                                                |  null   |
| **`onMagicTypeChanged`**     | `{Function}` | Switching event of magic type tool in toolbox.                                                              |  null   |
| **`onGeoSelectChanged`**     | `{Function}` | Event emitted after selecting state changes.                                                                |  null   |
| **`onGeoSelected`**          | `{Function}` | Event after selecting.                                                                                      |  null   |
| **`onGeoUnselected`**        | `{Function}` | Cancels selected event.                                                                                     |  null   |
| **`onAxisAreaSelected`**     | `{Function}` | Selecting event of range of parallel axis.                                                                  |  null   |
| **`onFocusNodeadJacency`**   | `{Function}` | Adjacent nodes highlight event in graph.                                                                    |  null   |
| **`onUnfocusNodeAdjacency`** | `{Function}` | Adjacent nodes reverse-highlight event in graph.                                                            |  null   |
| **`onBrush`**                | `{Function}` | Event triggered after action brush dispatched.                                                              |  null   |
| **`onBrushEnd`**             | `{Function}` | Event triggered after action brushEnd dispatched.                                                           |  null   |
| **`onBrushSelected`**        | `{Function}` | Notice what are selected.                                                                                   |  null   |
| **`onGlobalCursorTaken`**    | `{Function}` | -                                                                                                           |  null   |

## 🖇 Contributing

No one’s perfect. If you’ve found any errors, want to suggest enhancements, or expand on a topic, please feel free to open an Issue or collaborate by PR.

## 📐 Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## 📝 License

**react-echarts** is open source software licensed as MIT ©[hcorta](https://github.com/hcorta).
