'use strict'

import { Chart } from './Chart.js'
import { useOption } from '../hooks'

export function ScatterChart (props) {
  const option = useOption({
    ...props,
    type: 'scatter'
  })

  return <Chart {...props} option={option} />
}
