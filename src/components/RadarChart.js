'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function RadarChart (props) {
  const option = useOption({
    ...props,
    type: 'radar'
  })

  return <Chart {...props} option={option} />
}
