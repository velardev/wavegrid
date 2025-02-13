'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
	const pathname = usePathname()

	const links = [
		{
			name: 'Home',
			href: '/',
			active: pathname === '/',
		},
		{
			name: 'FAQ',
			href: '/faq',
			active: pathname === '/faq',
		},
		{
			name: 'Contact',
			href: '/contact',
			active: pathname === '/contact',
		},
	]

	return (
		<footer className="bg-black py-24 px-4 md:px-8 lg:px-16">
			<div className="flex flex-col lg:flex-row gap-8 mx-auto">
				<div className="w-full lg:w-1/4 text-center md:text-left">
					<Link href="/" className="" scroll={true}>
						<img src="images/wavegrid-logo-white.svg" width={120} className="inline-block" />
					</Link>
					<p className="mt-4 text-sm text-white font-medium">By <Link href="https://www.velardev.com" target="_blank" className="underline">velar.dev</Link></p>
				</div>
				<div className="w-full lg:w-1/2 text-white">
					<nav className="mx-auto">
						<ul className="flex justify-center gap-8 text-white text-center text-sm font-medium">
							{links.map((link) => (
								<li key={link.name}>
									<Link href={link.href} scroll={true}>{link.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="w-full lg:w-1/4 text-white text-center lg:text-right text-sm font-medium">
					<p>+1 (514) 562-7301</p>
					<p>hello@wavegridwebdesign.com</p>
					<p>Toronto, ON 🇨🇦</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer