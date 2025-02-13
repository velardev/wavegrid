import Link from 'next/link'

const Contact = () => {
	return (
		<div className="bg-black">
			<div className="flex flex-col items-center py-24 md:py-48 px-4 md:px-8 lg:px-16 bg-[#f0efef] rounded-b-2xl">
				<h2 className="max-w-4xl mx-auto mb-8 text-center text-5xl md:text-6xl lg:text-7xl font-light leading-5xl">
					Start your journey
					<br />
					with <span className="font-[family-name:var(--font-poly-sans)] tracking-[-0.075em]">Wave/Grid</span>
				</h2>
				<div className="flex gap-6 justify-center items-center mt-8">
					<Link href="https://calendly.com/velardev/30min" scroll={true} className="py-2 px-4 bg-blue-600 border-2 border-blue-600 rounded-full text-white font-medium font-[family-name:var(--font-poly-sans)] active:scale-95 transition transition-duration-300">Book a call now</Link>
					<Link href="/contact" scroll={true} className="py-2 px-4 bg-transparent border-2 border-blue-600 rounded-full text-blue-600 font-medium font-[family-name:var(--font-poly-sans)] active:scale-95 transition transition-duration-300">Or message us</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact