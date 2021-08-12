import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

// Reducers
import citiesListReducer from './slices/cities-list';

export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    citiesListReducer,
});

export const store = function configureStore(preloadedState) {
    return createStore(
        rootReducer(history),
        preloadedState, compose(applyMiddleware(routerMiddleware(history), thunkMiddleware)),
    );
};
