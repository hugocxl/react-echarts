'use strict'

import { optionPropsKeys } from 'constants'

export function getOptionFromProps ({
  option,
  data = null,
  type = null,
  ...rest
}) {
  const propsOption = {}

  optionPropsKeys.forEach((key) => {
    if (rest[key]) propsOption[key] = rest[key]
  })

  return propsOption
}
