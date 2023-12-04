import { disconnect } from 'echarts'
import { useEffect } from 'react'

type UseDisconnect = (
  options: {
    group: Parameters<typeof disconnect>[0]
    enabled?: boolean
  },
  deps: unknown[]
) => void

export const useDisconnect: UseDisconnect = (
  { group, enabled = true },
  deps = []
) => {
  useEffect(() => {
    if (enabled) disconnect(group)
  }, [...deps, enabled])
}
