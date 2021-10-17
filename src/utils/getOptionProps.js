import { optionPropsKeys } from 'constants'

export function getOptionProps (props) {
  const propsOption = {}

  optionPropsKeys.forEach((key) => {
    if (props[key]) propsOption[key] = props[key]
  })

  return propsOption
}
