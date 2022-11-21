import NextProgressBar from 'nextjs-progressbar'
import '@/assets/styles/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextProgressBar
				color='#4387eed8'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
