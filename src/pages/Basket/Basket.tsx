import { FC, useState } from 'react'
import { useAppSelector } from '../../redux/hook'
import styles from './Baket.module.scss'
import SucceessBasket from './SucceessBasket'
import Empty from './Empty'
import BasketFullItems from './BasketItems/BasketFullItems'
const Basket: FC = () => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const { items } = useAppSelector(state => state.basket)
	return (
		<div className={styles.wrapper}>
			{items.length === 0 ? (
				isSuccess ? <SucceessBasket setIsSuccess={() => setIsSuccess(false)}/> : <Empty />
			) : (
				<BasketFullItems setIsSuccess={() => setIsSuccess(true)}/>
			)}
		</div>
	)
}

export default Basket
