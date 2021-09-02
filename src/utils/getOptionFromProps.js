'use strict'

import { optionPropsKeys } from 'constants'

export function getOptionFromProps ({ option, ...rest }) {
  const propsOption = {}

  optionPropsKeys.forEach((key) => {
    if (rest[key]) propsOption[key] = rest[key]
  })

  return propsOption
}
