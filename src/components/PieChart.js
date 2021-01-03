'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function PieChart (props) {
  const option = useOption({
    ...props,
    type: 'pie'
  })

  return <Chart {...props} option={option} />
}
