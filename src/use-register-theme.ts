import { registerTheme } from 'echarts'
import { useEffect } from 'react'

type UseRegisterTheme = (
  options: {
    themeName: Parameters<typeof registerTheme>[0]
    theme: Parameters<typeof registerTheme>[1]
    enabled?: boolean
  },
  deps: unknown[]
) => void

export const useRegisterTheme: UseRegisterTheme = (
  { themeName, theme, enabled = true },
  deps = []
) => {
  useEffect(() => {
    if (enabled) registerTheme(themeName, theme)
  }, [...deps, enabled])
}
