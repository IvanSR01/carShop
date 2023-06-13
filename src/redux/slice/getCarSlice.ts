import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICarItem } from '../../types/data'

type TypeParams = {
	sortedValue?: string
	orderValue?: boolean
	isFavoriteRequst?: boolean
}

export const fetchCar = createAsyncThunk(
	'car/fetchCar',
	async (params: TypeParams) => {
		const { sortedValue, orderValue, isFavoriteRequst } = params
		if (!isFavoriteRequst) {
			const { data } = await axios.get(
				`https://642ea9b02b883abc6413abe7.mockapi.io/piz/car?sortBy=${sortedValue}&order=${
					orderValue ? 'asc' : 'desc'
				}`
			)
			return data
		}
		const { data } = await axios.get(
			'https://642ea9b02b883abc6413abe7.mockapi.io/piz/car?sortBy=rating&order=asc&page=1&limit=3'
		)
		return data
	}
)

interface IInitialState {
	items: ICarItem[]
	status: string
}

const initialState: IInitialState = {
	items: [],
	status: 'loading'
}

const getCarSlice = createSlice({
	name: 'getCar',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCar.pending, state => {
			state.status = 'loading'
			state.items = []
		})
		builder.addCase(fetchCar.fulfilled, (state, { payload }) => {
			state.status = 'success'
			state.items = payload
		})
		builder.addCase(fetchCar.rejected, state => {
			state.status = 'error'
			state.items = []
		})
	}
})

export default getCarSlice.reducer
