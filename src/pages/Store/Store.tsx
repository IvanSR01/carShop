import { FC, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import Search from '../../components/Search/Search'
import SearchAndSort from '../../components/SearchAndSort'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchCar } from '../../redux/slice/getCarSlice'
import styles from './Store.module.scss'

const Store: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { sortValue, orderValue } = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()
	const data = [
		{ name: 'популярности', sorteding: 'rating' },
		{ name: 'цене', sorteding: 'price' },
		{ name: 'алфавиту', sorteding: 'title' }
	]
	useEffect(() => {
		const isFavoriteRequst: boolean = false
		const sortedValue: string = data[sortValue].sorteding
		dispatch(fetchCar({ sortedValue, orderValue, isFavoriteRequst }))
	}, [sortValue, orderValue])
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2>Все машины</h2>
				<Search />
				<Button onClick={() => setIsOpen(!isOpen)}>Фильтрация</Button>
			</div>
			<div className={styles.main}>
				<SearchAndSort/>
			</div>
			<Modal
				dataSort={data}
				isOpen={isOpen}
				setIsOpen={() => setIsOpen(false)}
			/>
		</div>
	)
}

export default Store
