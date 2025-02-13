import Faqs from '@/app/components/faqs'

export const metadata = {
	title: 'FAQ | WaveGrid | Full-Service Web Design and Development for Small Businesses',
	description: 'Custom websites for your business that convert. Starting at $0 down and $150/month.',
}

const Faq = () => {
	return (
		<main className="">
			<div className="relative overflow-hidden flex flex-col items-center justify-center h-[60vh] p-8 bg-grey-600 [clip-path:inset(0)] rounded-b-2xl">
				<div className="absolute top-0 left-0 z-0 flex justify-between h-full w-full blur-[200px]">
					<div className="w-32 bg-indigo-600"></div>
					<div className="w-32 bg-orange-600"></div>
					<div className="w-32 bg-green-600"></div>
					<div className="w-32 bg-blue-600"></div>
					<div className="w-32 bg-yellow-600"></div>
					<div className="w-32 bg-pink-600"></div>
				</div>
				<div className="relative max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold font-[family-name:var(--font-poly-sans)]">
						Quick answers.
						<br />
						<img src="images/think.png" className="inline w-10" />
					</h2>
					<p className="mt-4 text-xl">Explore our FAQ page to find answers about our services, pricing, process, and how everything works.</p>
				</div>
			</div>

			<div className="flex flex-col py-12 md:py-24 px-4 md:px-8 lg:px-16 mx-auto max-w-4xl">
				<Faqs />
			</div>
		</main>
	)
}

export default Faq