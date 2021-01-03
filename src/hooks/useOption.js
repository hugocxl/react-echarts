'use strict'

import { getOptionFromProps } from 'utils'

export function useOption ({
  series = [],
  xAxis,
  yAxis,
  data,
  type,
  links,
  serieCustomization,
  stacked,
  ...rest
}) {
  let finalSeries = series
  let finalXaxis = xAxis

  // Single serie conversion
  if (data) {
    finalSeries = [
      {
        links,
        data,
        type,
        ...serieCustomization
      }
    ]
  } else {
    finalSeries = series.map((serie) => ({
      ...serie,
      type,
      ...(stacked && { stack: 'one' }),
      ...serieCustomization
    }))
  }

  let finalYaxis = { type: 'value', ...yAxis }

  if (xAxis) {
    finalXaxis = {
      type: 'category',
      ...(type === 'line' && {
        boundaryGap: false
      })
    }

    if (Array.isArray(xAxis)) {
      finalXaxis = {
        ...finalXaxis,
        data: xAxis
      }
    } else {
      finalXaxis = { ...finalXaxis, ...xAxis }
    }
  }

  return getOptionFromProps({
    ...rest,
    series: finalSeries
    // xAxis: finalXaxis,
    // yAxis: finalYaxis
  })
}
