import { useState } from 'react'
import { EChart } from '@kbox-labs/react-echarts'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
	TitleComponent,
	TooltipComponent,
	GridComponent
} from 'echarts/components'

import * as echarts from 'echarts/core'

echarts.use([
	LineChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	CanvasRenderer
])

function App() {
	const [count, setCount] = useState(0)

	return (
		<div style={{ width: '100dvw', height: '100dvh' }}>
			<span>{count}</span>

			<button type={'button'} onClick={() => setCount((prev) => prev + 1)}>
				click
			</button>

			<EChart
				init={echarts.init}
				group='group1'
				style={{
					height: '600px',
					width: '100%'
				}}
				xAxis={{
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}}
				yAxis={{
					type: 'value'
				}}
				series={[
					{
						data: Array.from({ length: count }, () =>
							Math.floor(Math.random() * 100)
						),
						type: 'line',
						areaStyle: {}
					}
				]}
			/>
		</div>
	)
}

export default App
