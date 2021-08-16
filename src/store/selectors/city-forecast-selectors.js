import { createSelector } from '@reduxjs/toolkit';
import moment from 'moment';
import { last } from 'lodash';

const selectState = (state) => state.cityForecastReducer;

export const selectCityForecast = createSelector(
    selectState,
    (state) => state.cityForecast,
);

export const selectDividedHoursAndWeeklyForecast = createSelector(
    selectCityForecast,
    (cityForecast) => {
        if (!cityForecast) {
            return {hourly: [], weekly: []};
        }
        const currentDay = moment().day();
        return cityForecast.list.reduce((acc, forecast) => {
            if (moment(forecast.dt_txt).day() === currentDay) {
                acc.hourly.push(forecast);
            } else {
                if (!acc.weekly.length || moment(last(last(acc.weekly)).dt_txt).day() !== moment(forecast.dt_txt).day()) {
                    acc.weekly.push([forecast]);
                    return acc;
                }

                last(acc.weekly).push(forecast);
            }
            return acc;
        }, {hourly: [], weekly: []});
    }
);
