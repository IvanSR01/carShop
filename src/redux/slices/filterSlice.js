import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sortValue: 0,
	ascValue: true
}
const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId: (state, value) => {
			state.categoryId = value.payload
		},
		setSortValue: (state, value) => {
			state.sortValue = value.payload
		},
		setAscValue: state => {
			state.ascValue = !state.ascValue
		}
	}
})
export const { setCategoryId, setSortValue, setAscValue } = filterSlice.actions

export default filterSlice.reducer
