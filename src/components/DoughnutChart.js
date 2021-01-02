'use strict'

import { Chart } from './Chart.js'
import { withRadialProps } from 'HOC'

const ChartWithRadialProps = withRadialProps(Chart)

export const DoughnutChart = (props) => (
  <ChartWithRadialProps {...props} type={'doughnut'} />
)
