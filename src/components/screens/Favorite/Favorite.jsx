import { useSelector } from 'react-redux'
import styles from './Favorite.module.scss'
import FavEmpty from './favEmpty'
import CarItem from '../../CarItem/CarItem'

const Favorite = () => {
	const items = useSelector(state => state.basket.favoriteItems)
	return (
		<div className={styles.wrapper}>
			 {items.length === 0 ? <FavEmpty/> : <>{items.map((item, i) => (
					<CarItem {...item} key={i} />
			 ))}</>}
		</div>
	)
}

export default Favorite
