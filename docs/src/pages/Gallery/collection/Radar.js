"use strict";

export const Radar_example = {
  label: "Radar",
  subLabel: "<RadarChart />",
  id: "radar",
  style: {
    background: "rgb(250, 247, 233)",
    color: "orange",
  },
  code: `
  function Radar() {
  const data = [
    [55, 9, 56, 0.46, 18, 6, 1],
    [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3],
    [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5],
    [82, 58, 90, 1.77, 68, 33, 6],
    [74, 49, 77, 1.46, 48, 27, 7],
    [78, 55, 80, 1.29, 59, 29, 8],
    [267, 216, 280, 4.8, 108, 64, 9],
    [185, 127, 216, 2.52, 61, 27, 10],
    [39, 19, 38, 0.57, 31, 15, 11],
  ];

  return (
    <RadarChart
      series={[
        {
          name: "Radar example",
          type: "radar",
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          data,
          symbol: "none",
          itemStyle: {
            color: "#F9713C",
          },
          areaStyle: {
            opacity: 0.1,
          },
        },
      ]}
      radar={{
        indicator: [
          { name: "AQI", max: 300 },
          { name: "PM2.5", max: 250 },
          { name: "PM10", max: 300 },
          { name: "CO", max: 5 },
          { name: "NO2", max: 200 },
          { name: "SO2", max: 100 },
        ],
        shape: "circle",
        splitNumber: 5,
        name: {
          textStyle: {
            color: "rgb(238, 197, 102)",
          },
        },
        splitLine: {
          lineStyle: {
            color: [
              "rgba(238, 197, 102, 0.1)",
              "rgba(238, 197, 102, 0.2)",
              "rgba(238, 197, 102, 0.4)",
              "rgba(238, 197, 102, 0.6)",
              "rgba(238, 197, 102, 0.8)",
              "rgba(238, 197, 102, 1)",
            ].reverse(),
          },
        },
        splitArea: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(238, 197, 102, 0.5)",
          },
        },
      }}
    />
  );
}

  `,
};
