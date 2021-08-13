import { createSelector } from '@reduxjs/toolkit';
import moment from "moment";
import { last } from 'lodash';

const selectCityForecastReducer = (state) => state.cityForecastReducer;

export const selectCityForecast = createSelector(
    selectCityForecastReducer,
    (state) => state.cityForecast,
);

const filterForecast = (selector) => {
    if (!selector) {
        return {hourly: [], weekly: []};
    }
    const currentDay = moment().day();
    return selector?.list?.reduce((acc, forecast, i) => {
        if (moment(forecast.dt_txt).day() === currentDay) {
            acc.hourly.push(forecast);
        } else {
            if (!acc.weekly.length || moment(last(last(acc.weekly)).dt_txt).day() !== moment(forecast.dt_txt).day()) {
                acc.weekly.push([forecast]);
            }

            last(acc.weekly).push(forecast);
        }
        return acc;
    }, {hourly: [], weekly: []});
}

export const selectDividedHoursAndWeeklyForecast = createSelector(
    selectCityForecast,
    filterForecast
);
