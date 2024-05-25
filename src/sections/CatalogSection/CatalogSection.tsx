'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './CatalogSection.module.scss'

import { productItemI } from '@/app/api/admin/saveOrder/route'
import CatalogCard from '@/entities/CatalogCard/CatalogCard'
import { ShortArrowIcon } from '@/shared/ui/Icons/ShortArrowIcon/ShortArrowIcon'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CatalogSectionProps {
	className?: string
	heading: string
	type: string
}

export const CatalogSection = ({
	className,
	heading,
	type,
}: CatalogSectionProps) => {
	useEffect(() => {
		const fetchData = async () => {
			const products = await axios(
				`${process.env.domainUrl}/api/admin/getProducts`,
				{
					headers: {
						'Cache-Control': 'no-cache',
						Pragma: 'no-cache',
						Expires: '0',
					},
				}
			)
			const info = products.data.filter(
				(arr: productItemI) => arr.type === type
			)
			setData(info)
		}
		fetchData()
	}, [])
	const [data, setData] = useState([])

	const config = {
		spaceBetween: 20,
		slidesPerView: 4,
		breakpoints: {
			// when window width is <= 499px
			280: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			// when window width is <= 999px
			420: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			600: {
				slidesPerView: 3,
			},
			900: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 6,
			},
		},
	}
	const z = data?.map((item: any, i: number) => {
		return [<CatalogCard className={cls.Card} item={item} key={`n${i}`} />]
	})

	return (
		<Section id='projects' className={cls.Projects}>
			<Container className={cls.Container}>
				<Headings title={heading} className={cls.Heading} />
				<ArrowSlider
					prevNameNavigation='asdsad'
					nextNameNavigation='asda'
					config={config}
				>
					{z}
				</ArrowSlider>
				<div className={cls.LinkContainer}>
					<Link href='/catalog' className={cls.Link}>
						<span>Перейти в каталог</span>
						<ShortArrowIcon className={cls.LinkIcon} />
					</Link>
				</div>
			</Container>
		</Section>
	)
}
