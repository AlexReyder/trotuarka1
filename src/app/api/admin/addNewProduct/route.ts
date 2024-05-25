import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const res: string | null = data.get('data') as unknown as string
	const newProduct = JSON.parse(res)

	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')

	const slug = require('slug')
	newProduct.slug = slug(newProduct.name)

	newProduct.images.originals.forEach((orig: string[], i: number) => {
		const newPath = orig[0].split('/').slice(0, -1).join('/') + `/${++i}.jpg`
		fs.renameSync(orig[0], newPath)
		orig[0] = newPath
	})

	newProduct.images.previews.forEach((prev: string[], i: number) => {
		const newPath = prev[0].split('/').slice(0, -1).join('/') + `/${++i}.jpg`

		fs.renameSync(prev[0], newPath)
		prev[0] = newPath
	})

	const products = JSON.parse(AllProductsJSON)
	products.push(newProduct)

	let result = JSON.stringify(products)
	fs.writeFileSync('public/data/products.json', result)

	return NextResponse.json('')
}
