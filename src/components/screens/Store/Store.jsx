import { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import Search from '../../Search/Search'
import Button from '../../UI/Button/Button'
import styles from './Store.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCar } from '../../../redux/slices/getCarSlice'
import Loader from '../../Loader/Loader'
import SearchAndSort from './SearchAndSort'
const Store = () => {
	const data = [{name:'популярности', sorteding: 'rating'}, {name:'цене' , sorteding:"price",} , {name:'алфавиту', sorteding: 'title',}]
	const [isOpen, setIsOpen] = useState(false)
	const { items, status } = useSelector(state => state.getCar)
	const categoryId = useSelector(state => state.filter.categoryId)
	const dispatch = useDispatch()
	const {sortValue , ascValue} = useSelector(state => state.filter)
	useEffect(() => {
		const fetch = async () => {
			dispatch(fetchCar({data,sortValue,ascValue}))
		}
		fetch()
	}, [sortValue, ascValue])
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2>Все машины</h2>
				<Search />
				<Button onClick={() => setIsOpen(!isOpen)}>Фильтрация</Button>
			</div>
			<Modal dataSort={data} isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className={styles.main}>
				{status === 'loading' ? (
					<Loader />
				) : (
					<SearchAndSort items={items} categoryId={categoryId} />
				)}
			</div>
		</div>
	)
}

export default Store
