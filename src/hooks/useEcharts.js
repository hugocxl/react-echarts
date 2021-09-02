'use strict'

import {
  connect,
  disconnect,
  getInstanceByDom,
  getInstanceById,
  getMap,
  registerMap,
  registerTheme,
  registerAction,
  registerCoordinateSystem
} from 'echarts'

export function useEcharts () {
  return {
    connect,
    disconnect,
    registerMap,
    registerTheme,
    registerAction,
    registerCoordinateSystem,
    getInstanceByDom,
    getInstanceById,
    getMap
  }
}
