'use strict'

import { ReactEchartsCore } from 'core'
import { withSkeleton, withLoading } from 'HOC'
import { compose, getOptionFromProps } from 'utils'
import { defaultProps } from 'constants'

const ReactEcharts = compose(withSkeleton, withLoading)(ReactEchartsCore)

export function Chart ({ option: optionProp, ...rest }) {
  const option = optionProp || getOptionFromProps(rest)

  return <ReactEcharts {...rest} option={option} />
}

Chart.defaultProps = defaultProps
