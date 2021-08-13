import { axiosWeatherDataInstance } from './instances';

// Keys
import { API_KEY } from '../constants';

export const getListOfCities = (city) => axiosWeatherDataInstance({
    method: 'GET',
    url: 'find',
    params: {
        q: city,
        callback: 'jQuery19101845054907385475_1628680351123',
        type: 'like',
        sort: 'population',
        cnt: '30',
        _: '1628680351124',
        appid: API_KEY,
    },
});

export const getCityWeather = (id) => axiosWeatherDataInstance({
    method: 'GET',
    url: 'weather',
    params: {
        id,
        appid: API_KEY,
    },
});

export const getCityWeatherForecast = (id) => axiosWeatherDataInstance({
    method: 'GET',
    url: 'forecast',
    params: {
        id,
        appid: API_KEY,
    },
});
