'use strict'

import './index.css'
import { links } from './links'
import { useMemo } from 'react'

export const Examples = {
  label: 'Examples',
  route: '/examples',
  order: 2,
  component: (props) => {
    const examples = useMemo(() =>
      links.map(({ value, label, background }) => {
        return (
          <a
            id={label}
            href={value}
            className={'react_echarts__examples_item'}
            style={{ background }}
          >
            <span>{label}</span>
          </a>
        )
      })
    )

    function Sidebar() {
      return (
        <div className='react_echarts__examples_sidebar'>
          {links.map(({ label, value }) => (
            <a href={'#' + label}>{label}</a>
          ))}
        </div>
      )
    }

    return (
      <div className='react_echarts__examples'>
        <Sidebar />
        <div className='react_echarts__examples_container'>{examples}</div>
      </div>
    )
  },
}
