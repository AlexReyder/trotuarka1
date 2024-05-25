import { AboutSection } from '@/sections/AboutSection/AboutSection'
import { AdvantagesSection } from '@/sections/AdvantagesSection/AdvantagesSection'
import { CTASection } from '@/sections/CTASection/CTASection'
import { CatalogSection } from '@/sections/CatalogSection/CatalogSection'
import { ContactSection } from '@/sections/ContactSection/ContactSection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import { WorksSection } from '@/sections/WorksSection/WorksSection'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import cls from './page.module.css'
export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<CatalogSection type='TP' heading='Тротуарная плитка' />
			<CatalogSection type='FP' heading='Фасадная плитка' />
			<CatalogSection type='B' heading='Бордюры' />
			<CTASection
				heading={'Поможем с выбором и рассчитаем стоимость'}
				bg={'/img/cta/1.jpg'}
			/>
			<AdvantagesSection />
			<WorksSection />
			<AboutSection />
			<ContactSection className='contactg' />
			<Section id='mainmap' className={cls.Map}>
				<iframe
					src='https://yandex.ru/map-widget/v1/?um=constructor%3Ab7267b91a189bacb8d69466c63ba19063a58cdd6b04439443012e7a55667fc4b&amp;source=constructor'
					width='100%'
					height='400'
					frameBorder='0'
				></iframe>
			</Section>
			<Footer />
		</main>
	)
}
