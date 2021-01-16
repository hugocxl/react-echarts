'use strict'

import './index.css'
import * as examples from './collection'
import * as ReactEcharts from '@hcorta/react-echarts'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from 'prism-react-renderer/themes/shadesOfPurple'

export const Examples = {
  label: 'Gallery',
  route: '/gallery',
  order: 2,
  component: (props) => {
    const examplesItems = []
    const sidebarItems = []

    for (let example in examples) {
      const { code, label } = examples[example]
      const scope = { ...ReactEcharts }

      sidebarItems.push(<a href={'#' + label}>{label}</a>)
      examplesItems.push(
        <div className={'react_echarts__gallery_item'}>
          <h2 id={label}>{label}</h2>
          <LiveProvider code={code} scope={scope}>
            <LivePreview />
            <LiveError />
            <LiveEditor theme={theme} className={'item_code'} />
          </LiveProvider>
        </div>
      )
    }

    return (
      <div className='react_echarts__gallery'>
        <div className='react_echarts__gallery_sidebar'>{sidebarItems}</div>
        <div className='react_echarts__gallery_container'>{examplesItems}</div>
      </div>
    )
  },
}
