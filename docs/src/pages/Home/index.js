import './index.css'
import { NavLink } from 'react-router-dom'

export const Home = {
  label: 'Home',
  route: '',
  order: 0,
  exact: true,
  component: (props) => {
    return (
      <div className={'react_echarts__home'}>
        <div className={'react_echarts__home_header'}>
          <div className={'react_echarts__home_header_text'}>
            <span>
              A <strong>simple</strong> and <strong>declarative</strong> set of <br />
              React components <br />
              built on top of <strong>ECharts</strong>
            </span>
            <NavLink to={'/examples'}>
              <button>Check out the examples</button>
            </NavLink>
          </div>
          <iframe src='https://codesandbox.io/embed/react-echarts-simple-area-umnfw?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=editor' />
        </div>

        <div className={'react_echarts__home_articles'}>
          <article>
            <h2>Simplicity</h2>
            <span>
              react-echarts makes it easy to generate ECharts components by wrapping the code required to render the
              entire chart.
            </span>
          </article>

          <article>
            <h2>Easy to customize</h2>
            <span>
              In most cases, charts look and behave exactly as you need without modifications. A simple
              options-structure allows for deep customization, and styling can be done via JavaScript or CSS.
            </span>
          </article>

          <article>
            <h2>Declarative</h2>
            <span>components are purely presentational</span>
          </article>
        </div>
      </div>
    )
  },
}
