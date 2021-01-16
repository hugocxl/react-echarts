'use strict'

export const SimpleLineChart = {
  label: 'Simple Line Chart',
  code: `
   <div style={{background: 'linear-gradient(to bottom, red, yellow)'}}>
    <LineChart
      smooth
      tooltip={{ show: true }}
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
   </div>
  `,
}
