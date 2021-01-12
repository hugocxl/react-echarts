'use strict'

import { Chart } from './Chart.js'
import { useOption } from '../hooks'

export function EffectScatterChart (props) {
  const option = useOption({
    ...props,
    type: 'effectScatter'
  })

  return <Chart {...props} option={option} />
}
