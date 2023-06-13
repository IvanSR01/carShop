import { createSlice } from '@reduxjs/toolkit'
import { ICarItem } from '../../types/data'

interface IInitialState {
	items: ICarItem[]
	totalPrice: number
	totalBuy: number
}

const initialState: IInitialState = {
	items: [],
	totalPrice: 0,
	totalBuy: 0
}

const updatedTotalPrice = (state: any) => {
	state.totalPrice = state.items.reduce((sum: number, obj: ICarItem) => {
		return Number(obj.price) + sum
	}, 0)
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		buyOnClick: (state, { payload }) => {
			state.items.push(payload)
			updatedTotalPrice(state)
		},
		removeOneOnClick: (state, { payload }) => {
			const findItem: ICarItem | undefined = state.items.find(
				obj => obj.id === payload.id
			)
			if (findItem) {
				const findIndex = state.items.indexOf(findItem)
				state.items.splice(findIndex, findIndex + 1)
				updatedTotalPrice(state)
			}
		},
		buyAllToClick: (state) => {
			state.items = []
			state.totalBuy += 1
		},
		removeAllOnClick: (state) => {
			state.items = []
		}
	}
})

export const { buyOnClick, removeOneOnClick, buyAllToClick, removeAllOnClick } = basketSlice.actions

export default basketSlice.reducer