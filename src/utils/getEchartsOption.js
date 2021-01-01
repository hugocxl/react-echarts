'use strict'

import { merge } from './merge'

const optionKeys = [
  'title',
  'legend',
  'grid',
  'xAxis',
  'yAxis',
  'polar',
  'radiusAxis',
  'angleAxis',
  'radar',
  'dataZoom',
  'visualMap',
  'tooltip',
  'axisPointer',
  'toolbox',
  'brush',
  'geo',
  'parallel',
  'parallelAxis',
  'singleAxis',
  'timeline',
  'graphic',
  'calendar',
  'dataset',
  'aria',
  'series',
  'color',
  'backgroundColor',
  'textStyle',
  'animation',
  'animationThreshold',
  'animationDuration',
  'animationEasing',
  'animationDelay',
  'animationDurationUpdate',
  'animationEasingUpdate',
  'animationDelayUpdate',
  'blendMode',
  'hoverLayerThreshold',
  'useUTC',
  'media'
]

export function getEchartsOption ({
  option = {},
  data = null,
  type = null,
  ...rest
}) {
  const propsOption = {}

  optionKeys.forEach((key) => {
    if (rest[key]) propsOption[key] = rest[key]
  })

  return merge(option, propsOption)
}
