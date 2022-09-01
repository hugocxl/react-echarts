// Dependencies
import React, { useRef, useEffect } from 'react'

// Hooks
import { useECharts } from '../../hooks'

// Types
import { FC, Ref } from 'react'
import { EChartLibProps } from '../../types'

export interface EChartProps extends EChartLibProps {
  style?: React.CSSProperties
  id?: string
  className?: string
  onMount?: () => unknown
  onUnmount?: () => unknown
  onUpdate?: () => unknown
}

export const EChart: FC<EChartProps> = ({
  id,
  className,
  style,
  onMount,
  onUnmount,
  onUpdate,
  ...restProps
}) => {
  const containerRef: Ref<HTMLDivElement> = useRef()

  useECharts({ containerRef, ...restProps })

  useEffect(() => {
    if (onMount) onMount()

    return () => {
      if (onUnmount) onUnmount()
    }
  }, [])

  useEffect(() => {
    if (onUpdate) onUpdate()
  })

  return (
    <div
      ref={containerRef}
      id={id}
      className={'react-echarts' + ` ${className || ''}`}
      style={{
        height: '240px',
        width: '100%',
        ...style,
      }}
    />
  )
}
