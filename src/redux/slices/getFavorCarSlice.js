import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchFavoriteCar = createAsyncThunk('car/fetchCarStatus', async () => {
	const res = await axios.get('https://642ea9b02b883abc6413abe7.mockapi.io/piz/car?sortBy=rating&order=asc&page=1&limit=3')
	return res.data
})
const initialState = {
	items:[],
	status:'loading' // loading || success || error
}
const getFavoriteCar = createSlice({
	name: 'getFavCar',
	initialState,
	reducer: {
		setItems: (state, value)=> {
			state.items = value.payload
		}
	},
	extraReducers:(builder) => {
			builder.addCase(fetchFavoriteCar.pending , (state) => {
				state.status = 'loading',
				state.items = []
			}),
			builder.addCase(fetchFavoriteCar.fulfilled , (state, value) => {
				state.status = 'success',
				state.items = value.payload
			}),
			builder.addCase(fetchFavoriteCar.rejected , (state) => {
				state.status = 'error',
				state.items = []
			})
	}
})
export const { setItems } = getFavoriteCar.actions;

export default getFavoriteCar.reducer;