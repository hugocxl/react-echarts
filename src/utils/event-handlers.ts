import type { ECharts } from 'echarts/core'
import type { EChartsEvent, EChartsEventProp } from '../events'
import type { UseEChartsOptions } from '../use-echarts'

// Map event names to their prop names
const eventMap: Record<EChartsEvent, EChartsEventProp> = {
	axisareaselected: 'onAxisAreaSelected',
	brush: 'onBrush',
	brushend: 'onBrushEnd',
	brushselected: 'onBrushSelected',
	click: 'onClick',
	contextmenu: 'onContextMenu',
	datarangeselected: 'onDataRangeSelected',
	dataviewchanged: 'onDataViewChanged',
	datazoom: 'onDataZoom',
	dblclick: 'onDoubleClick',
	downplay: 'onDownplay',
	finished: 'onFinished',
	geoselectchanged: 'onGeoSelectChanged',
	geoselected: 'onGeoSelected',
	geounselected: 'onGeoUnselected',
	globalcursortaken: 'onGlobalCursorTaken',
	globalout: 'onGlobalOut',
	highlight: 'onHighlight',
	legendinverseselect: 'onLegendInverseSelect',
	legendscroll: 'onLegendScroll',
	legendselectchanged: 'onLegendSelectChanged',
	legendselected: 'onLegendSelected',
	legendunselected: 'onLegendUnselected',
	magictypechanged: 'onMagicTypeChanged',
	mousedown: 'onMouseDown',
	mousemove: 'onMouseMove',
	mouseout: 'onMouseOut',
	mouseover: 'onMouseOver',
	rendered: 'onRendered',
	restore: 'onRestore',
	selectchanged: 'onSelectChanged',
	timelinechanged: 'onTimelineChanged',
	timelineplaychanged: 'onTimelinePlayChanged'
} as const

// Clear all existing event listeners
function clearEventListeners(instance: ECharts) {
	for (const eventName of Object.keys(eventMap)) {
		instance.off(eventName)
	}
}

// Setup new event listeners based on provided options
export function setupEventHandlers(
	instance: ECharts,
	options: UseEChartsOptions
) {
	// Clear existing listeners to prevent duplicates
	clearEventListeners(instance)

	for (const [eventName, propName] of Object.entries(eventMap)) {
		const handler = options[propName]
		if (typeof handler === 'function') {
			instance.on(eventName as EChartsEvent, handler)
		}
	}
}
