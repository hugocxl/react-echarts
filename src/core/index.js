'use strict'

// Dependencies
import * as echarts from 'echarts'
import React, { Component, createRef } from 'react'

// Utils
import { isEqual, getOptionFromProps } from 'utils'

// Constants
import { defaultProps } from 'constants'

// Styles
import '../styles/index.css'

class ReactEchartsCore extends Component {
  constructor (props) {
    super(props)
    this.echartsLib = echarts
    this.echartsInstance = null
    this.containerRef = createRef()
    this.resizeObserver = null
  }

  shouldComponentUpdate (prevProps) {
    return this.props.shouldComponentUpdate(prevProps, this.props)
  }

  componentDidMount () {
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

  componentDidUpdate (prevProps) {
    if (
      !isEqual(prevProps.lazyUpdate, this.props.lazyUpdate) ||
      !isEqual(prevProps.notMerge, this.props.notMerge) ||
      !isEqual(prevProps.option, this.props.option) ||
      !isEqual(prevProps.theme, this.props.theme) ||
      !isEqual(prevProps.option, this.props.option) ||
      !isEqual(prevProps.onEvents, this.props.onEvents)
    ) {
      return this.renderEchart()
    }

    if (
      !isEqual(prevProps.style, this.props.style) ||
      !isEqual(prevProps.className, this.props.className)
    ) {
      return this.echartsInstance.resize()
    }

    if (this.props.onUpdate) {
      this.props.onUpdate(this)
    }
  }

  componentWillUnmount () {
    this.disposeEchartsInstance()
    this.resizeObserver.unobserve(this.containerRef.current)
    this.resizeObserver.disconnect()

    if (this.props.onUnmount) {
      this.props.onUnmount(this)
    }
  }

  disposeEchartsInstance = () => {
    this.echartsLib.dispose(this.containerRef.current)
    this.echartsInstance = null
  }

  setEchartsInstance = () => {
    this.echartsInstance = this.echartsLib.init(this.containerRef.current,
      this.props.theme,
      {
        renderer: this.props.renderer
      })

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
    this.echartsInstance.on('click', this.props.onClick)
    this.echartsInstance.on('dblclick', this.props.onDoubleClick)
    this.echartsInstance.on('mousedown', this.props.onMouseDown)
    this.echartsInstance.on('mousemove', this.props.onMouseMove)
    this.echartsInstance.on('mouseover', this.props.onMouseOver)
    this.echartsInstance.on('mouseout', this.props.onMouseOut)
    this.echartsInstance.on('globalout', this.props.onGlobalOut)
    this.echartsInstance.on('contextmenu', this.props.onContextMenu)
    this.echartsInstance.on('highlight', this.props.onHighlight)
    this.echartsInstance.on('downplay', this.props.onDownplay)
    this.echartsInstance.on('selectchanged', this.props.onSelectChanged)
    this.echartsInstance.on('legendsselectchanged',
      this.props.onLegendSelectChanged)
    this.echartsInstance.on('legendselected', this.props.onLegendSelected)
    this.echartsInstance.on('legendunselected', this.props.onLegendUnselected)
    this.echartsInstance.on('legendinverseselect',
      this.props.onLegendInverseSelect)
    this.echartsInstance.on('legendscroll', this.props.onLegendScroll)
    this.echartsInstance.on('datazoom', this.props.onDataZoom)
    this.echartsInstance.on('datarangeselected', this.props.onDataRangeSelected)
    this.echartsInstance.on('timelinechanged', this.props.onTimelineChanged)
    this.echartsInstance.on('timelineplaychanged',
      this.props.onTimelinePlayChanged)
    this.echartsInstance.on('restore', this.props.onRestore)
    this.echartsInstance.on('dataviewchanged', this.props.onDataViewChanged)
    this.echartsInstance.on('magictypechanged', this.props.onMagicTypeChanged)
    this.echartsInstance.on('geoselectchanged', this.props.onGeoSelectChanged)
    this.echartsInstance.on('geoselected', this.props.onGeoSelected)
    this.echartsInstance.on('geounselected', this.props.onGeoUnselected)
    this.echartsInstance.on('axisareaselected', this.props.onAxisAreaSelected)
    this.echartsInstance.on('focusnodeadjacency',
      this.props.onFocusNodeadJacency)
    this.echartsInstance.on('unfocusnodeadjacency',
      this.props.onUnfocusNodeAdjacency)
    this.echartsInstance.on('brush', this.props.onBrus2h)
    this.echartsInstance.on('brushend', this.props.onBrushEnd)
    this.echartsInstance.on('brushselected', this.props.onBrushSelected)
    this.echartsInstance.on('globalcursortaken', this.props.onGlobalCursorTaken)
    this.echartsInstance.on('rendered', this.props.onRendered)
    this.echartsInstance.on('finished', this.props.onFinished)
  }

  renderEchart = () => {
    this.echartsInstance.clear()
    this.echartsInstance.setOption(this.props.option, {
      notMerge: this.props.notMerge,
      replaceMerge: this.props.replaceMerge,
      lazyUpdate: this.props.lazyUpdate,
      silent: this.props.silent,
      transition: this.props.transition
    })
  }

  render () {
    return (
      <div
        ref={this.containerRef}
        style={this.props.style}
        id={this.props.id}
        className={'react-echarts' + ` ${this.props.className}`}
      />
    )
  }
}

export function Chart ({ option, ...rest }) {
  return (
    <ReactEchartsCore {...rest} option={option || getOptionFromProps(rest)} />
  )
}

Chart.defaultProps = defaultProps
