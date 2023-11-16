// Dependencies
import { init, use } from 'echarts'
import { useRef } from 'react'

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
  EChartsType | undefined
]

/**
 * Hook to initialize ECharts and get an ECharts instance
 * @returns A tuple with the function to set the ref and the ECharts instance
 */
export const useECharts: UseECharts = opts => {
  const containerRef = useRef<HTMLDivElement>()
  const echartsRef = useRef<EChartsType>()

  function setContainerRef(node: HTMLDivElement): void {
    if (containerRef.current) return

    const { theme, use: useOptions, ...initOptions } = opts || {}
    if (useOptions) {
      // @ts-ignore
      use(useOptions)
    }
    containerRef.current = node
    echartsRef.current = init(node, theme, initOptions)
  }

  return [setContainerRef, echartsRef.current]
}
