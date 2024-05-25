import { ConsultationModal } from '@/features/ConsultationModal'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { OkIcon } from '../../Icons/OkIcon/OkIcon'
import { ShortArrowIcon } from '../../Icons/ShortArrowIcon/ShortArrowIcon'
import cls from './HeroSlider.module.scss'

export const HeroSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [slidesLength, setslidesLength] = useState(0)
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<>
			<Swiper
				className={cls.Sw}
				ref={sliderRef}
				slidesPerView={1}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ['-20%', 0, -1],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}}
				modules={[EffectCreative, Pagination, Autoplay]}
				pagination={{
					el: '.swiper-pagination',
					clickable: true,
				}}
				autoplay={{
					delay: 5000,
				}}
				onSwiper={swiper => setslidesLength(swiper.slides.length)}
				onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
			>
				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${'/img/hero/1.jpg'})` }}
				>
					<h1 className={cls.Heading}>
						Тротуарная плитка <br />
						от производителя
					</h1>
					<h2 className={cls.Subheading}>
						Современный внешный вид с минимальными вложениями.
					</h2>

					<div className={cls.ButtonsBox}>
						<PrimaryButton
							text='Получить консультацию'
							icon={<OkIcon fill='white' />}
							onClick={() => setModalConsultOpen(true)}
						/>

						<Link href='/catalog' className={cls.Link}>
							<span>Перейти в каталог</span>
							<ShortArrowIcon className={cls.LinkIcon} />
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${'/img/hero/2.jpg'})` }}
				>
					<h1 className={cls.Heading}>
						Разнообразие цветов <br />и решений
					</h1>
					<h2 className={cls.Subheading}>
						Современный внешный вид с минимальными вложениями.
					</h2>

					<div className={cls.ButtonsBox}>
						<PrimaryButton
							text='Получить консультацию'
							icon={<OkIcon fill='white' />}
							onClick={() => setModalConsultOpen(true)}
						/>

						<Link href='/catalog' className={cls.Link}>
							<span>Перейти в каталог</span>
							<ShortArrowIcon className={cls.LinkIcon} />
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${'/img/hero/3.jpg'})` }}
				>
					<h1 className={cls.Heading}>
						Экспресс <br />
						доставка
					</h1>
					<h2 className={cls.Subheading}>
						Современный внешный вид с минимальными вложениями.
					</h2>
					<div className={cls.ButtonsBox}>
						<PrimaryButton
							text='Получить консультацию'
							icon={<OkIcon fill='white' />}
							onClick={() => setModalConsultOpen(true)}
						/>

						<Link href='/catalog' className={cls.Link}>
							<span>Перейти в каталог</span>
							<ShortArrowIcon className={cls.LinkIcon} />
						</Link>
					</div>
				</SwiperSlide>
			</Swiper>
			<ConsultationModal
				data='Консультация'
				heading='Консультация'
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
		</>
	)
}
