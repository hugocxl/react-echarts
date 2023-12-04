// Dependencies
import { useEffect } from 'react'

// Types
import { echartsEventsMapping as ev, type EChartEventsProps } from './events'
import type { EChartOption, EChartsType, SetOptionOpts } from 'echarts'

export type UseEChartsInstanceOptions = EChartEventsProps &
  SetOptionOpts & {
    angleAxis?: EChartOption['angleAxis']
    animation?: EChartOption['animation']
    animationDelay?: EChartOption['animationDelay']
    animationDelayUpdate?: EChartOption['animationDelayUpdate']
    animationDuration?: EChartOption['animationDuration']
    animationDurationUpdate?: EChartOption['animationDurationUpdate']
    animationEasing?: EChartOption['animationEasing']
    animationEasingUpdate?: EChartOption['animationEasingUpdate']
    animationThreshold?: EChartOption['animationThreshold']
    aria?: EChartOption['aria']
    axisPointer?: EChartOption['axisPointer']
    backgroundColor?: EChartOption['backgroundColor']
    blendMode?: EChartOption['blendMode']
    brush?: EChartOption['brush']
    calendar?: EChartOption['calendar']
    color?: EChartOption['color']
    dataZoom?: EChartOption['dataZoom']
    dataset?: EChartOption['dataset']
    geo?: EChartOption['geo']
    graphic?: EChartOption['graphic']
    grid?: EChartOption['grid']
    hoverLayerThreshold?: EChartOption['hoverLayerThreshold']
    legend?: EChartOption['legend']
    parallel?: EChartOption['parallel']
    parallelAxis?: EChartOption['parallelAxis']
    polar?: EChartOption['polar']
    progressive?: EChartOption['progressive']
    progressiveThreshold?: EChartOption['progressiveThreshold']
    radar?: EChartOption['radar']
    radiusAxis?: EChartOption['radiusAxis']
    series?: EChartOption['series']
    singleAxis?: EChartOption['singleAxis']
    textStyle?: EChartOption['textStyle']
    timeline?: EChartOption['timeline']
    title?: EChartOption['title']
    toolbox?: EChartOption['toolbox']
    tooltip?: EChartOption['tooltip']
    useUTC?: EChartOption['useUTC']
    visualMap?: EChartOption['visualMap']
    xAxis?: EChartOption['xAxis']
    yAxis?: EChartOption['yAxis']

    // Instance
    group?: EChartsType['group']
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
  deps = []
) => {
  useEffect(() => {
    if (!echarts) return

    if (group) echarts.group = group
  }, [group, ...deps])

  useEffect(() => {
    if (!echarts) return

    echarts.clear()
    echarts.setOption(
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
        yAxis
      },
      {
        lazyUpdate,
        notMerge,
        silent
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
    lazyUpdate,
    notMerge,
    silent,
    ...deps
  ])

  useEffect(() => {
    if (!echarts) return

    if (onAxisAreaSelected) {
      echarts.on(ev.onAxisAreaSelected, onAxisAreaSelected)
    }
    if (onBrush) {
      echarts.on(ev.onBrush, onBrush)
    }
    if (onBrushEnd) {
      echarts.on(ev.onBrushEnd, onBrushEnd)
    }
    if (onBrushSelected) {
      echarts.on(ev.onBrushSelected, onBrushSelected)
    }
    if (onClick) {
      echarts.on(ev.onClick, onClick)
    }
    if (onContextMenu) {
      echarts.on(ev.onContextMenu, onContextMenu)
    }
    if (onDataRangeSelected) {
      echarts.on(ev.onDataRangeSelected, onDataRangeSelected)
    }
    if (onDataViewChanged) {
      echarts.on(ev.onDataViewChanged, onDataViewChanged)
    }
    if (onDataZoom) {
      echarts.on(ev.onDataZoom, onDataZoom)
    }
    if (onDoubleClick) {
      echarts.on(ev.onDoubleClick, onDoubleClick)
    }
    if (onDownplay) {
      echarts.on(ev.onDownplay, onDownplay)
    }
    if (onFinished) {
      echarts.on(ev.onFinished, onFinished)
    }
    if (onGeoSelectChanged) {
      echarts.on(ev.onGeoSelectChanged, onGeoSelectChanged)
    }
    if (onGeoSelected) {
      echarts.on(ev.onGeoSelected, onGeoSelected)
    }
    if (onGeoUnselected) {
      echarts.on(ev.onGeoUnselected, onGeoUnselected)
    }
    if (onGlobalCursorTaken) {
      echarts.on(ev.onGlobalCursorTaken, onGlobalCursorTaken)
    }
    if (onGlobalOut) {
      echarts.on(ev.onGlobalOut, onGlobalOut)
    }
    if (onHighlight) {
      echarts.on(ev.onHighlight, onHighlight)
    }
    if (onLegendInverseSelect) {
      echarts.on(ev.onLegendInverseSelect, onLegendInverseSelect)
    }
    if (onLegendScroll) {
      echarts.on(ev.onLegendScroll, onLegendScroll)
    }
    if (onLegendScroll) {
      echarts.on(ev.onLegendScroll, onLegendScroll)
    }
    if (onLegendSelectChanged) {
      echarts.on(ev.onLegendSelectChanged, onLegendSelectChanged)
    }
    if (onLegendSelected) {
      echarts.on(ev.onLegendSelected, onLegendSelected)
    }
    if (onLegendUnselected) {
      echarts.on(ev.onLegendUnselected, onLegendUnselected)
    }
    if (onMagicTypeChanged) {
      echarts.on(ev.onMagicTypeChanged, onMagicTypeChanged)
    }
    if (onMouseDown) {
      echarts.on(ev.onMouseDown, onMouseDown)
    }
    if (onMouseMove) {
      echarts.on(ev.onMouseMove, onMouseMove)
    }
    if (onMouseOut) {
      echarts.on(ev.onMouseOut, onMouseOut)
    }
    if (onMouseOver) {
      echarts.on(ev.onMouseOver, onMouseOver)
    }
    if (onRendered) {
      echarts.on(ev.onRendered, onRendered)
    }
    if (onRestore) {
      echarts.on(ev.onRestore, onRestore)
    }
    if (onSelectChanged) {
      echarts.on(ev.onSelectChanged, onSelectChanged)
    }
    if (onTimelineChanged) {
      echarts.on(ev.onTimelineChanged, onTimelineChanged)
    }
    if (onTimelinePlayChanged) {
      echarts.on(ev.onTimelinePlayChanged, onTimelinePlayChanged)
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
