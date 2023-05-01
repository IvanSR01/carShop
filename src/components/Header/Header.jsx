import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import { useState } from 'react'
const Header = () => {
	const link = [
		{ name: 'HOME', link: '/' },
		{ name: 'STORE', link: '/store' },
		{ name: 'BASKET', link: '/basket' },
		{ name: 'FAVORITES', link: '/favorite' }
	]
	const { pathname } = useLocation()
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<img src='public/servicesImg/logo.jpg' alt='' />
				<div>
					<p>REACT AUTO</p>
					<span>Лучшие авто в РФ</span>
				</div>
			</div>
			<div className={styles.links}>
				{link.map((item, i) => (
					<Link to={item.link} key={i} style={{ textDecoration: 'none' }}>
						<p className={pathname === link[i].link ? styles.active : ''}>
							{item.name}
						</p>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Header
