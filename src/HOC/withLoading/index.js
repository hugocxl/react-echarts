'use strict'

import { Loading } from 'components'

export const withLoading = (Component) => ({
  useLoading,
  isMounting,
  loadingComponent,
  isLoading,
  ...rest
}) => {
  if (useLoading) {
    const LoadingComp = loadingComponent || Loading
    return (
      <>
        {isLoading && <LoadingComp />}
        <Component {...rest} />
      </>
    )
  }

  return <Component {...rest} />
}
