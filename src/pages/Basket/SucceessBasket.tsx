import { FC } from 'react'
import styles from './Baket.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useAppSelector } from '../../redux/hook'

interface IS {
	setIsSuccess: () => void	
}

const SucceessBasket: FC<IS> = ({setIsSuccess}) => {
	const { totalBuy } = useAppSelector(state => state.basket)
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
					<Button onClick={setIsSuccess}>Вернуться назад</Button>
				</Link>
			</div>
		</div>
	)
}

export default SucceessBasket
