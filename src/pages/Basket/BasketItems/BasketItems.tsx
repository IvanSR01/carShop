import { FC } from 'react'
import styles from './BasketItems.module.scss'
import { useAppDispatch } from '../../../redux/hook'
import { removeOneOnClick } from '../../../redux/slice/basketSlice'
import { ICarItem } from '../../../types/data'
import { motion } from 'framer-motion'
const BasketItem: FC<ICarItem> = ({ id, title, imgUrl, price, desc, type }) => {
	const dispatch = useAppDispatch()
	const item = {
		id,
		title,
		imgUrl,
		price,
		desc,
		type
	}
	return (
		<motion.div  className={styles.itemWrapper}>
			<div className={styles.carImg}>
				<img src={imgUrl} alt='' />
			</div>
			<div className={styles.priceAndTitle}>
				<div className={styles.title}>{title}</div>
				<div className={styles.price}>
					{new Intl.NumberFormat('de-DE', {
						style: 'currency',
						currency: 'Rub'
					}).format(Number(price))}
				</div>
			</div>

			<div>
				<button
					onClick={() => dispatch(removeOneOnClick(item))}
					className={styles.delete}
				>
					<img src='public/servicesImg/Vector.png' alt='' />
				</button>
			</div>
		</motion.div>
	)
}

export default BasketItem
