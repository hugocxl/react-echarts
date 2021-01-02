'use strict'

import { ReactEchartsCore } from 'core'
import { withSkeleton, withLoading } from 'HOC'
import { compose, getEchartsOption } from 'utils'

const ReactEcharts = compose(withSkeleton, withLoading)(ReactEchartsCore)

export const Chart = (props) => {
  const option = getEchartsOption(props)
  return <ReactEcharts {...props} option={option} />
}

Chart.defaultProps = {
  style: {},
  className: '',
  height: 280,
  width: '100%',

  notMerge: false,
  lazyUpdate: false,
  replaceMerge: null,
  silent: false,
  transition: null,
  theme: null,
  group: null,
  options: {},
  skeletonComponent: null,
  isMounting: false,
  loadingComponent: null,
  isLoading: false,
  shouldUpdate: () => true,
  getInstance: null,
  getRef: null,
  getEcharts: null,
  onMount: null,
  onUnmount: null,
  onUpdate: null,
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
