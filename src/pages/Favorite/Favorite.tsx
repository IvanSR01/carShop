import { FC } from 'react'
import styles from './Favorite.module.scss'
import Empty from './Empty'
import { useAppSelector } from '../../redux/hook'
import CarItem from '../../components/CarItem/CarItem'
const Favorite: FC = () => {
	const items = useAppSelector(state => state.favorite.itemsFavorite)
	return (
		<div className={styles.wrapper}>
			{items.length === 0 ? (
				<Empty />
			) : (
				<>
					{items.map((item, i) => (
						<CarItem {...item} key={i} />
					))}
				</>
			)}
		</div>
	)
}

export default Favorite
