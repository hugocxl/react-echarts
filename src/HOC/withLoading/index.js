'use strict'

import { Loading } from 'components'

export const withLoading = (Component) => ({
  useLoading,
  isMounting,
  loadingComponent,
  ...rest
}) => {
  if (useLoading) {
    const LoadingComp = loadingComponent || Loading
    return (
      <>
        <LoadingComp />
        <Component {...rest} />
      </>
    )
  }

  return <Component {...rest} />
}
