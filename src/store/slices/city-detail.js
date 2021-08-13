import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Requests
import { getCityWeather } from '../../requests/weather';


const initialState = {
    cityDetail: null,
}

export const fetchCityWeather = createAsyncThunk(
    'city-detail/fetchCityWeather',
    async (id) => {
        try {
            return await getCityWeather(id).data;
        } catch(e) {
            alert(e.message);
            return e.message;
        }
    }
);

const cityDetailSlice = createSlice({
    name: 'city-detail',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCityWeather.fulfilled, (state, action) => {
            state.cityDetail = action.payload;
        })
    },
})

export default cityDetailSlice.reducer;