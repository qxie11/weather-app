import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCityWeather } from "../../requests/weather";

export const fetchCityWeather = createAsyncThunk(
    'city-detail/fetchCityWeather',
    async (id) => {
        try {
            return await getCityWeather(id);
        } catch(e) {
            alert(e.message);
            return e.message;
        }
    }
);