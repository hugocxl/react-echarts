import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as pages from './pages'
import './index.css'
import './main.css'

function App() {
  const appPages = []
  for (let page in pages) {
    const { route: path, component, label, ...rest } = pages[page]
    appPages.push(
      <Route {...rest} key={label} path={path} component={component} />
    )
  }

  return (
    <Router>
      <main className={'react_echarts__main'}>
        <Header />
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
