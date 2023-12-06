// Dependencies
import { ECharts } from 'echarts/core'
import { useEffect } from 'react'

// Constants
import { echartsEvents as ev } from './events'

// Types
import type { EChartEventsProps } from './events'
import type { EChartOption, SetOptionOpts } from 'echarts'
import type { ECBasicOption } from 'echarts/types/dist/shared'

export type UseEChartsInstanceOptions = EChartEventsProps &
  SetOptionOpts &
  EChartOption &
  ECBasicOption & {
    group?: ECharts['group']
  }

export type UseEChartsInstance = (
  echartsInstance: ECharts | undefined,
  opts: UseEChartsInstanceOptions,
  deps: unknown[]
) => void

export const useEChartsInstance: UseEChartsInstance = (
  echartsInstance,
  {
    // Option
    lazyUpdate,
    notMerge,
    replaceMerge,
    silent,
    transition,

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
    darkMode,
    dataset,
    dataZoom,
    geo,
    graphic,
    grid,
    hoverLayerThreshold,
    legend,
    media,
    options,
    parallel,
    parallelAxis,
    polar,
    progressive,
    progressiveThreshold,
    radar,
    radiusAxis,
    series,
    singleAxis,
    stateAnimation,
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
  deps = []
) => {
  useEffect(() => {
    if (!echartsInstance) return

    if (group) echartsInstance.group = group
  }, [group, ...deps])

  useEffect(() => {
    if (!echartsInstance) return

    console.log('DRAWING')

    echartsInstance.clear()
    echartsInstance.setOption(
      {
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
        darkMode,
        dataset,
        dataZoom,
        geo,
        graphic,
        grid,
        hoverLayerThreshold,
        legend,
        media,
        options,
        parallel,
        parallelAxis,
        polar,
        progressive,
        progressiveThreshold,
        radar,
        radiusAxis,
        series,
        singleAxis,
        stateAnimation,
        textStyle,
        timeline,
        title,
        toolbox,
        tooltip,
        useUTC,
        visualMap,
        xAxis,
        yAxis
      },
      {
        lazyUpdate,
        notMerge,
        replaceMerge,
        silent,
        transition
      }
    )
  }, [
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
    darkMode,
    dataset,
    dataZoom,
    geo,
    graphic,
    grid,
    hoverLayerThreshold,
    legend,
    media,
    options,
    parallel,
    parallelAxis,
    polar,
    progressive,
    progressiveThreshold,
    radar,
    radiusAxis,
    series,
    singleAxis,
    stateAnimation,
    textStyle,
    timeline,
    title,
    toolbox,
    tooltip,
    useUTC,
    visualMap,
    xAxis,
    yAxis,

    //
    lazyUpdate,
    notMerge,
    replaceMerge,
    silent,
    transition,

    //
    ...deps
  ])

  useEffect(() => {
    if (!echartsInstance) return

    if (onAxisAreaSelected) {
      echartsInstance.on(ev.onAxisAreaSelected, onAxisAreaSelected)
    }
    if (onBrush) {
      echartsInstance.on(ev.onBrush, onBrush)
    }
    if (onBrushEnd) {
      echartsInstance.on(ev.onBrushEnd, onBrushEnd)
    }
    if (onBrushSelected) {
      echartsInstance.on(ev.onBrushSelected, onBrushSelected)
    }
    if (onClick) {
      echartsInstance.on(ev.onClick, onClick)
    }
    if (onContextMenu) {
      echartsInstance.on(ev.onContextMenu, onContextMenu)
    }
    if (onDataRangeSelected) {
      echartsInstance.on(ev.onDataRangeSelected, onDataRangeSelected)
    }
    if (onDataViewChanged) {
      echartsInstance.on(ev.onDataViewChanged, onDataViewChanged)
    }
    if (onDataZoom) {
      echartsInstance.on(ev.onDataZoom, onDataZoom)
    }
    if (onDoubleClick) {
      echartsInstance.on(ev.onDoubleClick, onDoubleClick)
    }
    if (onDownplay) {
      echartsInstance.on(ev.onDownplay, onDownplay)
    }
    if (onFinished) {
      echartsInstance.on(ev.onFinished, onFinished)
    }
    if (onGeoSelectChanged) {
      echartsInstance.on(ev.onGeoSelectChanged, onGeoSelectChanged)
    }
    if (onGeoSelected) {
      echartsInstance.on(ev.onGeoSelected, onGeoSelected)
    }
    if (onGeoUnselected) {
      echartsInstance.on(ev.onGeoUnselected, onGeoUnselected)
    }
    if (onGlobalCursorTaken) {
      echartsInstance.on(ev.onGlobalCursorTaken, onGlobalCursorTaken)
    }
    if (onGlobalOut) {
      echartsInstance.on(ev.onGlobalOut, onGlobalOut)
    }
    if (onHighlight) {
      echartsInstance.on(ev.onHighlight, onHighlight)
    }
    if (onLegendInverseSelect) {
      echartsInstance.on(ev.onLegendInverseSelect, onLegendInverseSelect)
    }
    if (onLegendScroll) {
      echartsInstance.on(ev.onLegendScroll, onLegendScroll)
    }
    if (onLegendScroll) {
      echartsInstance.on(ev.onLegendScroll, onLegendScroll)
    }
    if (onLegendSelectChanged) {
      echartsInstance.on(ev.onLegendSelectChanged, onLegendSelectChanged)
    }
    if (onLegendSelected) {
      echartsInstance.on(ev.onLegendSelected, onLegendSelected)
    }
    if (onLegendUnselected) {
      echartsInstance.on(ev.onLegendUnselected, onLegendUnselected)
    }
    if (onMagicTypeChanged) {
      echartsInstance.on(ev.onMagicTypeChanged, onMagicTypeChanged)
    }
    if (onMouseDown) {
      echartsInstance.on(ev.onMouseDown, onMouseDown)
    }
    if (onMouseMove) {
      echartsInstance.on(ev.onMouseMove, onMouseMove)
    }
    if (onMouseOut) {
      echartsInstance.on(ev.onMouseOut, onMouseOut)
    }
    if (onMouseOver) {
      echartsInstance.on(ev.onMouseOver, onMouseOver)
    }
    if (onRendered) {
      echartsInstance.on(ev.onRendered, onRendered)
    }
    if (onRestore) {
      echartsInstance.on(ev.onRestore, onRestore)
    }
    if (onSelectChanged) {
      echartsInstance.on(ev.onSelectChanged, onSelectChanged)
    }
    if (onTimelineChanged) {
      echartsInstance.on(ev.onTimelineChanged, onTimelineChanged)
    }
    if (onTimelinePlayChanged) {
      echartsInstance.on(ev.onTimelinePlayChanged, onTimelinePlayChanged)
    }
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
