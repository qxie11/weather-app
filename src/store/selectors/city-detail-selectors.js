import { createSelector } from '@reduxjs/toolkit';

const selectCityDetailReducer = (state) => state.cityDetailReducer;

export const selectCityDetail = createSelector(
    selectCityDetailReducer,
    (state) => state.cityDetail
);
