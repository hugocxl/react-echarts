import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as pages from './pages'
import './normalizer.css'
import './index.css'

function App() {
  const appPages = []
  for (let page in pages) {
    const { route: path, component, ...rest } = pages[page]
    appPages.push(<Route {...rest} path={path} component={component} />)
  }

  return (
    <Router>
      <Header />
      <main className={'react_echarts__main'}>
        <Switch>{appPages}</Switch>
      </main>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
