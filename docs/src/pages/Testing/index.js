import { AreaChart } from "@hcorta/react-echarts";

export const Testing = {
  label: "Testing",
  route: "/testing",
  order: 4,
  component: (props) => {
    return (
      <div>
        <AreaChart
          smooth
          data={[125, 464, 846, 253, 457, 556, 975]}
          xAxis={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        />
      </div>
    );
  },
};
