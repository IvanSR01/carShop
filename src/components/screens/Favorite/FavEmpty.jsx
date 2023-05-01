import Button from '../../UI/Button/Button'
import styles from './Favorite.module.scss'
import { Link } from "react-router-dom";
const FavEmpty = () => {
	return (
		<div className={styles.ntlWrapper}>
			<div className={styles.ntlContent}>
				<img src='public/servicesImg/image 9.png' alt='' />
				<h2>Закладок нет :(</h2>
				<p>Вы ничего не добавляли в закладки</p>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<Button>
						<img src='public/Group.png' alt='' />
						Вернуться назад
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default FavEmpty
