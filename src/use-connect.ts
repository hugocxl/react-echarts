import { connect } from 'echarts'
import { useEffect } from 'react'

type UseConnect = (
  options: {
    group: Parameters<typeof connect>[0]
    enabled?: boolean
  },
  deps: unknown[]
) => void

export const useConnect: UseConnect = (
  { group, enabled = true },
  deps = []
) => {
  useEffect(() => {
    if (enabled) connect(group)
  }, [...deps, enabled])
}
