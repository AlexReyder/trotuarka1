/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.DOMAIN],
		formats: ['image/avif', 'image/webp'],
	},
	env: {
		domainUrl: process.env.DOMAIN, // pulls from .env file
	},
	// cacheBust: true,
	typescript: {
		ignoreBuildErrors: true,
	},
}

export default nextConfig
