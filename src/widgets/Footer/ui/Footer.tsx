import { Container } from '@/shared/ui/Layout/Container/Container'
import cls from './Footer.module.scss'

import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'

import { LogoWhite } from '@/shared/ui/Icons/LogoWhite/LogoWhite'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { ViberIcon } from '@/shared/ui/Icons/ViberIcon/ViberIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import Link from 'next/link'
interface FooterProps {}

export const Footer = ({}: FooterProps) => {
	return (
		<footer className={cls.Footer}>
			<Container className={cls.Prefooter}>
				<div className={cls.General}>
					<Link href='/'>
						<LogoWhite fill='#fff' />
					</Link>
					<p className={cls.Purpose}>
						Производство и продажа тротуарной, фасадной плитки, бордюров в Перми
						и Пермском крае.
					</p>
				</div>
				<div className={cls.Navigation}>
					<h3 className={cls.Heading}>Навигация</h3>
					<ul>
						<li className={cls.Item}>
							<Link href='/' className={cls.Link}>
								Главная
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/catalog' className={cls.Link}>
								Каталог
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/gallery' className={cls.Link}>
								Галерея
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/delivery' className={cls.Link}>
								Доставка
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/about' className={cls.Link}>
								О компании
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/contacts' className={cls.Link}>
								Контакты
							</Link>
						</li>
					</ul>
				</div>
				<div className={cls.Contacts}>
					<h3 className={cls.Heading}>Свяжитесь с нами</h3>
					<ul>
						<li className={cls.Item}>
							<Link href='tel:+79655588882' className={cls.Link}>
								+7 (965) 558-88-82
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='mailto:slava1700@yandex.ru' className={cls.Link}>
								slava1700@yandex.ru
							</Link>
						</li>
					</ul>
					<div className={cls.Messangers}>
						<MessangerLink
							to='https://wa.me/79655588882'
							className='f-c'
							icon={<WhatsAppIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='viber://chat?number=79655588882'
							className='f-c'
							icon={<ViberIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='https://t.me/+79655588882'
							className='f-c'
							icon={<TelegramIcon className='nav__list-icon' />}
						/>
					</div>
				</div>
			</Container>
			<p className={cls.Copyright}>2024 © Все права защищены.</p>
		</footer>
	)
}
