
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Testimonials = () => {
	const testimonialRefs = useRef([])

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		testimonialRefs.current.forEach((ref, index) => {
			gsap.fromTo(
				ref,
				{
					y: 40,
				},
				{
					y: 0,
					scrollTrigger: {
						trigger: ref,
						start: 'top 80%',
						end: 'top 20%',
						scrub: true,
					},
				}
			)
			gsap.fromTo(
				ref.querySelector('img'),
				{
					scale: 0.75,
				},
				{
					scale: 1,
					scrollTrigger: {
						trigger: ref,
						start: 'top 80%',
						end: 'top 20%',
						scrub: true,
					},
				}
			)
		})
	}, [])

	const testimonials = [
		{
			name: 'Cassy V.',
			company: 'Woash Wellness',
			testimonial: `As a small business, we couldn't afford traditional web design services. WaveGrid’s subscription service made it possible for us to have a stunning, fully-responsive website at a fraction of the cost. We couldn’t be happier with the results!`,
			image: 'cassy-v.png',
		},
		{
			name: 'Astrid E.',
			company: 'I Miss You Vintage',
			testimonial: `We’re so happy with WaveGrid. Their monthly subscription gives us access to professional, responsive websites without the huge one-time fees. Extremely satisfied!`,
			image: 'astrid-e.png',
		},
		{
			name: 'Amed B.',
			company: 'Forever Buds',
			testimonial: `WaveGrid made building our website a breeze. We got a fully custom site that perfectly matches our brand, and now we pay a low monthly fee without any surprise costs. It’s exactly what we needed.`,
			image: 'amed-b.png',
		},
		{
			name: 'Guillaume B.',
			company: 'Stella Phoenix',
			testimonial: `We needed a website that reflected our business perfectly. WaveGrid built it custom for us without any upfront fees, which is amazing. No headaches, just results.`,
			image: 'guillaume-b.png',
		},
		{
			name: 'Mike L.',
			company: 'Cobs Bread Bakery',
			testimonial: `Working with WaveGrid was a game-changer. They built us a fully custom website and we’re paying a reasonable monthly fee to keep everything running smoothly. Simple, clear, and effective.`,
			image: 'mike-l.png',
		},
		{
			name: 'Ella C.',
			company: 'MoorMoney',
			testimonial: `We got exactly what we wanted with WaveGrid. A completely custom website with a fixed monthly fee that works for us. It’s been a great partnership, and we’re thrilled with the results.`,
			image: 'ella-c.png',
		},
		{
			name: 'Dave S.',
			company: 'BlueHarbor Marketing',
			testimonial: `WaveGrid didn’t just build us a website—they built a solution. We’ve seen a clear increase in traffic and customer inquiries, and the low monthly fee allows us to stay on top of things without worrying about upfront costs.`,
			image: 'dave-s.png',
		},
		{
			name: 'Othmane H.',
			company: 'Carlsberg',
			testimonial: `I’ve never worked with a company that was so invested in our success. WaveGrid built us a custom site that’s not only beautiful but designed to convert. Plus, the low monthly cost gives us peace of mind.`,
			image: 'othmane-h.png',
		},
		{
			name: 'Adam S.',
			company: 'Ember Solutions',
			testimonial: `We’re so glad we chose WaveGrid for our website. They gave us a sleek, functional site that’s optimized for our customers. The added value in terms of online conversions has been fantastic.`,
			image: 'adam-s.png',
		}
	]

	return (
		<div className="flex flex-col py-12 md:py-24 px-4 md:px-8 lg:px-16" id="reviews">
			<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold font-[family-name:var(--font-poly-sans)]">What our clients are saying.</h2>
			<div className="relative flex flex-col md:flex-row gap-4 mt-8 md:mt-16 max-w-5xl mx-auto pb-4 overflow-y-hidden">
				{[0, 3, 6].map((startIndex, columnIndex) => (
					<div key={columnIndex} className="flex flex-col gap-4 md:w-1/3">
						{testimonials.slice(startIndex, startIndex + 3).map((testimonial, index) => (
							<div className="border border-1 rounded-xl p-4" key={index} ref={(el) => (testimonialRefs.current[startIndex + index] = el)}>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-100 rounded-full">
									<img src={`images/${testimonial.image}`} className="w-full h-full object-cover rounded-full" />
								</div>
								<div className="flex flex-col">
									<p className="text-sm font-medium">{ testimonial.name }</p>
									<p className="text-sm">{ testimonial.company }</p>
								</div>
							</div>
							<blockquote className="mt-4">
								{ testimonial.testimonial }
							</blockquote>
						</div>
						))}
					</div>
				))}				
				<div className="absolute bottom-0 left-0 h-24 md:h-48 w-full bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
			</div>
		</div>
	)
}

export default Testimonials