'use strict'

import { optionProps } from 'constants'

export function getOptionFromProps ({
  option,
  data = null,
  type = null,
  ...rest
}) {
  const propsOption = {}

  optionProps.forEach((key) => {
    if (rest[key]) propsOption[key] = rest[key]
  })

  return propsOption
}
