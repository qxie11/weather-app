import { createSlice } from '@reduxjs/toolkit';
import { fetchCityWeather } from "../actions/city-detail-actions";

const initialState = {
    cityDetail: null,
}

const cityDetailSlice = createSlice({
    name: 'city-detail',
    initialState,
    reducers: {
      clearCityDetail(state) {
          state.cityDetail = null;
      },
    },
    extraReducers: builder => {
        builder.addCase(fetchCityWeather.fulfilled, (state, action) => {
            state.cityDetail = action.payload?.data;
        })
    },
})

export const { clearCityDetail } = cityDetailSlice.actions;
export default cityDetailSlice.reducer;