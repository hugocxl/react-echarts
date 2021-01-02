'use strict'

import {
  connect,
  disconnect,
  registerMap,
  registerTheme,
  registerAction,
  registerCoordinateSystem,
  dispose,
  getInstanceByDom,
  getInstanceById,
  getMap
} from 'echarts/lib/echarts'

export function useEcharts () {
  return {
    connect,
    disconnect,
    registerMap,
    registerTheme,
    registerAction,
    registerCoordinateSystem,
    dispose,
    getInstanceByDom,
    getInstanceById,
    getMap
  }
}
