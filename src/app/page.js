import Link from 'next/link'

const Home = () => {
	return (
		<main className="">
			{/* Hero */}
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
					<h1 className="text-7xl font-bold">Web design and development for small businesses</h1>
					<p className="mt-4 text-xl">Custom websites for your business that convert. Starting at $0 down and $150/month.</p>
					<div className="flex gap-6 justify-center items-center mt-8">
						<Link href="/" className="py-2 px-4 bg-blue-600 rounded-full text-white font-medium">Book a call now</Link>
						<Link href="/" className="my-2 underline font-medium">See our FAQs</Link>
					</div>
				</div>
			</div>

			{/* Services */}
			<div className="flex flex-col py-24 px-16">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold">Websites that do not break the bank.</h2>
					<p className="mt-4 text-xl">Starting at $0 down and $150/mo.</p>
				</div>
				<div className="flex gap-24 max-w-7xl mx-auto mt-16">
					<div className="flex flex-col gap-4 w-1/3 text-center">
						<div className="bg-gray-100 rounded-2xl w-full aspect-square"></div>
						<h3 className="font-medium text-lg">Zero upfront cost</h3>
						<p>With $0 down and low monthly payments, we make professional web design that drive results accessible without compromising quality.</p>
					</div>

					<div className="flex flex-col gap-4 w-1/3 text-center">
						<div className="bg-gray-100 rounded-2xl w-full aspect-square"></div>
						<h3 className="font-medium text-lg">One-stop solution</h3>
						<p>We handle everything from start to finish, including design, development, hosting and maintenance. Leaving nothing for you to worry about.</p>
					</div>

					<div className="flex flex-col gap-4 w-1/3 text-center">
						<div className="bg-gray-100 rounded-2xl w-full aspect-square"></div>
						<h3 className="font-medium text-lg">Made in Canada</h3>
						<p>We do not outsource our work. Our designer and developers are all based in Canada and work remotely from home.</p>
					</div>
				</div>
			</div>

			{/* Offer */}
			<div className="flex flex-col py-24 px-16">
				<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold">From inspiration to impact.</h2>
				<div className="flex gap-24 max-w-7xl mx-auto mt-16">
					<div className="w-1/3 text-center">
						<img src="founder.jpg" className="mx-auto rounded-full w-64 aspect-square object-cover" width={160} alt="Sadman Shawmik - Founder, WaveGrid Web Design" />
						<p className="mt-4 text-lg font-medium">Sadman Shawmik</p>
						<p className="">Founder, WaveGrid</p>
					</div>
					<div className="w-2/3">
						<p>We provide a fully custom 5-page website for small businesses with no upfront cost. If you need more than 5 pages, we’ll create a tailored quote based on your project’s scope, additional pages, and time requirements. Our service includes a 12-month minimum contract, covering design, development, hosting, unlimited revisions, 24/7 support, and lifetime updates.</p>
						<div className="grid grid-cols-2 gap-12 mt-16">
							<div className="flex flex-col items-start gap-2">
								<div className="bg-gray-100 rounded-2xl p-4">
									<img src="palette.svg" width={30} />
								</div>
								<h3 className="font-medium text-lg">Fully custom designs</h3>
								<p>Our in-house designers make sure that your site is exactly designed the way you want it.</p>
							</div>
							<div className="flex flex-col items-start gap-2">
								<div className="bg-gray-100 rounded-2xl p-4">
									<img src="gauge.svg" width={30} />
								</div>
									<h3 className="font-medium text-lg">100% PageSpeed scores</h3>
								<p>Our sites are efficient and have zero bloat and built by seasoned developers, so we get perfect 98-100/100 speed scores with Google.</p>
							</div>
							<div className="flex flex-col items-start gap-2">
								<div className="bg-gray-100 rounded-2xl p-4">
									<img src="shield-dollar.svg" width={30} />
								</div>
									<h3 className="font-medium text-lg">Money back guarantee</h3>
								<p>If you do not like our designs or you are not satisfied with our work, we will refund your money. No questions asked.</p>
							</div>
							<div className="flex flex-col items-start gap-2">
								<div className="bg-gray-100 rounded-2xl p-4">
									<img src="secure.svg" width={30} />
								</div>
									<h3 className="font-medium text-lg">100% secure</h3>
								<p>Our sites are built fully static with the latest industry standards using React, meaning they literally cannot be hacked.</p>
							</div>
							<div className="flex flex-col items-start gap-2">
								<div className="bg-gray-100 rounded-2xl p-4">
									<img src="search.svg" width={30} />
								</div>
									<h3 className="font-medium text-lg">Expert SEO services</h3>
								<p>Our in-house SEO expert provides additional SEO services to ensure your site ranks higher and attracts more traffic, using proven strategies tailored to your business.</p>
							</div>
							<div className="flex flex-col items-start gap-2">
								<div className="bg-gray-100 rounded-2xl p-4">
									<img src="support.svg" width={30} />
								</div>
									<h3 className="font-medium text-lg">24/7 support</h3>
								<p>Call or text us anytime - we are always ready to assist you.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Feedback */}
			<div className="flex flex-col py-24 px-16" id="reviews">
				<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold">What our clients are saying.</h2>
				<div className="relative flex gap-4 mt-16 max-w-5xl mx-auto">
					<div className="flex flex-col gap-4 w-1/3">
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Mayesha Rasmussen</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								As a small business, we couldn't afford traditional web design services. WaveGrid’s subscription service made it possible for us to have a stunning, fully-responsive website at a fraction of the cost. We couldn’t be happier with the results!
							</blockquote>
						</div>
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Astrid Eriksen</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								We’re so happy with WaveGrid. Their monthly subscription gives us access to professional, responsive websites without the huge one-time fees. Extremely satisfied!
							</blockquote>
						</div>
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Ella Casalino</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								We got exactly what we wanted with WaveGrid. A completely custom website with a fixed monthly fee that works for us. It’s been a great partnership, and we’re thrilled with the results.
							</blockquote>
						</div>
					</div>
					<div className="flex flex-col gap-4 w-1/3">
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Guillaume Bouchard</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								We needed a website that reflected our business perfectly. WaveGrid built it custom for us without any upfront fees, which is amazing. No headaches, just results.
							</blockquote>
						</div>
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Charles Hou</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								Working with WaveGrid was a game-changer. They built us a fully custom website and we’re paying a reasonable monthly fee to keep everything running smoothly. Simple, clear, and effective.
							</blockquote>
						</div>
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Amed Bouchentouf</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								WaveGrid made building our website a breeze. We got a fully custom site that perfectly matches our brand, and now we pay a low monthly fee without any surprise costs. It’s exactly what we needed.
							</blockquote>
						</div>
					</div>
					<div className="flex flex-col gap-4 w-1/3">
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Dave Scott</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								WaveGrid didn’t just build us a website—they built a solution. We’ve seen a clear increase in traffic and customer inquiries, and the low monthly fee allows us to stay on top of things without worrying about upfront costs.
							</blockquote>
						</div>
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Othmane Haddani</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								I’ve never worked with a company that was so invested in our success. WaveGrid built us a custom site that’s not only beautiful but designed to convert. Plus, the low monthly cost gives us peace of mind.
							</blockquote>
						</div>
						<div className="border border-1 rounded-xl p-4">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full"></div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">Adam Speier</p>
									<p className="text-sm">Carlsberg</p>
								</div>
							</div>
							<blockquote className="mt-4">
								We’re so glad we chose WaveGrid for our website. They gave us a sleek, functional site that’s optimized for our customers. The monthly fee is easy to manage, and the added value in terms of online conversions has been fantastic.
							</blockquote>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-white"></div>
				</div>
			</div>

			{/* Portfolio */}
			<div className="flex flex-col py-24 px-16">
				<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold">Sites we have built.</h2>
				<div className="relative flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-4 mt-16 max-w-5xl mx-auto">
					<div className="rounded-2xl lg:rounded-none lg:rounded-tl-2xl overflow-hidden">
						<img src="658shots_so.png" />
					</div>
					<div className="rounded-2xl lg:rounded-none lg:rounded-tr-2xl overflow-hidden">
						<img src="698shots_so.png" />
					</div>
					<div className="rounded-2xl lg:rounded-none lg:rounded-bl-2xl overflow-hidden">
						<img src="940shots_so.png" />
					</div>
					<div className="rounded-2xl lg:rounded-none lg:rounded-br-2xl overflow-hidden">
						<img src="498shots_so.png" />
					</div>
				</div>
			</div>

			{/* Contact */}
			<div className="bg-black">
				<div className="flex flex-col items-center py-24 px-16 bg-gray-100 rounded-b-2xl">
					<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold">Ready to get started?</h2>
					<Link href="/" className="mt-8 py-2 px-4 bg-blue-600 rounded-full text-white font-medium">Book a call</Link>
				</div>
			</div>
		</main>
	)
}

export default Home