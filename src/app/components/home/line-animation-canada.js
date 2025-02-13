'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LineAnimationCanada = () => {
	const pathRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const path = pathRef.current
		const pathLength = path.getTotalLength()
		path.style.strokeDasharray = pathLength
		path.style.strokeDashoffset = pathLength
		
		gsap.to(path, {
			strokeDashoffset: 0,
			ease: 'power1.out',
			duration: 4,
			scrollTrigger: {
				trigger: path,
				start: 'top 70%',
				end: 'top 10%',
				scrub: true,
			},
		})
	}, [])

	return (
		<div className="w-1/2 overflow-hidden">
			<svg width="206" height="204" viewBox="0 0 206 204" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
				<path ref={pathRef} d="M103 204V157.44M103 157.44L49.4286 164.603L55.8571 144.546L3 103.716L22.2857 96.5532L9.42857 70.0496L35.8571 76.4965L43 56.4397L75.8571 89.3901L63 29.2199L83 35.6667L103 2L123 35.6667L143 29.2199L130.143 89.3901L163 56.4397L170.143 76.4965L196.571 70.0496L183.714 96.5532L203 103.716L149.429 144.546L156.571 164.603L103 157.44Z" stroke="black" strokeWidth="2"/>
			</svg>
		</div>
	)
}

export default LineAnimationCanada