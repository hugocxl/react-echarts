"use strict";

export const Sunburst = {
  label: "Sunburst",
  subLabel: "<SunburstChart />",
  id: "sunburst",
  style: {
    backgroundImage:
      "linear-gradient(to bottom, rgba(77,88,105,1) 4.8%, rgba(39,43,57,1) 86.7%)",
    color: "yellow",
  },
  code: `
  function Sunburst() {
    return (
      <SunburstChart
      series={{
        type: 'sunburst',
        data: [{
          name: 'Grandpa',
          children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
              name: 'Cousin Jack',
              value: 2
            }, {
              name: 'Cousin Mary',
              value: 5,
              children: [{
                name: 'Jackson',
                value: 2
              }]
            }, {
              name: 'Cousin Ben',
              value: 4
            }]
          }, {
            name: 'Father',
            value: 10,
            children: [{
              name: 'Me',
              value: 5
            }, {
              name: 'Brother Peter',
              value: 1
            }]
          }]
        }, {
          name: 'Nancy',
          children: [{
            name: 'Uncle Nike',
            children: [{
              name: 'Cousin Betty',
              value: 1
            }, {
              name: 'Cousin Jenny',
              value: 2
            }]
          }]
        }],
        radius: [0, '90%'],
        label: {
          rotate: 'radial'
        }
      }}
    />
      );
    }
    `,
};
