import "./App.css";
import { DoughnutChart } from "@hcorta/react-echarts";
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
        <DoughnutChart
          data={[
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ]}
        />
      </div>
    );
  }
}
