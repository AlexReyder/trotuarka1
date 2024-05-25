export const dynamic = 'force-dynamic'
import { AlbumsI } from '@/admin-scenes/gallery/AddAlbumModal'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const res: string | null = data.get('data') as unknown as string
	const newProduct: AlbumsI = JSON.parse(res)

	const newAlbum = newProduct.images.map((orig: string, i: number) => {
		const newPath = orig.split('/').slice(0, -1).join('/') + `/${++i}.jpg`
		fs.renameSync('public' + orig, 'public' + newPath)
		return newPath
	})

	const AllProductsJSON = fs.readFileSync('public/data/albums.json', 'utf-8')
	const products: AlbumsI[] = JSON.parse(AllProductsJSON)

	const index = products.findIndex(arr => arr.name == newProduct.name)
	newProduct.images = newAlbum
	products[index] = newProduct

	let result = JSON.stringify(products)
	fs.writeFileSync('public/data/albums.json', result)

	return NextResponse.json('')
}
