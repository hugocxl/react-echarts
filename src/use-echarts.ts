// Dependencies
import { init, ECharts, use as echartsUse } from 'echarts/core'
import { useEffect, useRef, useState } from 'react'

// Constants
import { echartsEvents as ev } from './events'

// Types
import type { EChartEventsProps } from './events'
import type { EChartsOption, SetOptionOpts } from 'echarts'

export type UseEChartsOptions = EChartEventsProps &
  SetOptionOpts &
  EChartsOption &
  Parameters<typeof init>[2] & {
    group?: ECharts['group']
    theme?: Parameters<typeof init>[1]
    use?: Parameters<typeof echartsUse>[0]
  }

export function useECharts<T extends HTMLElement>({
  // Init
  devicePixelRatio,
  height,
  locale,
  pointerSize,
  renderer,
  theme,
  use,
  useCoarsePointer,
  useDirtyRect,
  width,

  // eChartsInstance
  group,

  // SetOption
  lazyUpdate,
  notMerge,
  replaceMerge,
  silent,
  transition,
  darkMode,
  media,
  options,
  stateAnimation,

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
  onTimelinePlayChanged
}: UseEChartsOptions): [(node: T) => void, ECharts | undefined] {
  const containerRef = useRef<T>()
  const echartsRef = useRef<ECharts>()
  const resizeObserverRef = useRef<ResizeObserver>()
  const [started, setStarted] = useState(false)
  const echartsInstance = echartsRef.current

  async function setContainerRef(node: T) {
    if (containerRef.current && echartsRef.current) return

    containerRef.current = node
    echartsRef.current = await startEcharts()
    resizeObserverRef.current = startResizeObserver()

    setStarted(true)
  }

  async function startEcharts() {
    if (!containerRef.current) return

    const useOpts = use || (await getGlobalUse())

    echartsUse(useOpts)

    return init(containerRef.current, theme, {
      devicePixelRatio,
      height,
      locale,
      pointerSize,
      renderer,
      useCoarsePointer,
      useDirtyRect,
      width
    })
  }

  function startResizeObserver() {
    const resizeObserver = new ResizeObserver(() => {
      echartsRef.current?.resize()
    })

    if (containerRef.current) resizeObserver.observe(containerRef.current)
    return resizeObserver
  }

  useEffect(() => {
    if (!echartsInstance) return

    if (group) echartsInstance.group = group
  }, [group, started])

  useEffect(() => {
    if (!echartsInstance) return

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
    started
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
    onTimelinePlayChanged,

    //
    started
  ])

  return [setContainerRef, echartsRef.current]
}

async function getGlobalUse() {
  const all = [
    import('echarts/features'),
    import('echarts/charts'),
    import('echarts/components'),
    import('echarts/renderers')
  ]

  const promise = await Promise.all(all.map(m => m.then(m => Object.values(m))))

  return promise.flat()
}
