'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Offer = () => {
	const imageRef = useRef(null)
	const iconRefs = useRef([])

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.fromTo(
			imageRef.current,
			{
				filter: 'grayscale(100%)',
			},
			{
				filter: 'grayscale(0%)',
				scrollTrigger: {
					trigger: imageRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					scrub: true,
				},
			}
		)

		iconRefs.current.forEach((ref, index) => {
			gsap.fromTo(
				ref,
				{
					rotate: -45,
				},
				{
					rotate: 0,
					scrollTrigger: {
						trigger: ref,
						start: 'top 80%',
						end: 'top 10%',
						scrub: true,
					},
				}
			)
		})
	}, [])

	return (
		<div className="flex flex-col py-12 md:py-24 px-4 md:px-8 lg:px-16">
			<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold font-[family-name:var(--font-poly-sans)]">From inspiration to impact.</h2>
			<div className="flex flex-col md:flex-row gap-12 md:gap-24 max-w-7xl mx-auto mt-16">
				<div className="md:w-1/3 text-center">
					<img src="images/founder.jpg" className="mx-auto rounded-full w-1/2 md:w-64 aspect-square object-cover" width={160} alt="Sadman Shawmik - Founder, WaveGrid Web Design" ref={imageRef} />
					<p className="mt-4 text-lg font-medium">Sadman Shawmik</p>
					<p className="">Founder, WaveGrid</p>
				</div>
				<div className="md:w-2/3">
					<p>We provide a fully custom 5-page website for small businesses with no upfront cost. If you need more than 5 pages, we’ll create a tailored quote based on your project’s scope, additional pages, and time requirements. Our service includes a 12-month minimum contract, covering design, development, hosting, unlimited revisions, 24/7 support, and lifetime updates.</p>
					<div className="grid grid-cols-2 gap-12 mt-16">
						<div className="flex flex-col items-start gap-2">
							<div className="bg-gray-100 rounded-2xl p-4">
								<img src="icons/palette.svg" width={30} ref={(el) => (iconRefs.current[0] = el)} />
							</div>
							<h3 className="font-medium text-lg">Fully custom designs</h3>
							<p>Our in-house designers make sure that your site is exactly designed the way you want it.</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="bg-gray-100 rounded-2xl p-4">
								<img src="icons/gauge.svg" width={30} ref={(el) => (iconRefs.current[1] = el)} />
							</div>
								<h3 className="font-medium text-lg">100% PageSpeed scores</h3>
							<p>Our sites are efficient and have zero bloat and built by seasoned developers, so we get perfect 98-100/100 speed scores with Google.</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="bg-gray-100 rounded-2xl p-4">
								<img src="icons/shield-dollar.svg" width={30} ref={(el) => (iconRefs.current[2] = el)} />
							</div>
								<h3 className="font-medium text-lg">Money back guarantee</h3>
							<p>If you do not like our designs or you are not satisfied with our work, we will refund your money. No questions asked.</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="bg-gray-100 rounded-2xl p-4">
								<img src="icons/secure.svg" width={30} ref={(el) => (iconRefs.current[3] = el)} />
							</div>
								<h3 className="font-medium text-lg">100% secure</h3>
							<p>Our sites are built fully static with the latest industry standards using React, meaning they literally cannot be hacked.</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="bg-gray-100 rounded-2xl p-4">
								<img src="icons/search.svg" width={30} ref={(el) => (iconRefs.current[4] = el)} />
							</div>
								<h3 className="font-medium text-lg">Expert SEO services</h3>
							<p>Our in-house SEO expert provides additional SEO services to ensure your site ranks higher and attracts more traffic, using proven strategies tailored to your business.</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="bg-gray-100 rounded-2xl p-4">
								<img src="icons/support.svg" width={30} ref={(el) => (iconRefs.current[5] = el)} />
							</div>
								<h3 className="font-medium text-lg">24/7 support</h3>
							<p>Call or text us anytime - we are always ready to assist you.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Offer