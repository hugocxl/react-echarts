import Image from 'next/image'
import type { ThemeConfig } from 'nextra/types'

const config: ThemeConfig = {
	logo: (
		<div className='nx-flex nx-items-center'>
			<Image
				alt='react-echarts'
				src={'/react-echarts/icon.png'}
				width={32}
				height={32}
			/>
			<span className='nx-ml-2 nx-text-xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>
				React ECharts
			</span>
		</div>
	),
	docsRepositoryBase: 'https://github.com/kbox-labs/react-echarts',
	project: {
		link: 'https://github.com/kbox-labs/react-echarts'
	},
	toc: {
		backToTop: true
	},
	footer: {
		text: (
			<span>
				MIT {new Date().getFullYear()} ©{' '}
				<a
					href='https://github.com/kbox-labs/react-echarts'
					target='_blank'
					rel='noreferrer'
				>
					React ECharts
				</a>
			</span>
		)
	}
}

export default config
