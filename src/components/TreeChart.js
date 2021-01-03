'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function TreeChart (props) {
  const option = useOption({
    ...props,
    type: 'tree'
  })

  return <Chart {...props} option={option} />
}
