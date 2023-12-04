import { dispose } from 'echarts'
import { useEffect } from 'react'

type UseDispose = (
  options: {
    target: Parameters<typeof dispose>[0]
    enabled?: boolean
  },
  deps: unknown[]
) => void

export const useDispose: UseDispose = (
  { target, enabled = true },
  deps = []
) => {
  useEffect(() => {
    if (enabled) dispose(target)
  }, [...deps, enabled])
}
