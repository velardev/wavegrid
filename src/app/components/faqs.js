'use client'

import { useState } from 'react'

const Faqs = () => {
	const [active, setActive] = useState(0)

	const clickHandler = (index) => {
		if (active === index) {
			setActive(null)
		} else {
			setActive(index)
		}
	}

	const faqs = [
		{
			q: 'How long does it take to set up a website?',
			a: 'Usually 2-3 weeks, but it mostly depends on how soon the client responds to our requests for content and images and design signoffs.',
			i: 'clock.svg',
		},
		{
			q: 'What if I need more than five pages?',
			a: 'We charge a $100 one-time fee for each additional page after the first 5.',
			i: 'pages.svg',
		},
		{
			q: 'What is covered under "unlimited updates"?',
			a: 'The unlimited updates cover the ability to update text, images, and video content on your site. Design modifications are not included.',
			i: 'pencil.svg',
		},
		{
			q: 'How do I request a content update?',
			a: 'Please email us at support@wavegridwebdesign.com and it will go into our ticket system for the support team to handle.',
			i: 'headphones.svg',
		},
		{
			q: 'Can I get an e-commerce site under the subscription plan?',
			a: 'No, due to the complexity and high upkeep of e-commerce sites, we do not offer e-commerce sites under the subscription plan.',
			i: 'cart.svg',
		},
		{
			q: 'How do you take payments?',
			a: 'Once you sign up, we will send you an email invoice link through Stripe. It accepts all major debit and credit cards. The subscription price will be automatically charged on the same day of each month once you add your payment details.',
			i: 'credit-card.svg',
		},
		{
			q: 'What happens if I cancel before the 12 months are over?',
			a: 'If you cancel before the minimum contract length of 12 months, you owe us the full cost of what the site would normally cost.',
			i: 'cross.svg',
		},
		{
			q: 'Is there a buyout option after the minimum contract duration?',
			a: 'No, we don’t offer a buyout option for monthly packages. Our model relies on long-term subscriptions (5+ years) to balance the upfront costs of building a site. This approach ensures consistent income and allows us to focus on providing hands-on support and exceptional service without constantly chasing new sales. Frequent buyouts would disrupt this balance, ultimately impacting the quality of service we deliver to our clients.',
			i: 'money.svg',
		},
		{
			q: 'Do I keep the site if I cancel the subscription?',
			a: 'No, otherwise everyone would do that running us out of business 😬',
			i: 'website.svg',
		},
		{
			q: 'If I cancel my subscription, do I get to keep my domain?',
			a: 'Yes, you always own the domain.',
			i: 'www.svg',
		},
		{
			q: 'How do you handle late payments?',
			a: 'Invoices must be paid within a 7-day grace period, or a $25 late fee will apply. For subscription clients, multiple overdue invoices may result in contract cancellation, requiring full payment for the site. While we’re flexible and willing to assist, lack of communication or payment may force us to take action to ensure fair compensation for our work.',
			i: 'warning.svg',
		},
		{
			q: 'Do you use WordPress or any CMS/page builders?',
			a: 'No, all our sites are handcrafted with React, Next.js, and Tailwind.',
			i: 'brush.svg',
		},
		{
			q: 'Why not?',
			a: 'Our custom-coded sites offer better security, faster load times, easier customization, and lower costs. Unlike WordPress, we don’t rely on plugins or constant updates to prevent hacks or redirects. With no databases, there’s nothing for hackers to exploit, making our sites inherently more secure and low-maintenance.',
			i: 'lock.svg',
		},
	]

	return (
		<>
			{faqs.map((faq, index) => (
				<button type="button" key={index} className="flex items-start gap-4 py-5 text-left" onClick={() => clickHandler(index)}>
					<div className="border border-grey-300 rounded-lg p-2 basis-[45px] aspect-square flex-shrink-0 text-center">
						<img src={`icons/${faq?.i}`} alt="" className="inline" />
					</div>

					<div className="flex-1">
						<div className="flex justify-between items-top gap-4 pt-2">
							<h3 className="font-medium text-lg">{faq.q}</h3>
							<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.79289C6.68342 8.40237 7.31658 8.40237 7.70711 8.79289L12 13.0858L16.2929 8.79289C16.6834 8.40237 17.3166 8.40237 17.7071 8.79289C18.0976 9.18342 18.0976 9.81658 17.7071 10.2071L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071L6.29289 10.2071C5.90237 9.81658 5.90237 9.18342 6.29289 8.79289Z" fill="#000000"/>
							</svg>
						</div>
						{active === index && 
							<p className="text-gray-500 mt-2">
								{faq.a}
							</p>
						}
					</div>
				</button>
			))}
		</>
	)
}

export default Faqs