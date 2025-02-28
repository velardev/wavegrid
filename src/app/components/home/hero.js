import Link from 'next/link'

const Hero = () => {
	return (
		<div className="homepage-hero relative overflow-hidden flex flex-col items-center justify-center h-screen p-8 bg-grey-600 rounded-b-2xl">
			<div className="relative z-1 max-w-4xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-poly-sans)] leading-5xl">
					Web design and development for small businesses
				</h1>
				<p className="mt-4 text-xl">Custom websites for your business that convert. Starting at $0 down and $150/month.</p>
				<div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
					<Link href="https://calendly.com/velardev/30min" className="py-2 px-4 bg-blue-600 rounded-full text-white font-medium font-[family-name:var(--font-poly-sans)] active:scale-95 transition transition-duration-300">Book a call now</Link>
					<Link href="/faq" className="my-2 underline font-medium">Frequently asked questions</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero