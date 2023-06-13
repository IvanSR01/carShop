import { FC } from 'react'
import styles from './Modal.module.scss'
import { data } from '../../pages/Home/data'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { setCategoryId } from '../../redux/slice/filterSlice'
const Category: FC = () => {
	const dispatch = useAppDispatch()
	const { categoryId } = useAppSelector(state => state.filter)
	const onClick = (index: number) => {
		dispatch(setCategoryId(index))
	}
	return (
		<div className={styles.categorys}>
			{data.map((item, index) => (
				<div
					onClick={() => onClick(index)}
					className={`${styles.category} ${
						categoryId === index ? styles.active : ''
					}`}
					key={index}
				>
					{item.title}
				</div>
			))}
		</div>
	)
}

export default Category
