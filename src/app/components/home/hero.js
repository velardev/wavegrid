import Link from 'next/link'

const Hero = () => {
	return (
		<div className="relative overflow-hidden flex flex-col items-center justify-center h-screen p-8 bg-grey-600 [clip-path:inset(0)] rounded-b-2xl">
			<div className="absolute top-0 left-0 z-0 flex justify-between h-full w-full blur-[200px]">
				<div className="w-16 bg-violet-400"></div>
				<div className="w-16 bg-sky-400"></div>
				<div className="w-16 bg-teal-400"></div>
				<div className="w-16 bg-lime-400"></div>
				<div className="w-16 bg-amber-300"></div>
				<div className="w-16 bg-red-300"></div>
			</div>
			<div className="relative z-1 max-w-4xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-poly-sans)] leading-5xl">
					Web design and development for small businesses
				</h1>
				<p className="mt-4 text-xl">Custom websites for your business that convert. Starting at $0 down and $150/month.</p>
				<div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
					<Link href="/" className="py-2 px-4 bg-blue-600 rounded-full text-white font-medium font-[family-name:var(--font-poly-sans)] active:scale-95 transition transition-duration-300">Book a call now</Link>
					<Link href="/faq" className="my-2 underline font-medium">Frequently asked questions</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero