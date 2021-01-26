"use strict";

export const Curves = {
  label: "Curves",
  subLabel: "<LineChart />",
  id: "curves",
  style: {
    backgroundImage:
      "linear-gradient(to bottom, rgba(77,88,105,1) 4.8%, rgba(39,43,57,1) 86.7%)",
    color: "yellow",
  },
  code: `
    function Curves() {
      return (
        <AreaChart
          tooltip={{ show: true }}
          yAxis={{ type: 'value' }}
          xAxis={{
            type: "Category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          }}
          series={[
            { data: [125, 464, 846, 253, 457, 556, 975] },
            { data: [24, 244, 233, 123, 312, 123, 123] },
          ]}
        />
      );
    }
  `,
};
