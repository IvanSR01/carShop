import { FC } from 'react'
import styles from './CarItem.module.scss'

interface IBuy {
	price: string
	isBuy: boolean
	onClickBuyOrRemove: () => void
}

const BuyAndPrice:FC<IBuy> = ({ price, isBuy, onClickBuyOrRemove }) => {
	return (
		<div className={styles.price}>
				{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'Rub'
				}).format(Number(price))}
				<button
					onClick={onClickBuyOrRemove}
					className={isBuy ? styles.active : ''}
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
	)
}

export default BuyAndPrice
