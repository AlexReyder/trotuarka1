//@ts-nocheck
'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './CTASection.module.scss'
interface CustomProjectProps {
	className?: string
	heading: string
	bg: string
}

export const CTASection = ({ className, heading, bg }: CustomProjectProps) => {
	const { control, register, handleSubmit } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})
	const router = useRouter()
	const onSubmit = (data: any) => {
		axios
			.post('./mail/send.php', data)
			// .then(response => router.push('/spasibo'))
			.catch(e => console.log(e))
	}

	return (
		<Section className={cls.Quiz}>
			<Container className={cls.Container}>
				<div className={cls.Wrapper}>
					<div className={cls.Left}>
						<h2 className={cls.Heading}>{heading}</h2>
						<h3 className={cls.Subheading}>
							Оставьте номер телефона. Наш специалист перезвонит и подробно
							ответит на Ваши вопросы.
						</h3>
					</div>
					<div
						className={cls.Right}
						style={{
							backgroundImage: `
                            linear-gradient(to right, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.25) 100%),
                            url(${bg})`,
						}}
					>
						<form onSubmit={handleSubmit(onSubmit)} className={cls.Right}>
							<Controller
								name='username'
								control={control}
								render={({ field }) => (
									<ModalInput
										placeholder='Ваше имя'
										{...field}
										// className={cls.ModalInput}
									/>
								)}
							/>
							<Controller
								name='phone'
								control={control}
								render={({ field }) => (
									<PhoneInput
										containerClass={cls.PhoneContainer}
										inputClass={cls.ModalInput}
										country={'ru'}
										inputProps={{
											required: true,
										}}
										onlyCountries={['ru']}
										autoFormat={true}
										placeholder='Номер телефона'
										specialLabel=''
										{...field}
									/>
								)}
							/>
							<PrimaryButton
								icon={<OkIcon fill='#fff' />}
								text='Отправить заявку'
								className={cls.Submit}
								type='submit'
							/>
						</form>
					</div>
				</div>
			</Container>
		</Section>
	)
}
