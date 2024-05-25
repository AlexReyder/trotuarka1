'use client'

import Header from '@/admin-scenes/Header'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { Box } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './styles.css'

const PriceListAdmin = () => {
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/api/admin/getPriceList', {
				headers: {
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache',
					Expires: '0',
				},
			}).then(res => {
				console.log(res.data)
			})
			// setIsLinkReady(result.data)
		}
		fetchData()
	}, [])

	const [isLinkReady, setIsLinkReady] = useState<string | null>(null)

	return (
		<Box>
			<Header
				title='Прайс-лист'
				subtitle='Скачивание актуального прайс-листа'
			/>
			<Box m='40px 0 0 10px' height='75vh'>
				<Link href='' className='download-price'>
					<FileDownloadIcon />
					<span>Скачать прайс-лист</span>
				</Link>
			</Box>
		</Box>
	)
}
export default PriceListAdmin
