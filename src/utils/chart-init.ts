import type { ECharts } from 'echarts/core'
import type { UseEChartsOptions } from '../use-echarts'

export function initializeECharts<T extends HTMLElement>(
	container: T,
	options: UseEChartsOptions
) {
	const {
		theme,
		devicePixelRatio,
		height,
		locale,
		pointerSize,
		renderer,
		useCoarsePointer,
		useDirtyRect,
		width
	} = options

	return options.init(container, theme, {
		devicePixelRatio,
		height,
		locale,
		pointerSize,
		renderer,
		useCoarsePointer,
		useDirtyRect,
		width
	})
}

export async function setupECharts<T extends HTMLElement>(
	container: T,
	options: UseEChartsOptions
): Promise<ECharts | undefined> {
	if (!container) return
	return initializeECharts(container, options)
}
