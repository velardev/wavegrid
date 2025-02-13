'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LineAnimationZero = () => {
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
			<svg width="70" height="110" viewBox="0 0 70 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
				<path ref={pathRef} d="M69 55C69 70.027 65.122 83.5845 58.9051 93.354C52.6806 103.135 44.2045 109 35 109C25.7955 109 17.3194 103.135 11.0949 93.354C4.87798 83.5845 1 70.027 1 55C1 39.973 4.87798 26.4155 11.0949 16.646C17.3194 6.86465 25.7955 1 35 1C44.2045 1 52.6806 6.86465 58.9051 16.646C65.122 26.4155 69 39.973 69 55Z" stroke="black" strokeWidth="1.5"/>
			</svg>
		</div>
	)
}

export default LineAnimationZero