<img src="public/cover.png" alt="cover" width="100%" align="center" />

<br />

<div align="center">

[![Version](https://img.shields.io/npm/v/@kbox-labs/react-echarts.svg?logo=npm)](https://www.npmjs.com/package/@kbox-labs/react-echarts)
[![NPM](https://img.shields.io/npm/dm/@kbox-labs/react-echarts.svg?&logo=npm)](https://www.npmjs.com/package/@kbox-labs/react-echarts)
[![Size](https://img.shields.io/bundlephobia/minzip/@kbox-labs/react-echarts)](https://bundlephobia.com/result?p=@kbox-labs/react-echarts)
[![Build](https://img.shields.io/github/actions/workflow/status/hugocxl/react-echarts/release.yml?branch=master)](https://github.com/hugocxl/react-echarts/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/hugocxl/react-echarts)](https://www.npmjs.com/package/@hugocxl/react-echarts)

</div>

<div align="center">
  <b>ECharts for React</b>
</div>

## Getting Started

Visit [introduction](https://hugocxl.github.io/react-echarts/docs/introduction) to get started with **React Echarts**.

### Quick example

A quick example of how to create a simple chart:

```tsx
import { EChart } from '@kbox-labs/react-echarts'

function App() {
  return (
    <EChart
      style={{
        height: '600px',
        width: '100%'
      }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }}
      yAxis={{
        type: 'value'
      }}
      series={[
        {
          data: [23, 12, 26, 38, 94, 15, 62],
          type: 'line',
          areaStyle: {}
        }
      ]}
    />
  )
}

export default App
```

## Documentation

Visit [docs](khttps://hugocxl.github.io/react-echarts/docs/installation) to view the full documentation.

## Community

The **React Echarts** community can be found on [GitHub Discussions](https://github.com/hugocxl/react-echarts/discussions), where you can ask questions, voice ideas, and share your projects.

Our [Code of Conduct](https://github.com/hugocxl/react-echarts/blob/master/CODE_OF_CONDUCT.md) applies to all **react-echarts** community channels.

## Contributing

Please see our [contributing.md](/contributing.md).

### Good First Issues

We have a list of [good first issues](https://github.com/hugocxl/react-echarts/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with our contribution process.

## Authors

- Hugo Corta ([@hugocxl](https://github.com/hugocxl))

## License

MIT License © 2023-Present [Hugo Corta](https://github.com/hugocxl)
