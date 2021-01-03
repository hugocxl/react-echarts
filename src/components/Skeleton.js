'use strict'

export function Skeleton ({ style, height, width, skeletonProps }) {
  return (
    <div
      style={{
        ...style,
        height,
        width,
        backgroundColor: 'rgba(160,160,160,0.1)',
        borderRadius: 4
      }}
      {...skeletonProps}
    />
  )
}
