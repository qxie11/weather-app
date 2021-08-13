import { createSelector } from '@reduxjs/toolkit';

const selectCitiesListReducer = (state) => state.citiesListReducer;

export const selectCitiesList = createSelector(
    selectCitiesListReducer,
    (state) => state.citiesList
);

export const selectIsCitiesListLoading = createSelector(
    selectCitiesListReducer,
    (state) => state.isCitiesListLoading
);
