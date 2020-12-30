import "./App.css";
import { ReactEcharts } from "@hcorta/react-echarts";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data1: [150, 230, 224, 218, 135, 147, 260],
      data2: [150, 230, 224, 218, 135, 147, 260],
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
        data1: this.getData(),
        data2: this.getData(),
        isLoading: !this.state.isLoading,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <ReactEcharts
          isLoading={this.state.isLoading}
          option={{
            grid: {
              show: false,
              containLabel: true,
              x: 0,
              y: 0,
              x2: 0,
              y2: 0,
            },
            title: {
              text: "React Echarts",
              show: true,
            },
            animation: true,
            xAxis: {
              type: "category",
              data: this.state.xAxis,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: this.state.data1,
                type: "bar",
              },
              {
                data: this.state.data2,
                type: "bar",
              },
            ],
          }}
        />
      </div>
    );
  }
}
