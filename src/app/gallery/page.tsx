import { GallerySection } from '@/sections/GallerySection/GallerySection'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Gallery() {
	return (
		<main>
			<Header />
			<Breadcrumb currentPage='Галерея' />
			<GallerySection />
			<Footer />
		</main>
	)
}
