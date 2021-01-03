'use strict'

export function Loading ({ style, height, width, loadingProps }) {
  return (
    <div
      style={{
        ...style,
        height,
        width,
        backgroundColor: 'rgba(160,160,160,0.1)',
        borderRadius: 4
      }}
      {...loadingProps}
    />
  )
}
