'use strict'

import { ReactEchartsCore } from 'core'
import { getOptionFromProps } from 'utils'
import { defaultProps } from 'constants'
import { Skeleton, Loading } from 'components'

export function Chart ({
  option: optionProp,
  isMounting,
  skeletonComponent,
  isLoading,
  loadingComponent,
  ...rest
}) {
  const option = optionProp || getOptionFromProps(rest)

  if (isMounting) {
    const SkeletonComp = skeletonComponent || Skeleton
    return <SkeletonComp />
  }

  if (isLoading) {
    const LoadingComp = loadingComponent || Loading
    return (
      <>
        {isLoading && <LoadingComp />}
        <ReactEchartsCore {...rest} option={option} />
      </>
    )
  }

  return <ReactEchartsCore {...rest} option={option} />
}

Chart.defaultProps = defaultProps
