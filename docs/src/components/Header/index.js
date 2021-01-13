import { useMemo } from 'react'
import * as pages from 'pages'
import { NavLink } from 'react-router-dom'
const root = document.documentElement
import logo from '../../../../public/img/logo.png'
import './index.css'

export function Header() {
  const headerLinks = useMemo(getLinks, [])

  function getLinks() {
    const links = []
    for (let page in pages) {
      const { route: path, label, component, ...rest } = pages[page]
      links.push(
        <NavLink key={path} {...rest} to={path}>
          {label}
        </NavLink>
      )
    }
    return links.sort((a, b) => {
      if (a.order < b.order) return 1
      return -1
    })
  }

  function onClickTheme() {
    root.style.setProperty('--background-color', 'black')
    root.style.setProperty('--font-color', 'white')
  }

  return (
    <header>
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={logo} style={{ height: '70%' }} />
        <span style={{ fontWeight: 'bolder', fontSize: 20, marginLeft: 8 }}>
          React ECharts
        </span>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {headerLinks}
      </div>
    </header>
  )
}
