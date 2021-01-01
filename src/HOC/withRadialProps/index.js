'use strict'

export const withRadialProps = (Component) => ({
  type,
  data,
  series: seriesProp,
  ...rest
}) => {
  let series = seriesProp

  if (data && !seriesProp) {
    series = [
      {
        data,
        type: 'pie',
        ...(type === 'doughnut' && {
          radius: ['40%', '70%']
        })
      }
    ]
  }

  return <Component series={series} {...rest} />
}
