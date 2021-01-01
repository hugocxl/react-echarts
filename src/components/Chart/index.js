'use strict'

import { ReactEchartsCore } from 'lib'
import { withSkeleton, withLoading } from 'HOC'
import { compose } from 'utils'

export const Chart = (props) => {
  return compose(withSkeleton, withLoading)(ReactEchartsCore)
}

Chart.defaultProps = {
  style: {},
  className: '',
  height: null,
  width: null,

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
