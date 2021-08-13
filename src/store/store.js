import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

// Reducers
import citiesListReducer from './slices/cities-list';
import cityDetailReducer from './slices/city-detail';
import cityForecastReducer from './slices/city-forecast';

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    citiesListReducer,
    cityDetailReducer,
    cityForecastReducer,
});

export const store = function configureStore(preloadedState) {
    return createStore(
        rootReducer(history),
        preloadedState, compose(applyMiddleware(routerMiddleware(history), thunkMiddleware)),
    );
};
