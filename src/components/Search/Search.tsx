import { FC, useState, ChangeEvent } from 'react'
import styles from './Search.module.scss';

const Search: FC = () => {
	const [value, setValue] = useState<string>('')
	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	return (
		<input className={styles.input} value={value} placeholder='Поиск...' onChange={onChangeValue}/>
	)
}

export default Search
