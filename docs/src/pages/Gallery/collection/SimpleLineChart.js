"use strict";

export const SimpleLineChart = {
  label: "Simple Line Chart",
  background: "linear-gradient(to bottom, red, yellow)",
  code: `
    <LineChart
      height={'100%'}
      smooth
      tooltip={{ show: true }}
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
  `,
};
