'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function MapChart (props) {
  const option = useOption({
    ...props,
    type: 'map'
  })

  return <Chart {...props} option={option} />
}
