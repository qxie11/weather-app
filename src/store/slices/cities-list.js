import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Requests
import { getListOfCities } from '../../requests/weather';

// Utils
import parseCityListData from '../../utils/parse-city-list-data';

const initialState = {
    citiesList: null,
    citiesListLoading: false,
}

export const fetchCitiesList = createAsyncThunk(
    'cities-list/fetchCitiesList',
    async (city) => {
        try {
            return parseCityListData((await getListOfCities(city)).data);
        } catch(e) {
            alert(e.message);
            return e.message;
        }
    }
);

const citiesListSlice = createSlice({
    name: 'cities-list',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCitiesList.pending, (state) => {
            state.citiesListLoading = true;
        })
        .addCase(fetchCitiesList.fulfilled, (state, action) => {
            state.citiesListLoading = false;
            if (Array.isArray(action.payload) && action.payload.length > 15) {
                action.payload.length = 15;
            }
            state.citiesList = action.payload;
        })
        .addCase(fetchCitiesList.rejected, (state, action) => {
            state.citiesListLoading = false;
        })
    },
})

export default citiesListSlice.reducer;