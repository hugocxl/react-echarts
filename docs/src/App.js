import "./App.css";
import { Chart, AreaChart, BarChart } from "@hcorta/react-echarts";
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
        <AreaChart
          animation={true}
          data={this.state.data}
          xAxis={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        />
        <BarChart
          smooth
          stacked
          legend={{ show: true, data: ["1", "2"] }}
          xAxis={{
            show: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          }}
          series={[
            { name: "1", data: this.getData() },
            { name: "2", data: this.getData() },
          ]}
        />
        <Chart
          tooltip={{ show: true }}
          animation={true}
          title={{
            text: "React Echarts",
            show: true,
          }}
          option={{
            xAxis: {
              type: "category",
              data: this.state.xAxis,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: this.state.data,
                type: "bar",
                showBackground: true,
              },
            ],
          }}
        />
      </div>
    );
  }
}
