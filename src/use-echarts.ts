// Dependencies
import * as echarts from 'echarts'
import { useRef, useState } from 'react'

// Types
import { type EChartsType } from 'echarts'

export type UseEChartsOptions = {
  theme?: Parameters<typeof echarts.init>[1]
} & Parameters<typeof echarts.init>[2]

export type UseECharts = (
  options: UseEChartsOptions
) => [(node: HTMLDivElement) => void, EChartsType | undefined, boolean]

export const useECharts: UseECharts = ({
  theme,
  devicePixelRatio,
  height,
  renderer,
  width
}) => {
  const containerRef = useRef<HTMLDivElement>()
  const echartsRef = useRef<EChartsType>()
  const resizeObserverRef = useRef<ResizeObserver>()
  const [started, setStarted] = useState(false)

  function setContainerRef(node: HTMLDivElement): void {
    if (containerRef.current && echartsRef.current) return

    containerRef.current = node
    echartsRef.current = startEcharts()
    resizeObserverRef.current = startResizeObserver()

    setStarted(true)
  }

  function startEcharts() {
    if (!containerRef.current) return

    return echarts.init(containerRef.current, theme, {
      devicePixelRatio,
      height,
      renderer,
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

  return [setContainerRef, echartsRef.current, started]
}
