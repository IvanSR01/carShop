import { useEffect, useState } from 'react'
import styles from './CarItem.module.scss'
import {
	buyOnClick,
	removeOneOnClick,
	toggleFovorite
} from '../../redux/slices/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
const CarItem = ({ id, title, imgUrl, desc, price}) => {
	const [isBuy, setIsBuy] = useState(false)
	const [isFavorite, setIsFavorite] = useState(false)
	const { items, favoriteItems } = useSelector(state => state.basket)
	const dispatch = useDispatch()
	const item = { id, title, imgUrl, desc, price }
	useEffect(() => {
		const findItem = items.find(obj => {
			return obj.id === item.id
		})
		const favoriteItem = favoriteItems.find(obj => {
			return obj.id === item.id
		})
		if (findItem) setIsBuy(true)
		if (favoriteItem) setIsFavorite(true)
	}, [])
	const onClickLike = () => {
		if (isFavorite) {
			return setIsFavorite(false)
		}
		dispatch(toggleFovorite(item))
		return setIsFavorite(true)
	}
	const onClickBuy = () => {
		if (isBuy) {
			dispatch(removeOneOnClick(item))
			return setIsBuy(false)
		}
		dispatch(buyOnClick(item))
		return setIsBuy(true)
	}
	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => onClickLike()}
				className={`${styles.likes} ${isFavorite ? styles.isLike : ''}`}
			>
				<img src='public/servicesImg/Li.svg' alt='' />
			</button>
			<div>
				<img src={imgUrl} alt='' />
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.desc}>
				<div>
					Тип двигателя <span></span> {desc.motor}
				</div>
				<div>
					Мощность <span></span> {desc.power}
				</div>
				<div>
					Расход топлива <span></span> {desc.toplivo}
				</div>
			</div>
			<div className={styles.price}>
				{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'Rub'
				}).format(Number(price))}
				<button
					className={isBuy ? styles.active : ''}
					onClick={() => onClickBuy()}
				>
					<img
						src={
							isBuy
								? 'public/servicesImg/check-mark-sign-svgrepo-com.svg'
								: 'public/servicesImg/basket-alt-3-svgrepo-com.svg'
						}
						alt=''
					/>
				</button>
			</div>
		</div>
	)
}

export default CarItem
