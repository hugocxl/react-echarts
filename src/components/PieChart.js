'use strict'

import { Chart } from './Chart'
import { withRadialProps } from 'HOC'

const ChartWithRadialProps = withRadialProps(Chart)

export const PieChart = (props) => (
  <ChartWithRadialProps {...props} type={'pie'} />
)
