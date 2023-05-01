import { useSelector } from 'react-redux'
import styles from './Basket.module.scss'
import EmptyBasket from './EmptyBasket'
import { useState } from 'react'
import BasketFullItems from './BasketItems/BasketFullItems'
import SuccessBasket from './SuccessBasket'
const Basket = () => {
	const {items , totalPrice} = useSelector(state => state.basket)
	const [isSuccess , setIsSuccess] = useState(false)
	return (
		<div className={styles.wrapper}>
			{items.length === 0 ? (
				isSuccess ? <SuccessBasket setIsSuccess={setIsSuccess}/> : <EmptyBasket />
			) : (
				<BasketFullItems items={items} totalPrice={totalPrice} setIsSuccess={setIsSuccess}/>
			)}
		</div>
	)
}

export default Basket
