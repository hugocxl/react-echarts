'use strict'

import { AreaChart } from '@hcorta/react-echarts'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from 'prism-react-renderer/themes/ultramin'
import './index.css'

export const Playground = {
  label: 'Playground',
  route: '/playground',
  order: 4,
  component: (props) => {
    const code = `
      <AreaChart
        height={'100%'}
        data={[125, 464, 846, 253, 457, 556, 975]}
        xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
      />
    `

    return (
      <div className='react_echarts__playground'>
        <LiveProvider code={code} scope={{ AreaChart }}>
          <LiveEditor theme={theme} className={'item_code'} />
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    )
  },
}
