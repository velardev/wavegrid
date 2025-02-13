import { Hero, Services, Offer, Testimonials, Work, Contact } from '@/app/components/home'

export const metadata = {
	title: 'WaveGrid | Full-Service Web Design and Development for Small Businesses',
	description: 'Custom websites for small businesses starting at $0 down and $150/month.',
	openGraph: {
		title: 'WaveGrid | Full-Service Web Design and Development for Small Businesses',
		description: 'Custom websites for small businesses starting at $0 down and $150/month.',
		siteName: 'WaveGrid',
		images: [
			{
				url: 'https://wavegridwebdesign.com/images/og-image.png',
				width: 800,
				height: 600,
			},
		],
	}
}

const Home = () => {
	return (
		<main className="">
			<Hero />
			<Services />
			<Offer />
			<Testimonials />
			<Work />
			<Contact />
		</main>
	)
}

export default Home