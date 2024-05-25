import { redirect } from 'next/navigation'

export default async function Admin() {
	redirect('/admin/add')
	return (
		<div>
			<h2>hi</h2>
		</div>
	)
}
