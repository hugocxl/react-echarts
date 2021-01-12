'use strict'

// Dependencies
import React, { Component, createRef } from 'react'

import * as echarts from 'echarts/lib/echarts'

// Import series types
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/treemap'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/sunburst'
import 'echarts/lib/chart/graph'
import 'echarts/lib/chart/effectScatter'

// Import components
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markArea'
import 'echarts/lib/component/timeline'
import 'echarts/lib/component/toolbox'

import 'zrender/lib/svg/svg'

// Utils
import { isEqual } from 'utils'

export class ReactEchartsCore extends Component {
  constructor (props) {
    super(props)
    this.echartsLib = echarts
    this.echartsInstance = null
    this.containerRef = createRef()
  }

  shouldComponentUpdate (prevProps) {
    return this.props.shouldUpdate(prevProps, this.props)
  }

  componentDidMount () {
    const { onMount, getInstance, getRef } = this.props

    this.setEchartsInstance()
    this.setResizeObserver()
    this.setEchartsEvents()
    this.renderEchart()

    if (onMount) {
      onMount(this)
    }

    if (getInstance) {
      getInstance(this.echartsInstance)
    }

    if (getRef) {
      getRef(this.containerRef.current)
    }
  }

  componentDidUpdate (prevProps) {
    if (
      !isEqual(prevProps.lazyUpdate, this.props.lazyUpdate) ||
      !isEqual(prevProps.notMerge, this.props.notMerge) ||
      !isEqual(prevProps.option, this.props.option) ||
      !isEqual(prevProps.theme, this.props.theme) ||
      !isEqual(prevProps.options, this.props.options) ||
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

    if (this.props.onUnmount) {
      this.props.onUnmount(this)
    }
  }

  disposeEchartsInstance = () => {
    this.echartsLib.dispose(this.containerRef.current)
    this.echartsInstance = null
  }

  setEchartsInstance = () => {
    const { theme, group, renderer = 'svg' } = this.props

    this.echartsInstance = this.echartsLib.init(this.containerRef.current,
      theme,
      {
        renderer
      })

    if (group) {
      this.echartsInstance.group = group
    }
  }

  setResizeObserver = () => {
    const resizeObserver = new ResizeObserver(() => {
      this.echartsInstance?.resize()
    })

    resizeObserver.observe(this.containerRef.current)
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
    this.echartsInstance.on('brush', this.props.onBrush)
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
    const { style, className, id, height, width } = this.props

    return (
      <div
        ref={this.containerRef}
        style={{ height, width, ...style }}
        id={id}
        className={'react-echarts' + ` ${className}`}
      />
    )
  }
}
