import { init, use as echartsUse, type ECharts } from 'echarts/core'
import type { UseEChartsOptions } from '../use-echarts'

export async function getGlobalUse() {
	const modules = [
		import('echarts/features'),
		import('echarts/charts'),
		import('echarts/components'),
		import('echarts/renderers')
	]

	const loadedModules = await Promise.all(
		modules.map((m) => m.then((m) => Object.values(m)))
	)

	return loadedModules.flat()
}

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

	return init(container, theme, {
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

	const useOpts = options.use || (await getGlobalUse())
	echartsUse(useOpts)

	return initializeECharts(container, options)
}
