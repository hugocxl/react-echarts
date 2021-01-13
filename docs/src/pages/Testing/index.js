import { AreaChart } from "@hcorta/react-echarts";

export const Testing = {
  label: "Testing",
  route: "/testing",
  order: 4,
  component: (props) => {
    return (
      <div>
        <AreaChart
          option={{
            xAxis: {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
              },
            ],
          }}
        />
      </div>
    );
  },
};
