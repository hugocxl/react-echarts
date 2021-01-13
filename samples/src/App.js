import logo from "./logo.svg";
import { AreaChart } from "@hcorta/react-echarts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AreaChart
          smooth
          data={[125, 464, 846, 253, 457, 556, 975]}
          xAxis={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        />
      </header>
    </div>
  );
}

export default App;
