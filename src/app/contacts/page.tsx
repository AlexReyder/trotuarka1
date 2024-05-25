import { ContactSection } from '@/sections/ContactSection/ContactSection'
import { MapSection } from '@/sections/MapSection/MapSection'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Contacts() {
	return (
		<main>
			<Header />
			<Breadcrumb currentPage='Контакты' />
			<MapSection />
			<ContactSection />
			<Footer />
		</main>
	)
}
