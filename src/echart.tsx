// Hooks
import { UseEChartsOptions, useECharts } from './use-echarts'
import { useEChartsInstance } from './use-echarts-instance'

// Types
import type { FC, HTMLAttributes } from 'react'
import type { UseEChartsInstanceOptions } from './use-echarts-instance'

export type EChartProps = UseEChartsOptions &
  UseEChartsInstanceOptions &
  HTMLAttributes<HTMLDivElement>

export const EChart: FC<EChartProps> = ({
  // useECharts
  devicePixelRatio,
  renderer,
  width,
  height,
  theme,

  // useEChartsInstance
  group,

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
  ...props
}) => {
  const [ref, echartsInstance] = useECharts({
    devicePixelRatio,
    renderer,
    width,
    height,
    theme
  })

  useEChartsInstance(
    echartsInstance,
    {
      // useEChartsInstance
      group,

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
    [echartsInstance?.id]
  )

  return <div {...props} ref={ref} />
}
