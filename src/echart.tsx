// Hooks
import { UseEChartsOptions, useECharts } from './use-echarts'
import { useEChartsInstance } from './use-echarts-instance'
import { useEffect } from 'react'

// Types
import type { FC, HTMLAttributes } from 'react'
import type { UseEChartsInstanceOptions } from './use-echarts-instance'
import type { EChartsType } from 'echarts'

export type EChartProps = UseEChartsOptions &
  UseEChartsInstanceOptions & {
    getEchartsInstance?: (echarts: EChartsType | undefined) => unknown
  } & HTMLAttributes<HTMLDivElement>

export const EChart: FC<EChartProps> = ({
  getEchartsInstance,

  // Init
  devicePixelRatio,
  renderer,
  width,
  height,
  theme,

  // eChartsInstance
  group,

  // SetOption
  lazyUpdate,
  notMerge,
  silent,

  // Option
  angleAxis,
  animation,
  animationDelay,
  animationDelayUpdate,
  animationDuration,
  animationDurationUpdate,
  animationEasing,
  animationEasingUpdate,
  animationThreshold,
  aria,
  axisPointer,
  backgroundColor,
  blendMode,
  brush,
  calendar,
  color,
  dataZoom,
  dataset,
  geo,
  graphic,
  grid,
  hoverLayerThreshold,
  legend,
  parallel,
  parallelAxis,
  polar,
  progressive,
  progressiveThreshold,
  radar,
  radiusAxis,
  series,
  singleAxis,
  textStyle,
  timeline,
  title,
  toolbox,
  tooltip,
  useUTC,
  visualMap,
  xAxis,
  yAxis,

  // Events
  onAxisAreaSelected,
  onBrush,
  onBrushEnd,
  onBrushSelected,
  onClick,
  onContextMenu,
  onDataRangeSelected,
  onDataViewChanged,
  onDataZoom,
  onDoubleClick,
  onDownplay,
  onFinished,
  onGeoSelectChanged,
  onGeoSelected,
  onGeoUnselected,
  onGlobalCursorTaken,
  onGlobalOut,
  onHighlight,
  onLegendInverseSelect,
  onLegendScroll,
  onLegendSelectChanged,
  onLegendSelected,
  onLegendUnselected,
  onMagicTypeChanged,
  onMouseDown,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onRendered,
  onRestore,
  onSelectChanged,
  onTimelineChanged,
  onTimelinePlayChanged,

  ...rest
}) => {
  const [ref, echartsInstance, isMounted] = useECharts({
    devicePixelRatio,
    renderer,
    width,
    height,
    theme
  })

  useEChartsInstance(
    echartsInstance,
    {
      // Option
      lazyUpdate,
      notMerge,
      silent,

      // Series
      angleAxis,
      animation,
      animationDelay,
      animationDelayUpdate,
      animationDuration,
      animationDurationUpdate,
      animationEasing,
      animationEasingUpdate,
      animationThreshold,
      aria,
      axisPointer,
      backgroundColor,
      blendMode,
      brush,
      calendar,
      color,
      dataZoom,
      dataset,
      geo,
      graphic,
      grid,
      hoverLayerThreshold,
      legend,
      parallel,
      parallelAxis,
      polar,
      progressive,
      progressiveThreshold,
      radar,
      radiusAxis,
      series,
      singleAxis,
      textStyle,
      timeline,
      title,
      toolbox,
      tooltip,
      useUTC,
      visualMap,
      xAxis,
      yAxis,

      // Others
      group,

      // Events
      onAxisAreaSelected,
      onBrush,
      onBrushEnd,
      onBrushSelected,
      onClick,
      onContextMenu,
      onDataRangeSelected,
      onDataViewChanged,
      onDataZoom,
      onDoubleClick,
      onDownplay,
      onFinished,
      onGeoSelectChanged,
      onGeoSelected,
      onGeoUnselected,
      onGlobalCursorTaken,
      onGlobalOut,
      onHighlight,
      onLegendInverseSelect,
      onLegendScroll,
      onLegendSelectChanged,
      onLegendSelected,
      onLegendUnselected,
      onMagicTypeChanged,
      onMouseDown,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onRendered,
      onRestore,
      onSelectChanged,
      onTimelineChanged,
      onTimelinePlayChanged
    },
    [isMounted]
  )

  useEffect(() => {
    if (getEchartsInstance) {
      getEchartsInstance(echartsInstance)
    }
  }, [isMounted])

  return <div {...rest} ref={ref} />
}
