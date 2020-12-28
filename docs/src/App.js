import "./App.css";
import { ReactEcharts } from "@hcorta/react-echarts";

function App() {
  return (
    <div className="App">
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "bar",
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
