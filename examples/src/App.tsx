import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EChart } from '@kbox-labs/react-echarts'

function MyChart() {
  return (
    <EChart
      className={'my-classname'}
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
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <MyChart />
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
