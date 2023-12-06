// Dependencies
import { init, ECharts, use } from 'echarts/core'
import { useRef, useState } from 'react'

export type UseECharts = (
  options: UseEChartsOptions
) => [(node: HTMLDivElement) => void, ECharts | undefined, boolean]

export type UseEChartsOptions = {
  theme?: Parameters<typeof init>[1]
} & Parameters<typeof init>[2] & {
    use?: Parameters<typeof use>[0]
  }

export const useECharts: UseECharts = ({
  theme,
  devicePixelRatio,
  height,
  locale,
  pointerSize,
  renderer,
  useCoarsePointer,
  useDirtyRect,
  width,
  use: useProps
}: UseEChartsOptions) => {
  const containerRef = useRef<HTMLDivElement>()
  const echartsRef = useRef<ECharts>()
  const resizeObserverRef = useRef<ResizeObserver>()
  const [started, setStarted] = useState(false)

  async function setContainerRef(node: HTMLDivElement) {
    if (containerRef.current && echartsRef.current) return

    containerRef.current = node
    echartsRef.current = await startEcharts()
    resizeObserverRef.current = startResizeObserver()

    setStarted(true)
  }

  async function startEcharts() {
    if (!containerRef.current) return

    const useArgs = useProps || (await getGlobalUse())

    use(useArgs)

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

  return [setContainerRef, echartsRef.current, started]
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
