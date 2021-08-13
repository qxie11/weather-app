import { createSlice } from '@reduxjs/toolkit';
import { fetchCityForecast } from "../actions/city-forecast-actions";

const initialState = {
    cityForecast: null,
}

const cityForecastSlice = createSlice({
    name: 'city-forecast',
    initialState,
    reducers: {
        clearCityForecast(state) {
            state.cityForecast = null;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchCityForecast.fulfilled, (state, action) => {
            state.cityForecast = action.payload?.data;
        })
    },
})

export const { clearCityForecast } = cityForecastSlice.actions;
export default cityForecastSlice.reducer;