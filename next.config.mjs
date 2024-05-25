/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.DOMAIN],
		formats: ['image/avif', 'image/webp'],
	},
	// cacheBust: true,
	// output: 'export',
	// // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// trailingSlash: true,
	// // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	// skipTrailingSlashRedirect: true,
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
	// Optional: Change the output directory `out` -> `dist`
	// distDir: 'dist',
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
}

export default nextConfig
