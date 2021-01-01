'use strict'

import { Chart } from '../Chart'
import { withRadialProps } from 'HOC'

const ChartWithRadialProps = withRadialProps(Chart)

export const DoughnutChart = (props) => (
  <ChartWithRadialProps {...props} type={'doughnut'} />
)
