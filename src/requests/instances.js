import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
};

export const axiosWeatherDataInstance = axios.create({
    baseURL: 'https://openweathermap.org/data/2.5/',
    headers,
});