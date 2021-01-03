'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function HeatmapChart (props) {
  const option = useOption({
    ...props,
    type: 'heatmap'
  })

  return <Chart {...props} option={option} />
}
