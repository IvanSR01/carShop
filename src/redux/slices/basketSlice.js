import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice:0,
	totalBuy:0,
	favoriteItems:[]
}
const updatedTotalPrice = (state) => {
	state.totalPrice = state.items.reduce((sum , obj) => {return Number(obj.price) + sum}, 0)
}
const basketSlice = createSlice({
	name:'basket',
	initialState,
	reducers:{
		buyOnClick: (state, value) => {
			state.items.push(value.payload)
			updatedTotalPrice(state)
		},
		removeOneOnClick: (state, value) => {
			const findItem = state.items.find(obj => obj.id === value.payload.id)
			const findIndex = state.items.indexOf(findItem)
			state.items.splice(findIndex , findIndex + 1)
			updatedTotalPrice(state)
		},
		buyAllToClick: (state) => {
			state.items = [],
			state.totalBuy += 1
		},
		removeAllOnClick: (state) => {
			state.items = []
		},
		toggleFovorite: (state, {payload}) => {
			const findItem = state.favoriteItems.find(obj => obj.id === payload.id)
			if(findItem){
				const findIndex = state.favoriteItems.indexOf(findItem)
				 state.favoriteItems.slice(findIndex , findIndex + 1)
			}
			else{
				state.favoriteItems.push(payload)
			}
		}
}})
export const { buyOnClick , removeOneOnClick , removeAllOnClick, buyAllToClick, toggleFovorite } = basketSlice.actions;

export default basketSlice.reducer;