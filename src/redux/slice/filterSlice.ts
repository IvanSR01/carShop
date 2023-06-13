import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
	categoryId: number
	sortValue: 0
	orderValue: boolean
}

const initialState: IInitialState = {
	categoryId: 0,
	sortValue: 0,
	orderValue: true
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId: (state, {payload}) => {
			state.categoryId = payload
		},
		setSortValue: (state, {payload}) => {
			state.sortValue = payload
		},
		setOrderValue: (state, {payload}) => {
			state.orderValue = payload
		}
	}
})

export const { setCategoryId, setSortValue, setOrderValue } = filterSlice.actions

export default filterSlice.reducer