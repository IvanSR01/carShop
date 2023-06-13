import { FC } from 'react'
import styles from './Baket.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
const Empty: FC = () => {
	return (
		<div className={styles.empty}>
		<div>
			<img src="public/servicesImg/image 8.png" alt="" />
			<p>Корзина пустая</p>
			<span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
			<br />
			<Link to="/store">
				<Button>Вернуться назад</Button>
			</Link>
		</div>
	</div>
	)
}

export default Empty
