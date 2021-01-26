'use strict'

import { getOptionFromProps } from 'utils'

export function useOption ({
  series = [],
  // xAxis,
  // yAxis,
  data,
  type,
  // links,
  serieCustomization,
  stacked,
  ...rest
}) {
  let finalSeries = series

  // Single serie conversion
  if (data) {
    finalSeries = [
      {
        // links,
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

  return getOptionFromProps({
    ...rest,
    series: finalSeries
  })
}
