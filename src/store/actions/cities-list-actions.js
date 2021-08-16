import { createAsyncThunk } from "@reduxjs/toolkit";
import parseCityListData from "../../utils/parse-city-list-data";
import { getListOfCities } from "../../requests/weather";

export const fetchCitiesList = createAsyncThunk(
    'cities-list/fetchCitiesList',
    async (city) => {
        try {
            return parseCityListData((await getListOfCities(city)).data);
        } catch(e) {
            alert(e);
            return e.message;
        }
    }
);