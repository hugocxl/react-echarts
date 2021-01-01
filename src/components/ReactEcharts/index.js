'use strict'

// Dependencies
import React, { Component, createRef } from 'react'
import { Skeleton, Loading } from 'components'
// import echarts from 'echarts/lib/echarts'
// import 'zrender/lib/svg/svg'
import * as echarts from 'echarts/dist/echarts.simple.js'
import cx from 'classnames'

// Utils
import { isEqual } from 'utils'

export class ReactEcharts extends Component {
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
    if (!this.props.isMounting) {
      this.start()
    }
  }

  componentDidUpdate (prevProps) {
    if (!this.echartsInstance && !this.props.isMounting) {
      this.start()
    } else {
      this.update()
    }
  }

  componentWillUnmount () {
    this.disposeEchartsInstance()

    if (this.props.onUnmount) {
      this.props.onUnmount(this)
    }
  }

  start = () => {
    const { onMount, getInstance, getRef, getEcharts } = this.props

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

    if (getEcharts) {
      getRef(this.echartsLib)
    }
  }

  update = (prevProps) => {
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

  disposeEchartsInstance = () => {
    this.echartsLib.dispose(this.containerRef.current)
  }

  setEchartsInstance = () => {
    const { theme, options, group } = this.props

    this.echartsInstance = this.echartsLib.init(this.containerRef.current,
      theme,
      options)

    if (group) {
      this.echartsInstance.group = group
    }
  }

  setResizeObserver = () => {
    const resizeObserver = new ResizeObserver(() => {
      this.echartsInstance.resize()
    })

    resizeObserver.observe(this.containerRef.current)
  }

  setEchartsEvents = () => {
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
    this.echartsInstance.setOption(this.props.option, {
      notMerge: this.props.notMerge,
      replaceMerge: this.props.replaceMerge,
      lazyUpdate: this.props.lazyUpdate,
      silent: this.props.silent,
      transition: this.props.transition
    })
  }

  renderLoading = () => {
    return this.props.loadingComponent || <Loading />
  }

  renderSkeleton = () => {
    return this.props.skeletonComponent || <Skeleton />
  }

  render () {
    const {
      style,
      className,
      id,
      useSkeleton,
      isMounting,
      useLoading,
      isLoading
    } = this.props

    return (
      <>
        {!isMounting && useLoading && isLoading && this.renderLoading()}

        <div
          ref={this.containerRef}
          style={style}
          id={id}
          className={cx('react-echarts', className)}
        />
      </>
    )
  }
}

ReactEcharts.defaultProps = {
  style: {},
  className: '',
  notMerge: false,
  lazyUpdate: false,
  replaceMerge: null,
  silent: false,
  transition: null,
  theme: null,
  group: null,
  // options: {
  //   renderer: 'svg'
  // },

  // External added props
  onEvents: {},
  on: null,
  useSkeleton: true,
  skeletonComponent: null,
  isMounting: false,
  useLoading: true,
  loadingComponent: null,
  isLoading: false,
  onMount: null,
  onUnmount: null,
  onUpdate: null,
  shouldUpdate: () => true,

  getInstance: null,
  getRef: null,
  getEcharts: null,

  // Events register
  onClick: null,
  onDoubleClick: null,
  onMouseDown: null,
  onMouseMove: null,
  onMouseUp: null,
  onMouseOver: null,
  onMouseOut: null,
  onGlobalOut: null,
  onContextMenu: null,
  onHighlight: null,
  onDownplay: null,
  onSelectChanged: null,
  onLegendSelectChanged: null,
  onLegendSelected: null,
  onLegendUnselected: null,
  onLegendSelectAll: null,
  onLegendInverseSelect: null,
  onLegendScroll: null,
  onDataZoom: null,
  onDataRangeSelected: null,
  onTimelineChanged: null,
  onTimelinePlayChanged: null,
  onRestore: null,
  onDataViewChanged: null,
  onMagicTypeChanged: null,
  onGeoSelectChanged: null,
  onGeoSelected: null,
  onGeoUnselected: null,
  onAxisAreaSelected: null,
  onFocusNodeadJacency: null,
  onUnfocusNodeAdjacency: null,
  onBrush: null,
  onBrushEnd: null,
  onBrushSelected: null,
  onGlobalCursorTaken: null,
  onRendered: null,
  onFinished: null
}
