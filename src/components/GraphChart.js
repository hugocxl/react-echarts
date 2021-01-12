'use strict'

import { Chart } from './Chart.js'
import { useOption } from '../hooks'

export function GraphChart (props) {
  const option = useOption({
    ...props,
    type: 'graph'
  })

  return <Chart {...props} option={option} />
}
