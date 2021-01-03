'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function LineChart (props) {
  const option = useOption({
    ...props,
    type: 'line'
  })

  return <Chart {...props} option={option} />
}
