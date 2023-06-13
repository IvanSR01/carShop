import { useEffect, useState, FC } from 'react'
import styles from './CarItem.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { ICarItem } from '../../types/data'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { buyOnClick, removeOneOnClick } from '../../redux/slice/basketSlice'
import { toggleFavorite } from '../../redux/slice/favoriteSlice'
import { motion } from 'framer-motion'
import BuyAndPrice from './BuyAndPrice'
const CarItem: FC<ICarItem> = ({ id, title, imgUrl, desc, price, type }) => {
	const [isBuy, setIsBuy] = useState(false)
	const [isFavorite, setIsFavorite] = useState(false)
	const item: ICarItem = { id, title, imgUrl, desc, price, type }
	const items = useAppSelector(state => state.basket.items)
	const itemsFavorite = useAppSelector(state => state.favorite.itemsFavorite)
	const dispatch = useAppDispatch()
	useEffect(() => {
		const findItem = items.find(obj => obj.id === item.id)
		if (findItem) {
			setIsBuy(true)
		} else {
			setIsBuy(false)
		}
		const findItemFavorite = itemsFavorite.find(obj => obj.id === item.id)
		if (findItemFavorite) {
			setIsFavorite(true)
		} else {
			setIsFavorite(false)
		}
	}, [items, itemsFavorite])
	const onClickBuyOrRemove = () => {
		if (isBuy) {
			dispatch(removeOneOnClick(item))
		} else {
			dispatch(buyOnClick(item))
		}
	}
	return (
		<motion.div 
		initial={{y: '200px', opacity: 0}}
		animate={{y: '0px', opacity: 1}}
		transition={{
			duration: 1
		}}
		 className={styles.wrapper}>
			<button
				onClick={() => dispatch(toggleFavorite(item))}
				className={`${styles.likes} ${isFavorite ? styles.isLike : ''}`}
			>
				<AiOutlineHeart className={styles.svg} />
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
			<BuyAndPrice price={price} isBuy={isBuy} onClickBuyOrRemove={() => onClickBuyOrRemove()}/>
		</motion.div>
	)
}

export default CarItem
