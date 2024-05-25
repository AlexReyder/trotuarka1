import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
	className?: string
	text: string | ReactNode
	icon: ReactNode
	theme?: 'White' | 'White-gold'
	type?: 'button' | 'submit'
	onClick?: any
	value?: string
}

export const PrimaryButton = ({
	className,
	text,
	icon,
	theme,
	type = 'button',
	value,
	onClick,
}: PrimaryButtonProps) => {
	return (
		<button
			type={type}
			className={classNames(cls.PrimaryButton, {}, [className!, cls[theme!]])}
			value={value}
			onClick={onClick}
		>
			<p>{text}</p>
			<div className={cls.IconContainer}>{icon}</div>
		</button>
	)
}
