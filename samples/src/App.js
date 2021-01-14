import { AreaChart } from "@hcorta/react-echarts";
import "./App.css";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

function App() {
  return (
    <div className="App">
      <LiveProvider code="<strong>Hello World!</strong>">
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>

      <pre>
        <code></code>
      </pre>
    </div>
  );
}

export default App;
