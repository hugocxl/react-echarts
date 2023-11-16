import { getInstanceByDom } from 'echarts'
import { useEffect, useState } from 'react'

type Instance = ReturnType<typeof getInstanceByDom>

type UseGetInstanceByDom = (
  options: Parameters<typeof getInstanceByDom>[0],
  deps: unknown[]
) => Instance | undefined

export const useGetInstanceByDom: UseGetInstanceByDom = (opts, deps = []) => {
  const [instance, setInstance] = useState<Instance>()

  useEffect(() => {
    const instance = getInstanceByDom(opts)

    setInstance(instance)
  }, [...deps])

  return instance
}
