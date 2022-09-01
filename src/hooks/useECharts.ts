// Dependencies
import { ECharts, init } from 'echarts'
import { useEffect, useRef } from 'react'

// Types
import { RefObject } from 'react'
import { EChartEvents, EChartLibProps } from '../types'

interface UseEChartsProps extends EChartLibProps {
  containerRef: RefObject<HTMLDivElement>
}

export const useECharts = (props: UseEChartsProps): ECharts | null => {
  const echartsRef = useRef<ECharts | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const {
    containerRef,
    theme,
    renderer = 'svg',
    group,
    notMerge,
    replaceMerge,
    lazyUpdate,
    silent,
    transition,
    ...restProps
  } = props

  useEffect(() => {
    const shouldInitECharts = containerRef.current && !echartsRef.current

    if (shouldInitECharts) {
      echartsRef.current = startECharts()
      resizeObserverRef.current = startResizeObserver()
    }

    return () => {
      // TODO: Review cleanup logic
      // resizeObserverRef.current.unobserve(containerRef.current)
      // resizeObserverRef.current.disconnect()
      // dispose(containerRef.current)
    }
  }, [containerRef.current])

  useEffect(renderECharts)

  function startECharts() {
    const echartsInstance = init(containerRef.current, theme, {
      renderer,
    })

    // Set group
    echartsInstance.group = group

    // Set events
    Object.keys(EChartEvents).forEach((eventProp) => {
      echartsInstance.on(EChartEvents[eventProp], restProps[eventProp])
    })

    return echartsInstance
  }

  function renderECharts() {
    echartsRef.current?.clear()
    echartsRef.current?.setOption(restProps, notMerge, lazyUpdate)
  }

  function startResizeObserver() {
    const resizeObserver = new ResizeObserver(() =>
      echartsRef.current?.resize()
    )

    resizeObserver.observe(containerRef.current)
    return resizeObserver
  }

  return echartsRef.current
}
