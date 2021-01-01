'use strict'

export const withCartesianProps = (Component) => ({
  area,
  type,
  data,
  stacked = false,
  smooth = false,
  xAxis: xAxisProp = {},
  yAxis: yAxisProp = {},
  series: seriesProp = [],
  ...rest
}) => {
  // xAxis
  let xAxis = {
    type: 'category',
    ...(type === 'line' && {
      boundaryGap: false
    })
  }
  if (Array.isArray(xAxisProp)) {
    xAxis = {
      ...xAxis,
      data: xAxisProp
    }
  } else {
    xAxis = { ...xAxis, ...xAxisProp }
  }

  // series
  let series
  if (data) {
    series = [
      {
        data,
        type,
        smooth
      }
    ]
  } else {
    series = seriesProp.map((serie) => ({
      type,
      smooth,
      ...(stacked && { stack: 'true' }),
      ...(area && {
        areaStyle: {}
      }),
      ...serie
    }))
  }

  return (
    <Component
      {...rest}
      series={series}
      xAxis={xAxis}
      yAxis={{ type: 'value', ...yAxisProp }}
    />
  )
}
