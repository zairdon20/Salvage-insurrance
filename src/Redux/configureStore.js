import {
    createStore, combineReducers, applyMiddleware, compose
} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import companiesReducer from './companies/company';

const reducer = combineReducers({
    companiesReducer
});

const store =  createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
