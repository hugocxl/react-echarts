'use strict'

import { Chart } from '../Chart'
import { withCartesianProps } from 'HOC'

const ChartWithCartersianProps = withCartesianProps(Chart)

export const ColumnChart = (props) => (
  <ChartWithCartersianProps {...props} type={'bar'} />
)
