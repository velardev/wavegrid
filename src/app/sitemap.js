export default function SiteMap() {
	return [
		{
			url: 'https://wavegridwebdesign.com',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://wavegridwebdesign.com/contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://wavegridwebdesign.com/faq',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
	]
}