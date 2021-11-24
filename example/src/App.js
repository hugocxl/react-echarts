import "./App.css";
import { Chart } from "@hcorta/react-echarts";
import * as echarts from "echarts";

echarts.registerTheme("test", {
  color: [
    "red",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3",
  ],
});

export default function App() {
  const series = [
    {
      type: "line",
      smooth: 0.6,
      symbol: "none",
      lineStyle: {
        color: "#5470C6",
        width: 3,
      },
      data: [
        ["2019-10-10", 200],
        ["2019-10-11", 560],
        ["2019-10-12", 750],
        ["2019-10-17", 300],
        ["2019-10-18", 100],
      ],
    },
  ];

  return (
    <div className="App">
      <Chart
        // style={{ height: 230 }}
        theme={"test"}
        group={"echarts__example"}
        className={"my__example"}
        onMount={(props) => console.log("Mounted!", props)}
        getInstance={(instance) => console.log("Instance!", instance)}
        getRef={(ref) => console.log("Ref!", ref)}
        xAxis={{
          type: "category",
          boundaryGap: false,
        }}
        yAxis={{
          type: "value",
          boundaryGap: [0, "30%"],
        }}
        series={series}
      />
    </div>
  );
}
