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

  // componentDidMount() {
  //   setInterval(() => {
  //     const newData = this.state.data;
  //     newData[0] = newData[0] * Math.random() * 10;
  //     this.setState({
  //       data: newData,
  //     });
  //   }, 2000);
  // }

  render() {
    return (
      <div className="App">
        <ReactEcharts
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
              },
            ],
          }}
        />
      </div>
    );
  }
}
