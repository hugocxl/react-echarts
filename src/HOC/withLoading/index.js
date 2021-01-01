'use strict'

import { Loading } from 'components'

export const withLoading = (Component) => ({
  useLoading,
  isMounting,
  loadingComponent,
  ...rest
}) => {
  if (useLoading && isMounting) {
    const LoadingComp = loadingComponent || Loading
    return <LoadingComp />
  }

  return <Component {...rest} />
}
