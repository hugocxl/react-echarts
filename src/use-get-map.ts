import { getMap } from 'echarts'
import { useEffect, useState } from 'react'

type Map = ReturnType<typeof getMap>

type UseGetMap = (
  options: Parameters<typeof getMap>[0],
  deps: unknown[]
) => Map | undefined

export const useGetMap: UseGetMap = (opts, deps = []) => {
  const [map, setMap] = useState<Map>()

  useEffect(() => {
    const map = getMap(opts)

    setMap(map)
  }, [...deps])

  return map
}
