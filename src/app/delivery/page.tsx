'use client'
import { DeliverySection } from '@/sections/DeliverySection/DeliverySection'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import cls from './delivery.module.scss'

export default function About() {
	return (
		<main>
			<Header />
			<Breadcrumb currentPage='Доставка' />
			<DeliverySection classContainer={cls.AboutContainer} />
			<Footer />
		</main>
	)
}
