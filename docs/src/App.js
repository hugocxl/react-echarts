import "./App.css";
import { useEcharts, AreaChart } from "@hcorta/react-echarts";
import * as React from "react";

const xAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function App() {
  const { connect } = useEcharts();

  function getData() {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.random() * 1000);
    }

    return data;
  }

  return (
    <div className="App">
      <AreaChart
        tooltip={{ show: true }}
        onMount={() => connect("g1")}
        group={"g1"}
        data={getData()}
        xAxis={xAxis}
      />
      <AreaChart
        tooltip={{ show: true }}
        onMount={() => connect("g1")}
        group={"g1"}
        data={getData()}
        xAxis={xAxis}
      />
    </div>
  );
}
