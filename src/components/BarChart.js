'use strict'

import { Chart } from './Chart.js'
import { useOption } from '../hooks'

export function BarChart (props) {
  const option = useOption({
    ...props,
    type: 'bar'
  })

  return <Chart {...props} option={option} />
}

// export const BarChart = ({ xAxis, yAxis, ...rest }) => (
//   <ChartWithCartersianProps
//     {...rest}
//     type={'bar'}
//     xAxis={{ ...xAxis, type: 'value' }}
//     yAxis={{ ...yAxis, type: 'category' }}
//   />
// )
