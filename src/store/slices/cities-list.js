import { createSlice } from '@reduxjs/toolkit'
import { fetchCitiesList } from "../actions/cities-list-actions";
import { isArray, cloneDeep } from "lodash";

const initialState = {
    citiesList: [],
    isCitiesListLoading: false,
}

const citiesListSlice = createSlice({
    name: 'cities-list',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCitiesList.pending, (state) => {
            state.isCitiesListLoading = true;
        })
        .addCase(fetchCitiesList.fulfilled, (state, { payload }) => {
            state.isCitiesListLoading = false;
            if (isArray(payload) && payload.length > 15) {
                const cloneData = cloneDeep(payload);
                cloneData.length = 15;
                state.citiesList = cloneData;
            } else {
                state.citiesList = payload;
            }
        })
        .addCase(fetchCitiesList.rejected, (state, action) => {
            state.isCitiesListLoading = false;
        })
    },
})

export default citiesListSlice.reducer;