import cls from './AboutAdventages.module.scss'
interface AboutAdventagesProps {
	img: string
	title: string
	text: string
}
export const AboutAdventages = ({ img, title, text }: AboutAdventagesProps) => {
	return (
		<div className={cls.Wrapper}>
			<div className={cls.Head}>
				<img src={img} alt={title} className={cls.Img} />
				<p className={cls.Title}>{title}</p>
			</div>
			<p className={cls.Text}>{text}</p>
		</div>
	)
}
