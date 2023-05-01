import { useCallback, useContext, useState } from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
const Search = () => {
	const { setSearch } = useContext(SearchContext)
	const [value ,setValue] = useState('')
	const onChangeOnvalue = (e) =>{
		setValue(e.target.value)
		onValueSort(e.target.value)
	}
	const onValueSort = useCallback(
		debounce((value) => {
			setSearch(value)
		}, 250)
	,[])
	return (
		<input  className={styles.input} type='text' placeholder='Поиск...'  value={value} onChange={(e) => onChangeOnvalue(e) }/>
	)
}

export default Search
