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
  option,
  lazyUpdate,
  notMerge,
  silent,
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
      group,
      option,
      lazyUpdate,
      notMerge,
      silent,
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
    []
  )

  return <div {...props} ref={ref} />
}
