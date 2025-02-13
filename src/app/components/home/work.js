'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Work = () => {

	const containerRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.fromTo(
			containerRef.current,
			{
				gap: 0,
			},
			{
				gap: '2rem',
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					scrub: true,
				},
			}
		)
	}, [])
	
	return (
		<div className="flex flex-col pt-12 md:pt-24 pb-24 md:pb-48 px-4 md:px-8 lg:px-16">
			<h2 className="max-w-4xl mx-auto text-center text-4xl font-bold font-[family-name:var(--font-poly-sans)]">Sites we have built.</h2>
			<div className="relative flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-4 mt-16 max-w-5xl mx-auto" ref={containerRef}>
				<div className="rounded-2xl lg:rounded-none lg:rounded-tl-2xl overflow-hidden">
					<img src="images/658shots_so.png" />
				</div>
				<div className="rounded-2xl lg:rounded-none lg:rounded-tr-2xl overflow-hidden">
					<img src="images/698shots_so.png" />
				</div>
				<div className="rounded-2xl lg:rounded-none lg:rounded-bl-2xl overflow-hidden">
					<img src="images/940shots_so.png" />
				</div>
				<div className="rounded-2xl lg:rounded-none lg:rounded-br-2xl overflow-hidden">
					<img src="images/498shots_so.png" />
				</div>
			</div>
		</div>
	)
}

export default Work