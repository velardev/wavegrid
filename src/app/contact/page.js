import Link from 'next/link'
import Form from '@/app/components/form'
import { CrispLink } from '@/app/components/crisp.client'

export const metadata = {
	title: 'Contact | WaveGrid | Full-Service Web Design and Development for Small Businesses',
	description: 'Custom websites for your business that convert. Starting at $0 down and $150/month.',
}

const Contact = () => {
	return (
		<main className="">
			<div className="contact-hero relative overflow-hidden flex flex-col items-center justify-center h-[60vh] p-8 bg-grey-600 rounded-b-2xl">
				<div className="relative max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold font-[family-name:var(--font-poly-sans)]">
						Let's work together.
						<br />
						<img src="images/handshake.png" className="inline w-10" />
					</h2>
					<p className="mt-4 text-xl">Get in touch with us for the 5-page $150/mo website or a full custom solution.</p>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-20 my-20 max-w-7xl mx-auto px-4 md:px-8">
				<div className="flex flex-col gap-8 md:w-1/3">
					<div className="flex items-start gap-4 text-left">
						<div className="border border-grey-300 rounded-lg p-2 basis-[45px] aspect-square flex-shrink-0 text-center">
							<img src="icons/email.svg" alt="" className="inline" />
						</div>

						<div className="flex-1">
							<h3 className="font-medium">Email us</h3>
							<p className="text-gray-500 mt-2 text-sm">
								Send us an email with your ideas, questions, or just to say hello. We'll get back to you within 24 hours. <br />
								<a href="mailto:hi@wavegridwebdesign.com" className="inline-block mt-2 font-medium text-black font-[family-name:var(--font-poly-sans)]">hi@wavegridwebdesign.com</a>
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4 text-left">
						<div className="border border-grey-300 rounded-lg p-2 basis-[45px] aspect-square flex-shrink-0 text-center">
							<img src="icons/chat.svg" alt="" className="inline" />
						</div>

						<div className="flex-1">
							<h3 className="font-medium">Chat with us</h3>
							<p className="text-gray-500 mt-2 text-sm">
								Chat with us live on our website. If we are busy, we'll get back to you within 24 hours. <br />
								<CrispLink />
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4 text-left">
						<div className="border border-grey-300 rounded-lg p-2 basis-[45px] aspect-square flex-shrink-0 text-center">
							<img src="icons/phone.svg" alt="" className="inline" />
						</div>

						<div className="flex-1">
							<h3 className="font-medium">Call us</h3>
							<p className="text-gray-500 mt-2 text-sm">
								Sunday to Saturday, 10am to 12am EST. We're happy to answer any questions you might have. <br />
								<a href="tel:1-514-562-7301" className="inline-block mt-2 font-medium text-black font-[family-name:var(--font-poly-sans)]">+1 (514) 562-7301</a>
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4 text-left">
						<div className="border border-grey-300 rounded-lg p-2 basis-[45px] aspect-square flex-shrink-0 text-center">
							<img src="icons/calendar.svg" alt="" className="inline" />
						</div>

						<div className="flex-1">
							<h3 className="font-medium">Book an intro call</h3>
							<p className="text-gray-500 mt-2 text-sm">
								Sunday to Saturday, 10am to 12am EST. Book an intro call with us and let's get started. <br />
								<Link href="https://calendly.com/velardev/30min" className="inline-block mt-2 font-medium text-black font-[family-name:var(--font-poly-sans)]">Book a call</Link>
							</p>
						</div>
					</div>
				</div>
				<Form />
			</div>
		</main>
	)
}

export default Contact