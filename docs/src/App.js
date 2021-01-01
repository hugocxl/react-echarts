import "./App.css";
import { Chart } from "@hcorta/react-echarts";
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
        isLoading: !this.state.isLoading,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <Chart
          height={"100%"}
          isLoading={this.state.isLoading}
          isMounting={!this.state.data.length}
          option={{
            // grid: {
            //   show: false,
            //   containLabel: true,
            //   x: 0,
            //   y: 0,
            //   x2: 0,
            //   y2: 0,
            // },
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
                data: this.state.data,
                type: "bar",
              },
            ],
          }}
        />
      </div>
    );
  }
}
