import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import getFavorCarSlice from './slices/getFavorCarSlice'
import getCarSlice from './slices/getCarSlice'
import basketSlice from './slices/basketSlice'

export const store = configureStore({
	reducer:{
		filter:filterSlice,
		favorCar:getFavorCarSlice,
		getCar: getCarSlice,
		basket: basketSlice
	}
})