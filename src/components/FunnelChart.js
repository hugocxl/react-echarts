'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function FunnelChart (props) {
  const option = useOption({
    ...props,
    type: 'funnel'
  })

  return <Chart {...props} option={option} />
}
