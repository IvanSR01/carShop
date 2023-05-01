import React from 'react'
import styles from '../Basket.module.scss'
import { removeOneOnClick } from '../../../../redux/slices/basketSlice'
import { useDispatch } from 'react-redux'
const ItemBasket = ({ id, title, imgUrl, price }) => {
	const dispatch = useDispatch()
	const item = {
		id
	}
	return (
		<div className={styles.itemWrapper}>
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
				<button onClick={() => dispatch(removeOneOnClick(item))} className={styles.delete}>
					<img src='public/servicesImg/Vector.png' alt='' />
				</button>
			</div>
		</div>
	)
}

export default ItemBasket
