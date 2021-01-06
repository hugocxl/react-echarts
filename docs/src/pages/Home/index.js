import './index.css'

export const Home = {
  label: 'Home',
  route: '/',
  order: 0,
  exact: true,
  component: (props) => {
    return (
      <div className={'react_echarts__home'}>
        <div className={'react_echarts__home_header'}>
          <div>
            <span>A simple and declarative set of React components built on top of Apache ECharts</span>
            <button>Check out the examples</button>
          </div>
          <iframe src='https://codesandbox.io/embed/react-echarts-simple-area-umnfw?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=editor' />
        </div>

        <div className={'react_echarts__home_articles'}>
          <article>
            <h2>Simplicity</h2>
            <p>
              react-echarts makes it easy to generate ECharts components by wrapping the code required to render the
              entire chart.
            </p>
          </article>

          <article>
            <h2>Easy to customize</h2>
            <p>
              In most cases, charts look and behave exactly as you need without modifications. A simple
              options-structure allows for deep customization, and styling can be done via JavaScript or CSS.
            </p>
          </article>

          <article>
            <h2>Declarative</h2>
            <p>components are purely presentational</p>
          </article>
        </div>
      </div>
    )
  },
}
