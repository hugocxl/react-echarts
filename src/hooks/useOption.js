'use strict'

import { getOptionFromProps } from 'utils'

export function useOption ({
  series,
  xAxis,
  yAxis,
  data,
  type,
  serieCustomization,
  stacked,
  ...rest
}) {
  let finalSeries = series
  let finalXaxis = {
    type: 'category',
    ...(type === 'line' && {
      boundaryGap: false
    })
  }

  let finalYaxis = { type: 'value', ...yAxis }

  // Single serie conversion
  if (data) {
    finalSeries = [
      {
        data,
        type,
        ...serieCustomization
      }
    ]
  } else if (series) {
    finalSeries = series.map((serie) => ({
      ...serie,
      type,
      ...(stacked && { stack: 'one' }),
      ...serieCustomization
    }))
  }

  if (Array.isArray(xAxis)) {
    finalXaxis = {
      ...finalXaxis,
      data: xAxis
    }
  } else {
    finalXaxis = { ...finalXaxis, ...xAxis }
  }

  return getOptionFromProps({
    ...rest,
    series: finalSeries,
    xAxis: finalXaxis,
    yAxis: finalYaxis
  })
}
