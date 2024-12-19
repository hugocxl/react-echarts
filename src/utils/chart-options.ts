import type { EChartsOption, SetOptionOpts } from 'echarts'

const conditionalProps = [
	// Animation properties
	'animation',
	'animationDelay',
	'animationDelayUpdate',
	'animationDuration',
	'animationDurationUpdate',
	'animationEasing',
	'animationEasingUpdate',
	'animationThreshold',

	// Axis properties
	'angleAxis',
	'axisPointer',
	'parallelAxis',
	'radiusAxis',
	'singleAxis',

	// Visual properties
	'backgroundColor',
	'blendMode',
	'color',
	'darkMode',
	'textStyle',
	'visualMap',

	// Chart components
	'aria',
	'brush',
	'calendar',
	'dataset',
	'dataZoom',
	'geo',
	'graphic',
	'grid',
	'legend',
	'media',
	'options',
	'parallel',
	'polar',
	'radar',
	'stateAnimation',
	'timeline',
	'title',
	'toolbox',
	'tooltip'
] as const

export const buildChartOptions = (props: EChartsOption): EChartsOption => {
	const baseOptions: EChartsOption = {
		series: props.series,
		useUTC: props.useUTC,
		xAxis: props.xAxis,
		yAxis: props.yAxis,
		progressive: props.progressive,
		blendMode: props.blendMode,
		hoverLayerThreshold: props.hoverLayerThreshold,
		progressiveThreshold: props.progressiveThreshold
	}

	for (const prop of conditionalProps) {
		if (props[prop]) {
			;(baseOptions as any)[prop] = props[prop]
		}
	}

	return baseOptions
}

export const getSetOptionConfig = (props: SetOptionOpts): SetOptionOpts => {
	return {
		lazyUpdate: props.lazyUpdate,
		notMerge: props.notMerge,
		replaceMerge: props.replaceMerge,
		silent: props.silent,
		transition: props.transition
	}
}
