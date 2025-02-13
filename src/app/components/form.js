'use client'

import { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

const Form = () => {
	const [active, setActive] = useState(0)

	const formRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.fromTo(
			formRef.current,
			{
				backgroundColor: '#fff',
			},
			{
				backgroundColor: '#b9fc66',
				scrollTrigger: {
					trigger: formRef.current,
					start: 'top 70%',
					end: 'top 10%',
					scrub: true,
				},
			}
		)
	}, [])

	return (
		<div className="flex flex-col gap-4 md:w-2/3 rounded-2xl px-12 py-16 bg-white text-black" ref={formRef}>
			<h2 className="text-3xl font-bold font-[family-name:var(--font-poly-sans)]">Got ideas or questions? We've got answers. Let's chat.</h2>
			<form className="flex flex-col gap-4 mt-8 w-full">
				<div className="flex flex-col gap-2">
					<label htmlFor="name" className="sr-only">Name</label>
					<input type="text" name="name" id="name" className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none" placeholder="Your name" />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="sr-only">Email</label>
					<input type="email" name="email" id="email" className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none" placeholder="Your email" />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="company" className="sr-only">Company</label>
					<input type="text" name="company" id="company" className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none" placeholder="Your company" />
				</div>
				
				<div className="">
					<p className="text-sm mb-2 font-medium">How can we help?</p>
					<div className="text-sm font-medium">
						<label htmlFor="subject" className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input type="radio" name="subject" id="subject" value="5-page website" />
							I want a 5-page website
						</label>
						<label htmlFor="subject" className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input type="radio" name="subject" id="subject" value="Custom solution" />
							I want a custom solution
						</label>
						<label htmlFor="subject" className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input type="radio" name="subject" id="subject" value="Question" />
							I have a question
						</label>
						<label htmlFor="subject" className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input type="radio" name="subject" id="subject" value="Other" />
							Other
						</label>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="message" className="sr-only">Message</label>
					<textarea name="message" id="message" className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none" placeholder="Your message" rows="4"></textarea>
				</div>

				<div className="flex justify-end mt-4">
					<button className="py-2 px-4 bg-black rounded-2xl text-white text-sm font-medium w-full block hover:transform hover:translate-y-1 transition duration-200">Let's get started</button>
				</div>
			</form>
		</div>
	)
}

export default Form