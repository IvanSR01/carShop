import { configureStore } from '@reduxjs/toolkit'
import getCarSlice from './slice/getCarSlice'
import filterSlice from './slice/filterSlice'
import basketSlice from './slice/basketSlice'
import favoriteSlice from './slice/favoriteSlice'

const store = configureStore({
	reducer: {
		car: getCarSlice,
		filter: filterSlice,
		basket: basketSlice,
		favorite: favoriteSlice
	}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
