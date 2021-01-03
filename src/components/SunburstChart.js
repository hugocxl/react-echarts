'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function SunburstChart (props) {
  const option = useOption({
    ...props,
    type: 'sunburst'
  })

  return <Chart {...props} option={option} />
}
