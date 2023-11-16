import { useMemo, useState } from 'react'
import './App.css'
import { EChart, EChartProps } from '@kbox-labs/react-echarts'

const staticProps: EChartProps = {
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%']
  }
}

function MyChart() {
  return (
    <EChart
      {...staticProps}
      style={{
        height: '600px',
        width: '100%'
      }}
      series={[
        {
          type: 'line',
          data: [
            ['2022-10-12', 750],
            ['2022-10-17', 300],
            ['2022-10-18', 100]
          ]
        }
      ]}
    />
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '100dvw', height: '100dvh' }}>
        <MyChart />

        <span>{count}</span>

        <button onClick={() => setCount(prev => prev + 1)}>click</button>
      </div>
    </>
  )
}

export default App
