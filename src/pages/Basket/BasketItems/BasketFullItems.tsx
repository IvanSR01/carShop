import { FC } from 'react'
import styles from './BasketItems.module.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { buyAllToClick, removeAllOnClick } from '../../../redux/slice/basketSlice'
import BasketItem from './BasketItems'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'

interface IV {
	setIsSuccess: () => void
}

const BasketFullItems: FC<IV> = ({ setIsSuccess }) => {
	const dispatch = useAppDispatch()
	const { totalPrice, items } = useAppSelector(state => state.basket)
	const onClickBuy = () => {
		dispatch(buyAllToClick())
		setIsSuccess()
	}
	return (
		<>
			<div className={styles.header}>
				<p>Корзина</p>
				<button onClick={() => dispatch(removeAllOnClick())}>
					Очистить корзину
				</button>
			</div>
			<div className={styles.totalPrice}>
				Итого:{' '}
				{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'Rub'
				}).format(totalPrice)}{' '}
				руб
			</div>
			<div className={styles.main}>
				<div className={styles.items}>
					{items.map((item, i) => (
						<BasketItem {...item} key={i}/>
					))}
				</div>
				<div className={styles.buy}>
					<Link to='/store'>
						<button className={styles.back}>Вернутся назад</button>
					</Link>
					<Button onClick={() => onClickBuy()}>
						Оплатить сейчас
					</Button>
				</div>
			</div>
		</>
	)
}

export default BasketFullItems
