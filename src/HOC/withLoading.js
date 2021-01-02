'use strict'

import { Loading } from 'components'

export const withLoading = (Component) => ({
  isMounting,
  loadingComponent,
  isLoading,
  ...rest
}) => {
  if (isLoading) {
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
