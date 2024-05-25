'use client'
import { AlbumsI } from '@/admin-scenes/gallery/AddAlbumModal'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ProjectGallerySlider } from '@/shared/ui/Sliders/ProjectGallerySlider/ProjectGallerySlider'
import axios from 'axios'
import { useEffect, useState } from 'react'
import cls from './GallerySection.module.scss'

export const GallerySection = () => {
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

	const config = {
		spaceBetween: 20,
		slidesPerView: 1,
	}

	return (
		<Section id='gallery'>
			<Container className={cls.Container}>
				<Headings title='Галерея' />
				{data.map((album: AlbumsI, i: number) => (
					<div className={cls.Wrapper} key={`gla${i}`}>
						<h3 className={cls.AlbumHeadings}>{album.name}</h3>
						<ProjectGallerySlider
							controlClass={cls.Control}
							prevNameNavigation='Предыдущий'
							nextNameNavigation='Следующий'
							SwiperClass={cls.GallerySwiper}
							SlideClass={cls.GallerySlide}
							config={config}
							data={album.images}
						/>
					</div>
				))}
			</Container>
		</Section>
	)
}
