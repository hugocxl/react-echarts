'use strict'

import { Skeleton } from 'components'

export const withSkeleton = (Component) => ({
  isMounting,
  skeletonComponent,
  ...rest
}) => {
  if (isMounting) {
    const SkeletonComp = skeletonComponent || Skeleton
    return <SkeletonComp />
  }

  return <Component {...rest} />
}
