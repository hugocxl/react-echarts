// Hooks
import { useECharts } from './use-echarts'

// Types
import type { EChartsEventProp } from './events'
import type { UseEChartsOptions } from './use-echarts'
import type { FC, HTMLAttributes } from 'react'

export type EChartProps = UseEChartsOptions &
	Omit<
		HTMLAttributes<HTMLDivElement>,
		keyof UseEChartsOptions | EChartsEventProp
	>

/**
 * EChart component that wraps ECharts functionality in a React component
 *
 * @example
 * ```tsx
 * <EChart
 *   style={{ height: '400px' }}
 *   xAxis={{ type: 'category', data: ['A', 'B', 'C'] }}
 *   yAxis={{ type: 'value' }}
 *   series={[{ type: 'bar', data: [1, 2, 3] }]}
 * />
 * ```
 */
export const EChart: FC<EChartProps> = ({
	// Initialization options
	devicePixelRatio,
	height,
	locale,
	pointerSize,
	renderer,
	theme,
	use,
	useCoarsePointer,
	useDirtyRect,
	width,

	// ECharts instance options
	group,

	// SetOption options
	lazyUpdate,
	notMerge,
	replaceMerge,
	silent,
	transition,
	darkMode,
	media,
	options,
	stateAnimation,

	// Chart options
	angleAxis,
	animation,
	animationDelay,
	animationDelayUpdate,
	animationDuration,
	animationDurationUpdate,
	animationEasing,
	animationEasingUpdate,
	animationThreshold,
	aria,
	axisPointer,
	backgroundColor,
	blendMode,
	brush,
	calendar,
	color,
	dataZoom,
	dataset,
	geo,
	graphic,
	grid,
	hoverLayerThreshold,
	legend,
	parallel,
	parallelAxis,
	polar,
	progressive,
	progressiveThreshold,
	radar,
	radiusAxis,
	series,
	singleAxis,
	textStyle,
	timeline,
	title,
	toolbox,
	tooltip,
	useUTC,
	visualMap,
	xAxis,
	yAxis,

	// Event handlers
	onAxisAreaSelected,
	onBrush,
	onBrushEnd,
	onBrushSelected,
	onClick,
	onContextMenu,
	onDataRangeSelected,
	onDataViewChanged,
	onDataZoom,
	onDoubleClick,
	onDownplay,
	onFinished,
	onGeoSelectChanged,
	onGeoSelected,
	onGeoUnselected,
	onGlobalCursorTaken,
	onGlobalOut,
	onHighlight,
	onLegendInverseSelect,
	onLegendScroll,
	onLegendSelectChanged,
	onLegendSelected,
	onLegendUnselected,
	onMagicTypeChanged,
	onMouseDown,
	onMouseMove,
	onMouseOut,
	onMouseOver,
	onRendered,
	onRestore,
	onSelectChanged,
	onTimelineChanged,
	onTimelinePlayChanged,

	...rest
}) => {
	// Use ECharts hook
	const [ref] = useECharts<HTMLDivElement>({
		// Initialization options
		devicePixelRatio,
		height,
		locale,
		pointerSize,
		renderer,
		theme,
		use,
		useCoarsePointer,
		useDirtyRect,
		width,

		// ECharts instance options
		group,

		// SetOption options
		lazyUpdate,
		notMerge,
		replaceMerge,
		silent,
		transition,
		darkMode,
		media,
		options,
		stateAnimation,

		// Chart options
		angleAxis,
		animation,
		animationDelay,
		animationDelayUpdate,
		animationDuration,
		animationDurationUpdate,
		animationEasing,
		animationEasingUpdate,
		animationThreshold,
		aria,
		axisPointer,
		backgroundColor,
		blendMode,
		brush,
		calendar,
		color,
		dataZoom,
		dataset,
		geo,
		graphic,
		grid,
		hoverLayerThreshold,
		legend,
		parallel,
		parallelAxis,
		polar,
		progressive,
		progressiveThreshold,
		radar,
		radiusAxis,
		series,
		singleAxis,
		textStyle,
		timeline,
		title,
		toolbox,
		tooltip,
		useUTC,
		visualMap,
		xAxis,
		yAxis,

		// Event handlers
		onAxisAreaSelected,
		onBrush,
		onBrushEnd,
		onBrushSelected,
		onClick,
		onContextMenu,
		onDataRangeSelected,
		onDataViewChanged,
		onDataZoom,
		onDoubleClick,
		onDownplay,
		onFinished,
		onGeoSelectChanged,
		onGeoSelected,
		onGeoUnselected,
		onGlobalCursorTaken,
		onGlobalOut,
		onHighlight,
		onLegendInverseSelect,
		onLegendScroll,
		onLegendSelectChanged,
		onLegendSelected,
		onLegendUnselected,
		onMagicTypeChanged,
		onMouseDown,
		onMouseMove,
		onMouseOut,
		onMouseOver,
		onRendered,
		onRestore,
		onSelectChanged,
		onTimelineChanged,
		onTimelinePlayChanged
	})

	// Render the component
	return <div {...rest} ref={ref} />
}
