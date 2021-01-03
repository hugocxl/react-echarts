import "./App.css";
import { useEcharts, FunnelChart } from "@hcorta/react-echarts";
import { useState, useEffect } from "react";

const xAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getData() {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.random() * 1000);
  }

  return data;
}

export default function App() {
  // const [state, setState] = useState(0);
  // const { connect } = useEcharts();

  // useEffect(() => {
  //   setInterval(() => {
  //     setState(state + 1);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      <FunnelChart
        data={[
          { value: 60, name: "访问" },
          { value: 40, name: "咨询" },
          { value: 20, name: "订单" },
          { value: 80, name: "点击" },
          { value: 100, name: "展现" },
        ]}
      />
    </div>
  );
}
