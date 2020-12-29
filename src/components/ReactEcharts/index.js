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
    this.renderDOM()
  }

  shouldComponentUpdate (prevProps) {
    return this.props.shouldComponentUpdate(prevProps, this.props)
  }

  componentWillUnmount () {
    this.disposeEchartsInstance()
  }

  componentDidUpdate (prevProps) {
    this.renderLoading()

    const pickKeys = [
      'option',
      'notMerge',
      'lazyUpdate',
      'showLoading',
      'loadingOption'
    ]

    if (
      !isEqual(prevProps.theme, this.props.theme) ||
      !isEqual(prevProps.opts, this.props.opts) ||
      !isEqual(prevProps.onEvents, this.props.onEvents) ||
      !isEqual(pick(this.props, pickKeys), pick(prevProps, pickKeys))
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
      this.props.opts)
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
    } else this.echartsInstance.hideLoading()
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
//   opts: PropTypes.shape({
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
  // shouldSetOption: () => true,
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  onChartReady: () => {},
  isLoading: false,
  loadingOption: null,
  onEvents: {},
  on: null,
  opts: {}
}
