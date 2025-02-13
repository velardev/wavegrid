const Services = () => {
	return (
		<div className="flex flex-col py-12 md:py-24 px-4 md:px-8 lg:px-16">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl font-bold font-[family-name:var(--font-poly-sans)]">Websites that do not break the bank.</h2>
				<p className="mt-4 text-xl">Starting at $0 down and $150/mo.</p>
			</div>
			<div className="flex flex-col md:flex-row gap-12 md:gap-24 max-w-7xl mx-auto mt-16">
				<div className="flex flex-col gap-4 w-full md:w-1/3 text-center">
					<div className="flex justify-center items-center bg-[#FEF7D7] rounded-2xl w-full aspect-square">
					<img src="images/money.png" alt="" className="inline-block w-2/5" />
					</div>
					<h3 className="font-medium text-lg">Zero upfront cost</h3>
					<p>With $0 down and low monthly payments, we make professional web design that drive results accessible without compromising quality.</p>
				</div>

				<div className="flex flex-col gap-4 w-full md:w-1/3 text-center">
					<div className="flex justify-center items-center bg-[#FBDEED] rounded-2xl w-full aspect-square">
					<img src="images/100.png" alt="" className="inline-block w-2/5" />
					</div>
					<h3 className="font-medium text-lg">One-stop solution</h3>
					<p>We handle everything from start to finish, including design, development, hosting and maintenance. Leaving nothing for you to worry about.</p>
				</div>

				<div className="flex flex-col gap-4 w-full md:w-1/3 text-center">
					<div className="flex justify-center items-center bg-[#D5EDFE] rounded-2xl w-full aspect-square">
						<img src="images/maple-leaf.png" alt="" className="inline-block w-2/5" />
					</div>
					<h3 className="font-medium text-lg">Made in Canada</h3>
					<p>We do not outsource our work. Our designer and developers are all based in Canada and work remotely from home.</p>
				</div>
			</div>
		</div>
	)
}

export default Services