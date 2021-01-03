'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function DoughnutChart (props) {
  const option = useOption({
    ...props,
    type: 'pie',
    serieCustomization: {
      radius: ['40%', '70%']
    }
  })

  return <Chart {...props} option={option} />
}
