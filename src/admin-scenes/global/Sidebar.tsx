'use client'
import CollectionsIcon from '@mui/icons-material/Collections'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Box, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import { ReactNode, useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { colors } from '../theme'

import Link from 'next/link'
import './sidebar.css'

interface ItemPropsI {
	title: string
	to: string
	icon: ReactNode
	selected: string
	setSelected: (title: any) => void
}

const Item = ({ title, to, icon, selected, setSelected }: ItemPropsI) => {
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
			component={<Link href={to} />}
		>
			<Typography variant='h5'>{title}</Typography>
		</MenuItem>
	)
}

const SidebarEl = () => {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [selected, setSelected] = useState('Продукция')

	const handleLogOut = () => {
		axios('/auth/logout').then(res => {
			window.location.replace('https://simter-st.ru/')
		})
	}
	return (
		<Box
			className={`sidebar__wrapper ${
				isCollapsed ? 'sidebar--collapsed' : null
			}`}
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]}!important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<Sidebar
				collapsed={isCollapsed}
				width='300px'
				className={`sidebar ${isCollapsed ? 'sidebar--collapsed' : null}`}
			>
				<Menu className='sidebar--exit'>
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100],
						}}
						className={`${isCollapsed ? 'sidebar__icon' : ''}`}
					>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'
							>
								<Typography variant='h3' color={colors.grey[100]}>
									Тротуарка59
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{!isCollapsed && (
						<Box mb='25px' className='sidebar__admin-title'>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<img
									alt='profile-user'
									width={'100px'}
									height={'100px'}
									src={`https://simter-st.ru/assets/img/favicon/192.png`}
									style={{ cursor: 'pointer', borderRadius: '50%' }}
								/>
							</Box>

							<Box textAlign='center'>
								<Typography
									variant='h3'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}
								>
									Администратор
								</Typography>
							</Box>
						</Box>
					)}

					<Box
						paddingLeft={isCollapsed ? undefined : '10%'}
						className='sidebar__items'
					>
						<Item
							title='Продукция'
							to='/admin/add'
							icon={<DashboardCustomizeIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Item
							title='Галерея'
							to='/admin/gallery'
							icon={<CollectionsIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Item
							title='Заявки'
							to='/admin/contacts'
							icon={<GroupIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Item
							title='Профиль'
							to='/admin/profile'
							icon={<VpnKeyIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Item
							title='Выйти из панели'
							to='/'
							icon={<LogoutIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</Sidebar>
		</Box>
	)
}
export default SidebarEl
