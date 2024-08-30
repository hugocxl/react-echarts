import { useState } from 'react'
import { EChart } from '@kbox-labs/react-echarts'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
	TitleComponent,
	TooltipComponent,
	GridComponent
} from 'echarts/components'

function App() {
	const [count, setCount] = useState(6)

	return (
		<div style={{ width: '100dvw', height: '100dvh' }}>
			<span>{count}</span>

			<button type={'button'} onClick={() => setCount((prev) => prev + 1)}>
				click
			</button>

			<EChart
				animation={true}
				animationDelay={1000}
				animationDuration={100}
				animationDelayUpdate={1000}
				use={[
					LineChart,
					TitleComponent,
					TooltipComponent,
					GridComponent,
					CanvasRenderer
				]}
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
						data: Array.from({ length: 7 }, () =>
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
