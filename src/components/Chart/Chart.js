// Dependencies
import * as echarts from 'echarts'
import React, { Component, createRef } from 'react'

// Constants
import { optionKeys, defaultProps, eventsKeys } from 'src/constants'

export class Chart extends Component {
  constructor(props) {
    super(props)
    this.echartsLib = echarts
    this.echartsInstance = null
    this.containerRef = createRef()
    this.resizeObserver = null
  }

  shouldComponentUpdate(prevProps) {
    return this.props.shouldComponentUpdate(prevProps, this.props)
  }

  componentDidMount() {
    this.setEchartsInstance()
    this.setResizeObserver()
    this.setEchartsEvents()
    this.renderEchart()

    if (this.props.onMount) {
      this.props.onMount(this)
    }

    if (this.props.getRef) {
      this.props.getRef(this.containerRef.current)
    }

    if (this.props.getInstance) {
      this.props.getInstance(this.echartsInstance)
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.notMerge !== this.props.notMerge ||
      !prevProps.replaceMerge !== this.props.replaceMerge ||
      !prevProps.lazyUpdate !== this.props.lazyUpdate ||
      !prevProps.theme !== this.props.theme ||
      !prevProps.silent !== this.props.silent ||
      !prevProps.transition !== this.props.transition
    ) {
      return this.renderEchart()
    }

    if (
      prevProps.className !== this.props.className ||
      JSON.stringify(prevProps.style) !== JSON.stringify(this.props.style)
    ) {
      return this.echartsInstance.resize()
    }

    if (this.props.onUpdate) {
      this.props.onUpdate(this)
    }
  }

  componentWillUnmount() {
    this.disposeEchartsInstance()
    this.resizeObserver.unobserve(this.containerRef.current)
    this.resizeObserver.disconnect()

    if (this.props.onUnmount) {
      this.props.onUnmount(this)
    }
  }

  getDerivedOptionFromProps = () => {
    const propsOption = {}

    optionKeys.forEach((key) => {
      if (this.props[key]) propsOption[key] = this.props[key]
    })

    return propsOption
  }

  disposeEchartsInstance = () => {
    this.echartsLib.dispose(this.containerRef.current)
    this.echartsInstance = null
  }

  setEchartsInstance = () => {
    this.echartsInstance = this.echartsLib.init(
      this.containerRef.current,
      this.props.theme,
      {
        renderer: this.props.renderer,
      }
    )

    if (this.props.group) {
      this.echartsInstance.group = this.props.group
    }
  }

  setResizeObserver = () => {
    this.resizeObserver = new window.ResizeObserver(() => {
      this.echartsInstance?.resize()
    })

    this.resizeObserver.observe(this.containerRef.current)
  }

  setEchartsEvents = () => {
    eventsKeys.forEach(({ event, prop }) => {
      this.echartsInstance.on(event, this.props[prop])
    })
  }

  renderEchart = () => {
    const option = this.props.option || this.getDerivedOptionFromProps()

    this.echartsInstance.clear()
    this.echartsInstance.setOption(option, {
      notMerge: this.props.notMerge,
      replaceMerge: this.props.replaceMerge,
      lazyUpdate: this.props.lazyUpdate,
      silent: this.props.silent,
      transition: this.props.transition,
    })
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        id={this.props.id}
        className={'react_echarts' + ` ${this.props.className}`}
        style={{
          height: '200px',
          width: '100%',
          ...this.props.style,
        }}
      />
    )
  }
}

Chart.defaultProps = defaultProps
