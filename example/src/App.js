import "./App.css";
import { Chart } from "@hcorta/react-echarts";
import { useEffect, useState } from "react";

function App() {
  const [series, setSeries] = useState([
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
  ]);

  useEffect(() => {
    setTimeout(() => {
      setSeries([
        {
          type: "bar",
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
      ]);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <Chart
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

export default App;
