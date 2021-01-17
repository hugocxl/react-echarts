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
import { useEcharts, LineChart } from "@hcorta/react-echarts";

export default function App() {
  const { connect, registerTheme } = useEcharts();

  useEffect(() => {
    connect("clothes");
    registerTheme("andromeda", andromedaThemeObject);
  }, []);

  return (
    <div className="App">
      <LineChart {...rest} group={'clothes'} theme={"andromeda"} />
      <LineChart {...rest} group={'clothes'} />
    </div>
  );
}`;

export const commonPropsExample = `<AreaChart
  style={{ backgroundColor: 'red' }}
  className={"chart-example"}
  height={260}
  width={'50%'}
  lazyUpdate={true}
  notMerge={true}
  silent={true}
  theme={'your-theme'}
  group={'your-group'}
  renderer={'canvas'}
  {...rest}
/>`;

export const statePropsExample = `function StateProps() {
  const { isMounting, isLoading, data } = useFetchedData();

  return (
    <AreaChart
      data={data}
      isLoading={isLoading}
      isMounting={isMounting}
      {...rest}
    />
  );
}`;

export const customComponentsExample = `<AreaChart
  loadingComponent={<YourCustomLoading />}
  skeletonProps={{ style: { backgroundColor: 'green' }}}
  {...rest}
/>`;

export const eventsPropsExample = `<AreaChart
  onClick={params => console.log(params)}
  {...rest}
/>`;
