import "./App.css";
import { useEcharts, AreaChart } from "@hcorta/react-echarts";
import { useState, useEffect } from "react";

const xAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getData() {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.random() * 1000);
  }

  return data;
}

const data1 = getData();
const data2 = getData();

export default function App() {
  const [state, setState] = useState(0);
  const { connect } = useEcharts();

  useEffect(() => {
    setInterval(() => {
      setState(state + 1);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <AreaChart
        tooltip={{ show: true }}
        onMount={() => connect("g1")}
        group={"g1"}
        data={data1}
        xAxis={xAxis}
      />
      <AreaChart
        tooltip={{ show: true }}
        onMount={() => connect("g1")}
        group={"g1"}
        data={data2}
        xAxis={xAxis}
      />
    </div>
  );
}
