import { Chart } from "@hcorta/react-echarts";

export const Examples = {
  label: "Examples",
  route: "/examples",
  order: 2,
  component: (props) => {
    return (
      <Chart
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
    );
  },
};
