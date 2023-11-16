// Dependencies
import { useEffect } from 'react'

// Types
import { echartsEventsMapping as ev, type EChartEventsProps } from './events'
import type { EChartOption, EChartsType, SetOptionOpts } from 'echarts'

export type UseEChartsInstanceOptions = EChartEventsProps &
  SetOptionOpts & {
    group?: EChartsType['group']
    getWidth?: EChartsType['getWidth']
    getHeight?: EChartsType['getHeight']
    getDom?: EChartsType['getDom']
    getOption?: EChartsType['getOption']
    resize?: EChartsType['resize']
    renderToSVGString?: EChartsType['renderToSVGString']
    dispatchAction?: EChartsType['dispatchAction']
    convertToPixel?: EChartsType['convertToPixel']
    convertFromPixel?: EChartsType['convertFromPixel']
    containPixel?: EChartsType['containPixel']
    showLoading?: EChartsType['showLoading']
    hideLoading?: EChartsType['hideLoading']
    getDataURL?: EChartsType['getDataURL']
    getConnectedDataURL?: EChartsType['getConnectedDataURL']
    appendData?: EChartsType['appendData']
    clear?: EChartsType['clear']
    isDisposed?: EChartsType['isDisposed']
    dispose?: EChartsType['dispose']
    option: EChartOption
  }

export type UseEChartsInstance = (
  echarts: EChartsType | undefined,
  opts: UseEChartsInstanceOptions,
  deps: unknown[]
) => void

export const useEChartsInstance: UseEChartsInstance = (
  echarts,
  {
    // Option
    option,
    lazyUpdate,
    notMerge,
    silent,

    // Others
    group,
    getWidth,
    // getHeight,
    // getDom,
    // getOption,
    // resize,
    // renderToSVGString,
    // dispatchAction,
    // convertToPixel,
    // convertFromPixel,
    // containPixel,
    // showLoading,
    // hideLoading,

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
  deps = []
) => {
  useEffect(() => {
    if (!echarts) return
    if (group) echarts.group = group
  }, [group, ...deps])

  useEffect(() => {
    if (!echarts) return
    if (getWidth) echarts.getWidth = getWidth
  }, [getWidth, ...deps])

  useEffect(() => {
    if (!echarts) return
    if (option)
      echarts.setOption(option, {
        lazyUpdate,
        notMerge,
        silent
      })
  }, [option, lazyUpdate, notMerge, silent, ...deps])

  useEffect(() => {
    if (!echarts) return

    if (onAxisAreaSelected)
      echarts.on(ev.onAxisAreaSelected, onAxisAreaSelected)
    if (onBrush) echarts.on(ev.onBrush, onBrush)
    if (onBrushEnd) echarts.on(ev.onBrushEnd, onBrushEnd)
    if (onBrushSelected) echarts.on(ev.onBrushSelected, onBrushSelected)
    if (onClick) echarts.on(ev.onClick, onClick)
    if (onContextMenu) echarts.on(ev.onContextMenu, onContextMenu)
    if (onDataRangeSelected)
      echarts.on(ev.onDataRangeSelected, onDataRangeSelected)
    if (onDataViewChanged) echarts.on(ev.onDataViewChanged, onDataViewChanged)
    if (onDataZoom) echarts.on(ev.onDataZoom, onDataZoom)
    if (onDoubleClick) echarts.on(ev.onDoubleClick, onDoubleClick)
    if (onDownplay) echarts.on(ev.onDownplay, onDownplay)
    if (onFinished) echarts.on(ev.onFinished, onFinished)
    if (onGeoSelectChanged)
      echarts.on(ev.onGeoSelectChanged, onGeoSelectChanged)
    if (onGeoSelected) echarts.on(ev.onGeoSelected, onGeoSelected)
    if (onGeoUnselected) echarts.on(ev.onGeoUnselected, onGeoUnselected)
    if (onGlobalCursorTaken)
      echarts.on(ev.onGlobalCursorTaken, onGlobalCursorTaken)
    if (onGlobalOut) echarts.on(ev.onGlobalOut, onGlobalOut)
    if (onHighlight) echarts.on(ev.onHighlight, onHighlight)
    if (onLegendInverseSelect)
      echarts.on(ev.onLegendInverseSelect, onLegendInverseSelect)
    if (onLegendScroll) echarts.on(ev.onLegendScroll, onLegendScroll)
    if (onLegendScroll) echarts.on(ev.onLegendScroll, onLegendScroll)
    if (onLegendSelectChanged)
      echarts.on(ev.onLegendSelectChanged, onLegendSelectChanged)
    if (onLegendSelected) echarts.on(ev.onLegendSelected, onLegendSelected)
    if (onLegendUnselected)
      echarts.on(ev.onLegendUnselected, onLegendUnselected)
    if (onMagicTypeChanged)
      echarts.on(ev.onMagicTypeChanged, onMagicTypeChanged)
    if (onMouseDown) echarts.on(ev.onMouseDown, onMouseDown)
    if (onMouseMove) echarts.on(ev.onMouseMove, onMouseMove)
    if (onMouseOut) echarts.on(ev.onMouseOut, onMouseOut)
    if (onMouseOver) echarts.on(ev.onMouseOver, onMouseOver)
    if (onRendered) echarts.on(ev.onRendered, onRendered)
    if (onRestore) echarts.on(ev.onRestore, onRestore)
    if (onSelectChanged) echarts.on(ev.onSelectChanged, onSelectChanged)
    if (onTimelineChanged) echarts.on(ev.onTimelineChanged, onTimelineChanged)
    if (onTimelinePlayChanged)
      echarts.on(ev.onTimelinePlayChanged, onTimelinePlayChanged)
  }, [
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
  ])
}
