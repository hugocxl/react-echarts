'use strict'

// Dependencies
import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import cx from 'classnames'

// Utils
import { isEqual } from 'utils'

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
    this.registerEchartsEvents()
    this.renderLoading()
    this.renderDOM()
  }

  shouldComponentUpdate (prevProps) {
    return this.props.shouldComponentUpdate(prevProps, this.props)
  }

  componentWillUnmount () {
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

  registerEchartsEvents = () => {
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
  getInstance: null,

  // Events register
  onClick: null,
  onDoubleClick: null,
  onMouseDown: null,
  onMouseMove: null,
  onMouseUp: null,
  onMouseOver: null,
  onMouseOut: null,
  onGlobalOut: null,
  onContextMenu: null
}
