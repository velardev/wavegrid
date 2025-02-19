'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect, useState } from 'react'
import Modal from '@/app/components/modal'

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		subject: '',
		message: '',
	})

	const formRef = useRef(null)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [showModal, setShowModal] = useState(false)

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

	const handleSubmit = async e => {
		e.preventDefault()
		setFormData({ name: '', email: '', company: '', subject: '', message: '' })
		const response = await fetch('/api/sendgrid', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
		if (response.status === 200) {
			setFormData({ name: '', email: '', company: '', subject: '', message: '' })
			setFormSubmitted(true)
			setShowModal(true)
		} else {
			setShowModal(true)
			setFormSubmitted('error')
		}
	}

	return (
		<div className="flex flex-col gap-4 md:w-2/3 rounded-2xl px-12 py-16 bg-white text-black" ref={formRef}>
			<h2 className="text-3xl font-bold font-[family-name:var(--font-poly-sans)]">Got ideas or questions? We've got answers. Let's chat.</h2>
			<form className="flex flex-col gap-4 mt-8 w-full" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2">
					<label htmlFor="name" className="sr-only">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none"
						style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', outline: 'none', boxShadow: 'none' }}
						placeholder="Your name"
						autoComplete="off"
						onChange={e => setFormData({ ...formData, name: e.target.value })}
						value={formData.name}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="sr-only">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none"
						style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', outline: 'none', boxShadow: 'none' }}
						placeholder="Your email"
						autoComplete="off"
						onChange={e => setFormData({ ...formData, email: e.target.value })}
						value={formData.email}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="company" className="sr-only">Company</label>
					<input
					type="text"
					name="company"
					id="company"
					className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none"
					style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', outline: 'none', boxShadow: 'none' }}
					placeholder="Your company"
					autoComplete="off"
					onChange={e => setFormData({ ...formData, company: e.target.value })}
					value={formData.company}
				/>
				</div>
				
				<div className="">
					<p className="text-sm mb-2 font-medium">How can we help?</p>
					<div className="text-sm font-medium">
						<label className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input
								type="radio"
								name="subject"
								value="5-page website"
								onChange={e => setFormData({ ...formData, subject: e.target.value })}
								checked={formData.subject === '5-page website'}
							/>
							I want a 5-page website
						</label>
						<label className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input
							type="radio"
							name="subject"
							value="Custom solution"
							onChange={e => setFormData({ ...formData, subject: e.target.value })}
							checked={formData.subject === 'Custom solution'}
						/>
							I want a custom solution
						</label>
						<label className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input
								type="radio"
								name="subject"
								value="Question"
								onChange={e => setFormData({ ...formData, subject: e.target.value })}
								checked={formData.subject === 'Question'}
							/>
							I have a question
						</label>
						<label className="inline-flex gap-2 items-center w-1/2 cursor-pointer">
							<input
								type="radio"
								name="subject"
								value="Other"
								onChange={e => setFormData({ ...formData, subject: e.target.value })}
								checked={formData.subject === 'Other'}
							/>
							Other
						</label>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="message" className="sr-only">Message</label>
					<textarea
						name="message"
						id="message"
						className="px-4 py-2 pl-0 border-b border-black focus:outline-none bg-transparent placeholder:text-black placeholder:font-medium placeholder:text-sm text-sm appearance-none"
						style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', outline: 'none', boxShadow: 'none' }}
						placeholder="Your message"
						rows="4"
						autoComplete="off"
						onChange={e => setFormData({ ...formData, message: e.target.value })}
						value={formData.message}
					></textarea>
				</div>

				<div className="flex justify-end mt-4">
					<button className="py-2 px-4 bg-black rounded-2xl text-white text-sm font-medium w-full block hover:transform hover:translate-y-1 transition duration-200">Let's get started</button>
				</div>
			</form>

			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				header={formSubmitted === 'error' ? 'Something went wrong' : 'Success!'}
			>
				<div className="flex flex-col gap-4">
					{formSubmitted === true ? (
						<p>Thanks for reaching out! We'll get back to you soon.</p>
					) : formSubmitted === 'error' ? (
						<p>Something went wrong. Please try again or email us directly at <a href="mailto:hello@wavegridwebdesign.com" className="underline">hello@wavegridwebdesign.com</a></p>
					) : null}
				</div>
			</Modal>
		</div>
	)
}

export default Form