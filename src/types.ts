// Dependencies
import { EChartOption } from 'echarts'
import { eChartEvents } from './constants'
import { RefObject } from 'react'

export type EChartEvents = keyof typeof eChartEvents

export type EChartEventsProps = {
  [key in EChartEvents]?: () => void
}

export type EChartInstanceOptions = {
  notMerge?: boolean
  lazyUpdate?: boolean
  replaceMerge?: boolean
  silent?: boolean
  transition?: null
  theme?: string
  group?: string
  renderer?: 'svg' | 'canvas'
}

export type EChartLibProps = EChartInstanceOptions &
  EChartOption &
  EChartEventsProps

export type UseEChartsProps = EChartLibProps & {
  containerRef: RefObject<HTMLDivElement>
}
