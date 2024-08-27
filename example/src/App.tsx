import { useState } from 'react'
import { EChart } from '@kbox-labs/react-echarts'
import { data } from './data'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div style={{ width: '100dvw', height: '100dvh' }}>
			<span>{count}</span>

			<button type={'button'} onClick={() => setCount((prev) => prev + 1)}>
				click
			</button>
			<EChart
				renderer='canvas'
				style={{ width: '100%', height: '800px' }}
				xAxis={{
					type: 'time'
				}}
				yAxis={{
					type: 'value',
					scale: true
				}}
				dataset={data.datasets}
				series={[
					{ type: 'scatter', datasetIndex: 0, name: '2016' },
					{ type: 'scatter', datasetIndex: 1, name: '2017' },
					{ type: 'scatter', datasetIndex: 2, name: '2018' },
					{ type: 'scatter', datasetIndex: 3, name: '2019' },
					{ type: 'scatter', datasetIndex: 4, name: '2020' },
					{
						type: 'line',
						datasetIndex: 5,
						name: 'Polynomial Regression',
						showSymbol: false
					},
					{ type: 'line', datasetIndex: 6, name: 'Mean', showSymbol: false }
				]}
				grid={{
					top: 50,
					bottom: 150
				}}
				legend={{
					data: data.series.map((s) => s.name),
					bottom: 0
				}}
				tooltip={{
					trigger: 'item',
					axisPointer: {
						type: 'cross'
					}
				}}
				toolbox={{
					show: true,
					feature: {
						dataZoom: {
							yAxisIndex: 'none'
						},
						restore: {}
					}
				}}
				title={{
					show: true,
					text: 'Audi Q7 Prices',
					left: 'center'
				}}
				dataZoom={[
					{
						type: 'slider',
						show: true,
						xAxisIndex: [0],
						start: 0,
						end: 35,
						bottom: 80
					},
					{
						type: 'slider',
						show: true,
						yAxisIndex: [0],
						left: '93%',
						start: 0,
						end: 35000
					},
					{
						type: 'inside',
						xAxisIndex: [0],
						start: 0,
						end: 35
					},
					{
						type: 'inside',
						yAxisIndex: [0],
						start: 0,
						end: 35000,
						zoomOnMouseWheel: 'shift'
					}
				]}
			/>
		</div>
	)
}

export default App
