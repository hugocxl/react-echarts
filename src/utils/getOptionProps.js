import { optionKeys } from 'constants'

export function getOptionProps (props) {
  const propsOption = {}

  optionKeys.forEach((key) => {
    if (props[key]) propsOption[key] = props[key]
  })

  return propsOption
}
