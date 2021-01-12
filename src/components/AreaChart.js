'use strict'

import { Chart } from './Chart.js'
import { useOption } from '../hooks'

export function AreaChart (props) {
  const option = useOption({
    ...props,
    type: 'line',
    serieCustomization: {
      areaStyle: {}
    }
  })

  return <Chart {...props} option={option} />
}
