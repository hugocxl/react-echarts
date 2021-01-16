'use strict'

import './index.css'

export const Playground = {
  label: 'Playground',
  route: '/playground',
  order: 4,
  component: () => {
    return (
      <div className='react_echarts__playground'>
        <iframe
          src='https://codesandbox.io/embed/react-echarts-playground-tlihb?fontsize=14&hidenavigation=1&theme=dark'
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid var(--font-color)',
            borderRadius: 'var(border-radius)',
            overflow: 'hidden',
          }}
          title='react-echarts-playground'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
    )
  },
}
