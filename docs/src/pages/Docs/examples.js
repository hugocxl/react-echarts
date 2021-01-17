export const comparison = `<Chart title={{ show: true }} />
// and
<Chart option={{ title: { show: true }}} />`;

export const quickExample = `import { AreaChart } from "@hcorta/react-echarts";

function App() {
  return (
    <AreaChart
      smooth
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
    />
  );
}`;

export const exportedComponents = `<AreaChart />
<BarChart />
<ColumnChart />
<DoughnutChart />
<FunnelChart />
<HeatmapChart />
<LineChart />
<MapChart />
<PieChart />
<RadarChart />
<SankeyChart />
<ScatterChart />
<SunburstChart />
<TreeChart />
<TreeMapChart />

<Chart />
`;

export const useEchartsExample = `import { useEffect } from "react";
import { useEcharts, AreaChart } from "@hcorta/react-echarts";

export default function App() {
  const { connect, registerTheme } = useEcharts();
  const commonChartProps = {
    xAxis: ["Big", "Medium", "Small"],
    tooltip: { show: true },
    group: "clothes",
  };

  useEffect(() => {
    connect("clothes");
    registerTheme("andromeda", andromedaThemeObject);
  }, []);

  return (
    <div className="App">
      <AreaChart {...commonChartProps} theme={"andromeda"} data={[2, 5, 8]} />
      <AreaChart {...commonChartProps} data={[5, 9, 1]} />
    </div>
  );
}`;
