import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchCar = createAsyncThunk('car/fetchCarsStatus', async (params) => {
	const {data,sortValue , ascValue} = params
	const res = await axios.get(`https://642ea9b02b883abc6413abe7.mockapi.io/piz/car?sortBy=${data[sortValue].sorteding}&order=${ascValue ? 'asc' : 'desc'}`)
	return res.data
})
const initialState = {
	items:[],
	status:'loading' // loading || success || error
}
const getCar = createSlice({
	name: 'getCar',
	initialState,
	reducer: {
		setItems: (state, value)=> {
			state.items = value.payload
		}
	},
	extraReducers:(builder) => {
			builder.addCase(fetchCar.pending , (state) => {
				state.status = 'loading',
				state.items = []
			}),
			builder.addCase(fetchCar.fulfilled , (state, value) => {
				state.status = 'success',
				state.items = value.payload
			}),
			builder.addCase(fetchCar.rejected , (state) => {
				state.status = 'error',
				state.items = []
			})
	}
})
export const { setItems } = getCar.actions;

export default getCar.reducer;