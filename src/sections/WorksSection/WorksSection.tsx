'use client'
import { AlbumsI } from '@/admin-scenes/gallery/AddAlbumModal'
import Work from '@/entities/Work/Work'
import { ShortArrowIcon } from '@/shared/ui/Icons/ShortArrowIcon/ShortArrowIcon'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import cls from './WorksSection.module.scss'

export const WorksSection = () => {
	useEffect(() => {
		const fetchData = async () => {
			const albums = await axios(
				`${process.env.domainUrl}/api/admin/gallery/getAlbums`,
				{
					headers: {
						'Cache-Control': 'no-cache',
						Pragma: 'no-cache',
						Expires: '0',
					},
				}
			)
			setData(albums.data)
		}
		fetchData()
	}, [])
	const [data, setData] = useState<AlbumsI[]>([])
	const params2 = {
		wrapperClass: cls.SwiperWrapper,
		slidesPerView: 1,
	}

	const z = data?.map((item: AlbumsI, i: number) => {
		return [<Work bg={item.images[0]} heading={item.name} key={`n${i}`} />]
	})

	return (
		<Section id='projects' className={cls.Projects}>
			<Container className={cls.Container}>
				<Headings title='Проекты наших клиентов' />
				<ArrowSlider
					controlClass={cls.Control}
					className={cls.ProjectsSlider}
					SwiperClass={cls.Slider}
					SlideClass={cls.Slide}
					WrapperClass={cls.SliderWrapper}
					config={params2}
				>
					{z}
				</ArrowSlider>

				<div className={cls.LinkContainer}>
					<Link href='/gallery' className={cls.Link}>
						<span>Перейти в галерею</span>
						<ShortArrowIcon className={cls.LinkIcon} />
					</Link>
				</div>
			</Container>
		</Section>
	)
}
