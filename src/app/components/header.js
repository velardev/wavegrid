'use client'

import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const navRef = useRef()

	const handleMenuClick = () => {
		if (!showMenu) {
			gsap.to(navRef.current, {
				width: '240px',
				duration: 0.3,
				ease: 'power1.out',
				onComplete: () => setShowMenu(true),
			})
			gsap.to(navRef.current.querySelector('ul'), {
				height: 'auto',
				duration: 0.3,
				ease: 'power1.out',
			})
		} else {
			gsap.to(navRef.current, {
				width: 'auto',
				duration: 0.3,
				ease: 'power1.out',
				onComplete: () => setShowMenu(false),
			})
			gsap.to(navRef.current.querySelector('ul'), {
				height: 0,
				duration: 0.3,
				ease: 'power1.out',
			})
		}
		setShowMenu(!showMenu)
	}

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
		<header className="fixed z-10 top-4 left-0 w-full px-4 md:px-8 lg:px-16 flex justify-between items-center">
			<Link href="/" className="">
				<img src="images/wavegrid-logo.svg" width={120} />
			</Link>
			<nav className="absolute left-1/2 top-0 transform -translate-x-1/2 px-4 md:px-8 py-2 bg-white/50 rounded-2xl backdrop-blur-xl backdrop-saturate-150 [clip-path:inset(12px 12px 12px 12px round 12px)]" ref={navRef}>
				<button type="button" className="block md:hidden w-full text-center text-gray-600 text-sm font-medium" onClick={() => handleMenuClick()}>Menu</button>
				<ul className={`overflow-hidden md:overflow-visible flex flex-col md:flex-row items-center md:flex-row gap-2 md:gap-8 md:h-auto text-gray-600 text-sm text-center font-medium ${showMenu ? 'h-auto' : 'h-0'}`}>
					{links.map((link, index) => (
						<li key={link.name} className={`${link.active ? 'text-blue-600 font-bold' : ''} ${index === links.length - 1 ? 'mb-4 md:mb-0' : ''} ${index === 0 ? 'mt-4 md:mt-0' : ''}`}>
							<Link href={link.href} className="hover:text-blue-600 hover:font-bold transition transition-color" onClick={() => setShowMenu(false)}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Link href="/contact" className="py-2 px-4 bg-blue-600 rounded-2xl text-white text-sm font-medium font-[family-name:var(--font-poly-sans)] active:scale-95 transition transition-duration-300">Book a call</Link>
		</header>
	)
}

export default Header