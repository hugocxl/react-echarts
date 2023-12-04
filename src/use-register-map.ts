import { registerMap } from 'echarts'
import { useEffect } from 'react'

type RegisterMapOptions = Parameters<typeof registerMap>

type UseRegisterMap = (
  options: {
    enabled?: boolean
    mapName: RegisterMapOptions[0]
    geoJson: RegisterMapOptions[1]
    specialAreas?: RegisterMapOptions[2]
  },
  deps: unknown[]
) => void

export const useRegisterMap: UseRegisterMap = (
  { enabled = true, ...opts },
  deps = []
) => {
  useEffect(() => {
    if (enabled) registerMap(opts.mapName, opts.geoJson, opts.specialAreas)
  }, [...deps, enabled])

  return registerMap
}
