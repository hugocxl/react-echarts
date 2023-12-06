import Image from 'next/image'

const config = {
  logo: (
    <div className='nx-flex nx-items-center'>
      <Image
        alt='react-echarts'
        src={'/react-echarts/icon.png'}
        width={32}
        height={32}
        objectFit='contain'
      />
      <span className='nx-ml-2 nx-text-xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>
        React ECharts
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/kbox-labs/react-echarts'
  }
  // primaryHue: 330,
  // primarySaturation: 80
}

export default config
