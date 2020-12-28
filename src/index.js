import * as echarts from 'echarts'
import EchartsReactCore from './core'

// export the Component the echarts Object.
export default class ReactEcharts extends EchartsReactCore {
  constructor (props) {
    super(props)
    this.echartsLib = echarts
  }
}

export const Test = () => 'hola'
export const Tes2 = () => 'hola'
