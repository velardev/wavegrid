import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request) {
	const { name, email, company, subject, message } = await request.json()

	const msg = {
		to: process.env.SENDGRID_EMAIL_TO,
		from: process.env.SENDGRID_EMAIL_FROM,
		replyTo: email,
		subject: 'Wave/Grid contact form submission',
		text: message,
		html: `
			<p>Name: ${name}</p>
			<p>Email: ${email}</p>
			<p>Company: ${company}</p>
			<p>Subject: ${subject}</p>
			<div>Message: ${message}</div>
		`,
	}

	try {
		await sgMail.send(msg)
		return new Response('OK', { status: 200 })
	} catch (error) {
		console.error(error)
		return new Response('Error', { status: 500 })
	}
}
