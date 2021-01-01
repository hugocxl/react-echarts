import "./App.css";
import { ReactEcharts } from "@hcorta/react-echarts";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [150, 230, 224, 218, 135, 147, 260],
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
        <ReactEcharts
          onContextMenu={(props) => console.log(props)}
          onDoubleClick={(props) => console.log(props)}
          isLoading={this.state.isLoading}
          isMounting={!this.state.isLoading}
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
              {
                name: "Reference Page",
                type: "pie",
                radius: "55%",
                data: [
                  { value: 400, name: "Searching Engine" },
                  { value: 335, name: "Direct" },
                  { value: 310, name: "Email" },
                  { value: 274, name: "Alliance Advertisement" },
                  { value: 235, name: "Video Advertisement" },
                ],
              },
            ],
          }}
        />
      </div>
    );
  }
}
