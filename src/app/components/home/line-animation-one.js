'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LineAnimationOne = () => {
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
			<svg width="49" height="110" viewBox="0 0 49 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
				<path ref={pathRef} d="M1 17.5755C13.1601 16.6114 18.3729 13.1175 24.4894 1V109M49 109H1" stroke="black" strokeWidth="2"/>
			</svg>
		</div>
	)
}

export default LineAnimationOne