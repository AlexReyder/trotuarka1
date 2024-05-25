import fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')
	const products = JSON.parse(AllProductsJSON)

	// const browser = await puppeteer.launch()
	// const page = await browser.newPage()
	// // await page.goto('http://qr.wedraft.ru:3000/catalog', {
	// // 	waitUntil: 'domcontentloaded',
	// // })
	// await page.goto(`file://public/pricelist.html`)
	// await page.setViewport({ width: 1280, height: 1024 })

	// await page.screenshot({ path: 'public/pricelist/price.png' })
	// console.log('The title HHHHHHHHHHEEEEEEEEEEY')
	// await browser.close()
	// console.log(__dirname)
	return NextResponse.json({ download: '' })
}
