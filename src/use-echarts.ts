// Dependencies
import { init, use } from 'echarts'
import { useEffect, useRef, useState } from 'react'

// Types
import type { EChartsType } from 'echarts'

export type UseEChartsOptions = Parameters<typeof init>[2] & {
  theme?: Parameters<typeof init>[1]
  use?: Parameters<typeof use>
}

export type UseECharts = (options?: UseEChartsOptions) => [
  /**
   * Function to set the ref for the hook
   */
  (node: HTMLDivElement) => void,
  /**
   * ECharts instance created by the hook
   */
  EChartsType | undefined,
  HTMLDivElement | undefined
]

/**
 * Hook to initialize ECharts and get an ECharts instance
 * @returns A tuple with the function to set the ref and the ECharts instance
 */
export const useECharts: UseECharts = opts => {
  const containerRef = useRef<HTMLDivElement>()
  const echartsRef = useRef<EChartsType>()
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (containerRef.current && !echartsRef.current) {
      const { theme, use: useOptions, ...initOptions } = opts || {}
      if (useOptions) {
        // @ts-ignore
        use(useOptions)
      }
      echartsRef.current = init(containerRef.current, theme, initOptions)
      resizeObserverRef.current = startResizeObserver()
    }

    return () => {
      // TODO: Review cleanup logic
      // resizeObserverRef.current.unobserve(containerRef.current);
      // resizeObserverRef.current.disconnect();
      // dispose(containerRef.current);
    }
  }, [started])

  function setContainerRef(node: HTMLDivElement): void {
    if (containerRef.current) return

    containerRef.current = node
    setStarted(true)
  }

  function startResizeObserver() {
    const resizeObserver = new ResizeObserver(() => {
      echartsRef.current?.resize()
    })

    if (containerRef.current) resizeObserver.observe(containerRef.current)
    return resizeObserver
  }

  return [setContainerRef, echartsRef.current, containerRef.current]
}
