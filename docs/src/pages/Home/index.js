import './index.css'
import { NavLink } from 'react-router-dom'
import background from '../../../../public/img/background-shaped.png'

export const Home = {
  label: 'Home',
  route: '',
  order: 0,
  exact: true,
  component: (props) => {
    return (
      <div className={'react_echarts__home'}>
        <div className={'react_echarts__home_header'}>
          <img src={background} />
          <h1>React ECharts</h1>
          <span>
            A <strong>simple</strong> and <strong>declarative</strong> set of
            React components built on top of <strong>ECharts</strong>
          </span>

          <div className={'react_echarts__home_header_buttons'}>
            <NavLink to={'/examples'}>
              <button>Examples</button>
            </NavLink>
            <NavLink to={'/docs'}>
              <button>API docs</button>
            </NavLink>
          </div>
        </div>

        <div className={'react_echarts__home_description'}>
          <article>
            <h2>Simple</h2>
            <span>
              React ECharts makes it easy to generate ECharts components by
              wrapping the code required to render the entire chart.
            </span>
          </article>

          <article>
            <h2>Customizable</h2>
            <span>
              A simple options-structure allows for deep customization.
            </span>
          </article>

          <article>
            <h2>Declarative</h2>
            <span>
              Purely presentational components. In most cases, charts look and
              behave exactly as you need without modifications.
            </span>
          </article>
        </div>
      </div>
    )
  },
}
