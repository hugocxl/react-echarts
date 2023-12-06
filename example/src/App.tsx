import { useState } from 'react'
import { EChart } from '@kbox-labs/react-echarts'

function MyChart2() {
  return (
    <EChart
      group='group1'
      // animation={false}
      style={{
        height: '600px',
        width: '100%'
      }}
      xAxis={{
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }}
      yAxis={{
        type: 'value'
      }}
      series={[
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          areaStyle: {}
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
        <MyChart2 />

        <span>{count}</span>

        <button onClick={() => setCount(prev => prev + 1)}>click</button>
      </div>
    </>
  )
}

export default App
