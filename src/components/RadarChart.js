'use strict'

import { Chart } from './Chart.js'
import { withRadialProps } from 'HOC'

const ChartWithRadialProps = withRadialProps(Chart)

export const RadarChart = (props) => (
  <ChartWithRadialProps {...props} type={'radar'} />
)
