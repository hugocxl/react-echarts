// Dependencies
import { EChartOption } from 'echarts'

export enum EChartEvents {
  onClick = 'click',
  onDoubleClick = 'dblclick',
  onMouseDown = 'mousedown',
  onMouseMove = 'mousemove',
  onMouseOver = 'mouseover',
  onMouseOut = 'mouseout',
  onGlobalOut = 'globalout',
  onContextMenu = 'contextmenu',
  onHighlight = 'highlight',
  onDownplay = 'downplay',
  onSelectChanged = 'selectchanged',
  onLegendSelectChanged = 'legendsselectchanged',
  onLegendSelected = 'legendselected',
  onLegendUnselected = 'legendunselected',
  onLegendInverseSelect = 'legendinverseselect',
  onLegendScroll = 'legendscroll',
  onDataZoom = 'datazoom',
  onDataRangeSelected = 'datarangeselected',
  onTimelineChanged = 'timelinechanged',
  onTimelinePlayChanged = 'timelineplaychanged',
  onRestore = 'restore',
  onDataViewChanged = 'dataviewchanged',
  onMagicTypeChanged = 'magictypechanged',
  onGeoSelectChanged = 'geoselectchanged',
  onGeoSelected = 'geoselected',
  onGeoUnselected = 'geounselected',
  onAxisAreaSelected = 'axisareaselected',
  onFocusNodeadJacency = 'focusnodeadjacency',
  onUnfocusNodeAdjacency = 'unfocusnodeadjacency',
  onBrush = 'brush',
  onBrushEnd = 'brushend',
  onBrushSelected = 'brushselected',
  onGlobalCursorTaken = 'globalcursortaken',
  onRendered = 'rendered',
  onFinished = 'finished',
}

type EChartEventsProps = {
  [event in keyof EChartEvents]: () => void
}

export interface EChartInstanceOptions {
  notMerge?: boolean
  lazyUpdate?: boolean
  replaceMerge?: boolean
  silent?: boolean
  transition?: null
  theme?: string
  group?: string
  renderer?: 'svg' | 'canvas'
}

export interface EChartLibProps
  extends EChartInstanceOptions,
    EChartOption,
    EChartEventsProps {}
