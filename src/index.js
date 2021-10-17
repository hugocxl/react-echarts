'use strict'

// Utils
import { getOptionProps } from 'utils'

// Constants
import { defaultProps } from 'constants'

// Styles
import './styles/index.css'

// Component
import { ReactEchartsCore, ErrorBoundary } from 'components'

export function Chart ({ option, ...rest }) {
  return (
    <ErrorBoundary>
      <ReactEchartsCore {...rest} option={option || getOptionProps(rest)} />
    </ErrorBoundary>
  )
}

Chart.defaultProps = defaultProps
