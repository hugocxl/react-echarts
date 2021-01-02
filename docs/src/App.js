import "./App.css";
import { AreaChart, ColumnChart } from "@hcorta/react-echarts";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [],
    };
  }

  getData = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.random() * 1000);
    }

    return data;
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <ColumnChart
          tooltip
          grid={{ bottom: 100 }}
          legend={{
            data: ["bar", "bar2", "bar3", "bar4"],
            left: "10%",
            top: 20,
          }}
          series={[
            {
              name: "bar",
              stack: "one",
              data: [2, 6, 8, 2],
            },
            {
              name: "bar2",
              stack: "one",
              data: [5, 7, 1, 12],
            },
            {
              name: "bar3",
              data: [3, 4, -2, 8],
            },
            {
              name: "bar4",
              data: [-3, 5, 6, -9],
            },
          ]}
          xAxis={{
            data: ["class1", "class2", "class3", "class4"],
            name: "X Axis",
            splitLine: { show: true },
          }}
        />
      </div>
    );
  }
}
