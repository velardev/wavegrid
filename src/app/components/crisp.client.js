'use client'

export const CrispLink = () => {
	const openCrisp = (e) => {
		e.preventDefault()
		if (typeof window !== 'undefined') {
			window.$crisp?.push(['do', 'chat:open'])
		}
	}

	return (
		<a href="" onClick={openCrisp} className="inline-block mt-2 font-medium text-black font-[family-name:var(--font-poly-sans)]">
			Open chat
		</a>
	)
}