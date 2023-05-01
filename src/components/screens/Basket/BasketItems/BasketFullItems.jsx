import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { buyAllToClick, removeAllOnClick } from '../../../../redux/slices/basketSlice'
import Button from '../../../UI/Button/Button'
import styles from '../Basket.module.scss'
import ItemBasket from './ItemBasket'
const BasketFullItems = ({items , totalPrice , setIsSuccess}) => {
	const dispatch = useDispatch()
	const onClickBuy = () =>{
		dispatch(buyAllToClick())
		setIsSuccess(true)
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
						<ItemBasket {...item} key={i} />
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
