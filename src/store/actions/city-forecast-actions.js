import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCityWeatherForecast } from "../../requests/weather";

export const fetchCityForecast = createAsyncThunk(
    'city-forecast/fetchCityForecast',
    async (id) => {
        try {
            return await getCityWeatherForecast(id);
        } catch(e) {
            alert(e.message);
            return e.message;
        }
    }
);