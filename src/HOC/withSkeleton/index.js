'use strict'

import { Skeleton } from 'components'

export const withSkeleton = (Component) => ({
  useSkeleton,
  isMounting,
  skeletonComponent,
  ...rest
}) => {
  if (useSkeleton && isMounting) {
    const SkeletonComp = skeletonComponent || Skeleton
    return <SkeletonComp />
  }

  return <Component {...rest} />
}
