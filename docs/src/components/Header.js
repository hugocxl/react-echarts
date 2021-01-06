import { useMemo } from 'react'
import * as pages from '../pages'
import { NavLink } from 'react-router-dom'
const root = document.documentElement
import logo from '../../../public/img/logo.png'

export function Header() {
  const headerLinks = useMemo(getLinks, [])

  function getLinks() {
    const links = []
    for (let page in pages) {
      const { route: path, label, component, ...rest } = pages[page]
      links.push(
        <NavLink {...rest} to={path}>
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
      <div style={{ position: 'absolute', left: 0, height: '100%', display: 'flex', alignItems: 'center' }}>
        <img src={logo} style={{ height: '70%' }} />
        <span style={{ fontWeight: 'bolder', fontSize: 20, marginLeft: 8 }}>React ECharts</span>
      </div>
      {headerLinks}
      <button style={{ position: 'absolute', right: 0 }} onClick={onClickTheme}>
        theme
      </button>
    </header>
  )
}
