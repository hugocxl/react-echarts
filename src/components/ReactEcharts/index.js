import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import { pick } from 'utils'
import cx from 'classnames'

function isEqual (a, b) {
  return JSON.stringify(a) !== JSON.stringify(b)
}

export class ReactEcharts extends Component {
  constructor (props) {
    super(props)
    this.echartsLib = echarts
    this.echartsInstance = null
    this.containerRef = null
  }

  componentDidMount () {
    const { onEvents, onChartReady } = this.props
    this.startEchartsInstance()

    //
    this.startResizeObserver()
    this.bindEchartsEvents(this.echartsInstance, this.props.onEvents)
    this.renderDOM()
  }

  componentWillUnmount () {
    this.disposeEchartsInstance()
  }

  disposeEchartsInstance = () => {
    this.echartsLib.dispose(this.containerRef)
  }

  startEchartsInstance = () => {
    this.echartsInstance = this.echartsLib.init(this.containerRef,
      this.props.theme,
      this.props.opts)
  }

  startResizeObserver = () => {
    const ro = new ResizeObserver(() => {
      this.echartsInstance.resize()
    })

    ro.observe(this.containerRef)
  }

  componentDidUpdate (prevProps) {
    if (
      typeof this.props.shouldComponentUpdate === 'function' &&
      !this.props.shouldComponentUpdate(prevProps, this.props)
    ) {
      return
    }

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

  bindEchartsEvents = (instance, events = {}) => {
    const _bindEvent = (eventName, func) => {
      if (typeof eventName === 'string' && typeof func === 'function') {
        instance.on(eventName, (param) => {
          func(param, instance)
        })
      }
    }

    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _bindEvent(eventName, events[eventName])
      }
    }
  }

  renderDOM = () => {
    this.echartsInstance.setOption(this.props.option,
      this.props.notMerge,
      this.props.lazyUpdate)
  }

  renderLoading = () => {
    if (this.props.showLoading) {
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
  shouldComponentUpdate: null,
  // shouldSetOption: () => true,
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  onChartReady: () => {},
  showLoading: false,
  loadingOption: null,
  onEvents: {},
  opts: {}
}
