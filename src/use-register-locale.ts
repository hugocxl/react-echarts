import { registerLocale } from 'echarts'
import { useEffect } from 'react'

type UseRegisterLocale = (
  options: {
    locale: Parameters<typeof registerLocale>[0]
    localeCfg: Parameters<typeof registerLocale>[1]
    enabled?: boolean
  },
  deps: unknown[]
) => void

export const useRegisterLocale: UseRegisterLocale = (
  { locale, localeCfg, enabled = true },
  deps = []
) => {
  useEffect(() => {
    if (enabled) registerLocale(locale, localeCfg)
  }, [...deps, enabled])
}
