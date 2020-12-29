'use strict'

// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import cx from 'classnames'

// Utils
import { pick, isEqual } from 'utils'

export class ReactEcharts extends Component {
  constructor (props) {
    super(props)
    this.echartsLib = echarts
    this.echartsInstance = null
    this.containerRef = null
  }

  componentDidMount () {
    this.setEchartsInstance()
    this.setResizeObserver()
    this.bindEchartsEvents()
    this.renderLoading()
    this.renderDOM()
  }

  shouldComponentUpdate (prevProps) {
    return this.props.shouldComponentUpdate(prevProps, this.props)
  }

  componentWillUnmount () {
    console.log('UNMONUT')
    this.disposeEchartsInstance()
  }

  componentDidUpdate (prevProps) {
    if (!isEqual(prevProps.isLoading, this.props.isLoading)) {
      this.renderLoading()
    }

    if (
      !isEqual(prevProps.lazyUpdate, this.props.lazyUpdate) ||
      !isEqual(prevProps.notMerge, this.props.notMerge) ||
      !isEqual(prevProps.option, this.props.option) ||
      !isEqual(prevProps.theme, this.props.theme) ||
      !isEqual(prevProps.options, this.props.options) ||
      !isEqual(prevProps.onEvents, this.props.onEvents)
    ) {
      return this.renderDOM()
    }

    if (
      !isEqual(prevProps.style, this.props.style) ||
      !isEqual(prevProps.className, this.props.className)
    ) {
      return this.echartsInstance.resize()
    }
  }

  disposeEchartsInstance = () => {
    this.echartsLib.dispose(this.containerRef)
  }

  setEchartsInstance = () => {
    this.echartsInstance = this.echartsLib.init(this.containerRef,
      this.props.theme,
      this.props.options)
  }

  setResizeObserver = () => {
    const ro = new ResizeObserver(() => {
      this.echartsInstance.resize()
    })

    ro.observe(this.containerRef)
  }

  bindEchartsEvents = () => {
    const { onEvents, on } = this.props

    if (on) {
      this.echartsInstance.on(on)
    }

    for (const event in onEvents) {
      if (typeof event === 'string' && typeof onEvents[event] === 'function') {
        this.echartsInstance.on(event, (param) => {
          onEvents[event](param, this.echartsInstance)
        })
      }
    }
  }

  renderDOM = () => {
    this.echartsInstance.setOption(this.props.option,
      this.props.notMerge,
      this.props.lazyUpdate)
  }

  renderLoading = () => {
    if (this.props.isLoading) {
      this.echartsInstance.showLoading(this.props.loadingOption)
    }

    this.echartsInstance.hideLoading()
  }

  render () {
    const { style, className, id } = this.props

    return (
      <div
        ref={(ref) => (this.containerRef = ref)}
        style={style}
        id={id}
        className={cx('react-echarts', className)}
      />
    )
  }
}

// ReactEcharts.propTypes = {
//   option: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
//   echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   notMerge: PropTypes.bool,
//   lazyUpdate: PropTypes.bool,
//   style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   className: PropTypes.string,
//   theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   onChartReady: PropTypes.func,
//   showLoading: PropTypes.bool,
//   loadingOption: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   onEvents: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   options: PropTypes.shape({
//     devicePixelRatio: PropTypes.number,
//     renderer: PropTypes.oneOf(['canvas', 'svg']),
//     width: PropTypes.oneOfType([
//       PropTypes.number,
//       PropTypes.oneOf([null, undefined, 'auto'])
//     ]),
//     height: PropTypes.oneOfType([
//       PropTypes.number,
//       PropTypes.oneOf([null, undefined, 'auto'])
//     ])
//   }),
//   shouldSetOption: PropTypes.func
// }

ReactEcharts.defaultProps = {
  style: {},
  className: '',
  shouldComponentUpdate: () => true,
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  onChartReady: () => {},
  isLoading: false,
  loadingOption: null,
  onEvents: {},
  on: null,
  options: {
    renderer: 'svg'
  },

  // External added props
  echartsRef: null,
  onMount: null,
  onChange: null,

  // echarts option as props
  title: null,
  legend: null,
  grid: null,
  xAxis: null,
  yAxis: null,
  polar: null,
  radiusAxis: null,
  angleAxis: null,
  radar: null,
  dataZoom: null,
  visualMap: null,
  tooltip: null,
  axisPointer: null,
  toolbox: null,
  brush: null,
  geo: null,
  parallel: null,
  parallelAxis: null,
  singleAxis: null,
  timeline: null,
  graphic: null,
  calendar: null,
  dataset: null,
  aria: null,
  series: null,
  color: null,
  backgroundColor: null,
  textStyle: null,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: 'cubicOut',
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: 'cubicOut',
  animationDelayUpdate: 0,
  blendMode: 'source-over',
  hoverLayerThreshold: 3000,
  useUTC: false,
  media: null
}
