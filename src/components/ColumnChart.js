'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function ColumnChart (props) {
  const option = useOption({
    ...props,
    type: 'bar'
  })

  return <Chart {...props} option={option} />
}
