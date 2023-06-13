import { FC } from 'react'
import { useAppSelector } from '../redux/hook'
import Loader from './Loader/Loader'
import CarItem from './CarItem/CarItem'

const SearchAndSort: FC = () => {
	const { items, status } = useAppSelector(state => state.car)
	const { categoryId } = useAppSelector(state => state.filter)
	return (
		<>
			{status === 'loading' ? (
				<Loader />
			) : (
				<>
					{items
						.filter(item => {
							if (categoryId === 0) {
								return true
							} else if (+item.type === categoryId) {
								return true
							} else {
								return false
							}
						})
						.map((item, i) => (
							<CarItem {...item} key={i} />
						))}
				</>
			)}
		</>
	)
}

export default SearchAndSort
