import { FC, useEffect } from 'react'
import styles from './Home.module.scss'
import { data } from './data'
import Catalog from './Catalog'
import CarItem from '../../components/CarItem/CarItem'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchCar } from '../../redux/slice/getCarSlice'
import { setCategoryId } from '../../redux/slice/filterSlice'
import Loader from '../../components/Loader/Loader'
const Home: FC = () => {
	const { items, status } = useAppSelector(state => state.car)
	const dispatch = useAppDispatch()
	useEffect(() => {
		const isFavoriteRequst: boolean = true
		dispatch(fetchCar({ isFavoriteRequst }))
	}, [])
	return (
		<div className={styles.wrapper}>
			<div className={styles.theBest}>
				<h2>Лучшие за неделю</h2>
				<div className={styles.items}>
					{status === 'loading' ? (
						<Loader />
					) : (
						<>
							{items.map((item, i) => (
								<CarItem {...item} key={i} />
							))}
						</>
					)}
				</div>
			</div>
			<div className={styles.catalog}>
				<h2>Каталог</h2>
				<div className={styles.CatalogItems}>
					{data.map((item, i) => (
						<Catalog
							onClick={() => dispatch(setCategoryId(i))}
							{...item}
							key={i}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
