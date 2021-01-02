'use strict'

import { Chart } from './Chart.js'
import { withCartesianProps } from 'HOC'

const ChartWithCartersianProps = withCartesianProps(Chart)

export const AreaChart = (props) => (
  <ChartWithCartersianProps {...props} area={true} type={'line'} />
)
