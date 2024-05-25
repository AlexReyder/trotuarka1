import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './DeliverySection.module.scss'

interface DeliverySectionProps {
	classContainer?: string
}

export const DeliverySection = ({ classContainer }: DeliverySectionProps) => {
	return (
		<Section id='delivery'>
			<Container className={classContainer}>
				<Headings title='Доставка' />
				<article className={cls.Company}>
					<p className={cls.Description}>
						Мы предлагаем услугу по доставке нашей продукции автотранспортом с
						краном-манипулятором. Применение крана-манипулятора делает процесс
						грузоперевозок максимально удобным, так как он совмещает в себе
						транспортное и грузоподъемное средство, что поможет вам сэкономить
						время и деньги. Вам не нужно искать и оплачивать две единицы
						техники, не нужно искать людей для разгрузки товара. С помощью одной
						машины можно будет погрузить, перевезти и разгрузить Ваш товар. Для
						удобства доставки вся продукция упакована на поддонах и обернута
						упаковочной пленкой. Стоимость доставки рассчитывается индивидуально
						и зависит от расстояния, объема заказа, сложности подвоза продукции.
					</p>
				</article>
			</Container>
		</Section>
	)
}
