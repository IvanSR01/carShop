import { createSlice } from "@reduxjs/toolkit";
import { ICarItem } from "../../types/data";

interface IInitialState {
	itemsFavorite: ICarItem[]
}

const initialState: IInitialState = {
	itemsFavorite:[]
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers:{
		toggleFavorite: (state, {payload}) => {
			const findItem: ICarItem | undefined = state.itemsFavorite.find(obj => obj.id === payload.id)
			if(findItem){
				const findIndex = state.itemsFavorite.indexOf(findItem)
				state.itemsFavorite.splice(findIndex , findIndex + 1)
			} else {
				state.itemsFavorite.push(payload)
			}
		}
	}
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer