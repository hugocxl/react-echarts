'use strict'

// Dependencies
import React, { Component } from 'react'
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
    this.containerRef = null
  }

  componentDidMount () {
    this.setEchartsInstance()
    this.setResizeObserver()
    this.registerEchartsEvents()
    this.renderDOM()

    if (this.props.onMount) {
      this.props.onMount(this)
    }
  }

  shouldComponentUpdate (prevProps) {
    return this.props.shouldComponentUpdate(prevProps, this.props)
  }

  componentWillUnmount () {
    this.disposeEchartsInstance()

    if (this.props.onUnmount) {
      this.props.onUnmount(this)
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
      return this.renderDOM()
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
    this.echartsLib.dispose(this.containerRef)
  }

  setEchartsInstance = () => {
    this.echartsInstance = this.echartsLib.init(this.containerRef,
      this.props.theme,
      this.props.options)

    if (this.props.group) {
      this.echartsInstance.group = this.props.group
    }
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

    this.echartsInstance.on('click', this.props.onClick)
    this.echartsInstance.on('dbclick', this.props.onDoubleClick)
    this.echartsInstance.on('mousedown', this.props.onMouseDown)
    this.echartsInstance.on('mousemove', this.props.onMouseMove)
    this.echartsInstance.on('mouseover', this.props.onMouseOver)
    this.echartsInstance.on('mouseout', this.props.onMouseOut)
    this.echartsInstance.on('globalout', this.props.onGlobalOut)
    this.echartsInstance.on('contextMenu', this.props.onContextMenu)
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

  renderDOM = () => {
    this.echartsInstance.setOption(this.props.option,
      this.props.notMerge,
      this.props.lazyUpdate)
  }

  renderLoader = () => {
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
      <div
        ref={(ref) => (this.containerRef = ref)}
        style={style}
        id={id}
        className={cx('react-echarts', className)}
      >
        {useSkeleton && isMounting && this.renderSkeleton()}
        {useLoading && isLoading && this.renderLoader()}
      </div>
    )
  }
}

ReactEcharts.defaultProps = {
  style: {},
  className: '',
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  loadingOption: null,
  onEvents: {},
  on: null,
  // options: {
  //   renderer: 'svg'
  // },
  group: null,

  // External added props
  useSkeleton: true,
  skeletonComponent: null,
  isMounting: false,
  useLoading: true,
  loadingComponent: null,
  isLoading: false,
  onMount: null,
  onUnmount: null,
  onUpdate: null,
  shouldComponentUpdate: () => true,

  getInstance: null,
  echartsRef: null,

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
