// Dependencies
import { ECharts, init } from 'echarts'
import { useEffect, useRef } from 'react'

// Types
import type { UseEChartsProps } from './types'

// Constants
import { eChartEvents } from './constants'

export const useECharts = (props: UseEChartsProps): ECharts | null => {
  const echartsRef = useRef<ECharts | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const {
    containerRef,
    theme,
    renderer = 'svg',
    group,
    notMerge,
    lazyUpdate,
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
      // resizeObserverRef.current.unobserve(containerRef.current);
      // resizeObserverRef.current.disconnect();
      // dispose(containerRef.current);
    }
  }, [containerRef.current])

  useEffect(renderECharts, [
    theme,
    renderer,
    group,
    notMerge,
    lazyUpdate,
    ...Object.values(restProps).map(el => JSON.stringify(el))
  ])

  function startECharts() {
    const echartsInstance = init(containerRef.current, theme, {
      renderer
    })

    // Set group
    if (group) echartsInstance.group = group

    // Set events
    Object.keys(eChartEvents).forEach(eventProp => {
      // @ts-ignore
      const eventHandler = restProps?.[eventProp]

      if (eventHandler) {
        // @ts-ignore
        const echartEvent = eChartEvents[eventProp]
        echartsInstance.on(echartEvent, eventHandler)
      }
    })

    return echartsInstance
  }

  function renderECharts() {
    echartsRef.current?.clear()
    echartsRef.current?.setOption(restProps, notMerge, lazyUpdate)
  }

  function startResizeObserver() {
    const resizeObserver = new ResizeObserver(
      () => echartsRef.current?.resize()
    )

    if (containerRef.current) resizeObserver.observe(containerRef.current)
    return resizeObserver
  }

  return echartsRef.current
}
