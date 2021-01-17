"use strict";

export const Dots_example = {
  label: "Dots",
  subLabel: "<ScatterChart />",
  id: "dots",
  style: {
    background:
      "linear-gradient(to bottom, rgba(56,248,249,1) -9.1%, rgba(213,141,240,1) 48%, rgba(249,56,152,1) 111.1% )",
    color: "white",
  },
  code: `
    function Dots() {
      const maxSeries = 10;
      const seriesItems = 10;
      const maxValue = 100;
      const series = [];

      for (let i = 0; i < maxSeries; i++) {
        let serie = {
          symbolSize: 10,
          itemStyle: { color: "white" },
          data: [],
        };

        for (let j = 0; j < seriesItems; j++) {
          serie.data.push([
            Math.random() * maxValue * i,
            Math.random() * maxValue * i,
          ]);
        }

        series.push(serie);
      }

      return (
        <ScatterChart
          xAxis={{ show: false }}
          yAxis={{ show: false }}
          series={series}
        />
      );
    }
  `,
};
