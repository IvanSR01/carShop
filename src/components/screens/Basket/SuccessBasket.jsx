import { Link } from 'react-router-dom'
import styles from './Basket.module.scss'
import { useSelector } from 'react-redux'
import Button from '../../UI/Button/Button'

const SuccessBasket = ({ setIsSuccess }) => {
	const totalBuy = useSelector(state => state.basket.totalBuy)
	const onClickClosed = () => {
		setIsSuccess(false)
	}
	return (
		<div className={styles.empty}>
			<div>
				<img src='public/servicesImg/success.jpg' alt='' />
				<p style={{ color: 'rgb(68, 0, 178)' }}>Заказ оформлен!</p>
				<span>
					Ваш заказ #{totalBuy} скоро будет передан курьерской доставке
				</span>
				<br />
				<Link to='/store'>
					<Button onClick={onClickClosed}>Вернуться назад</Button>
				</Link>
			</div>
		</div>
	)
}

export default SuccessBasket
