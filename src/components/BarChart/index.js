'use strict'

import { Chart } from '../Chart'
import { withCartesianProps } from 'HOC'

const ChartWithCartersianProps = withCartesianProps(Chart)

export const BarChart = ({ xAxis, yAxis, ...rest }) => (
  <ChartWithCartersianProps
    {...rest}
    type={'bar'}
    xAxis={{ ...xAxis, type: 'value' }}
    yAxis={{ ...yAxis, type: 'category' }}
  />
)
