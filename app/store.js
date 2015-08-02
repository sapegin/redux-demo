/**
 * Redux store
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

// Combine all the reducers into one
let reducer = combineReducers(reducers);

// Create a store that has redux-thunk middleware enabled
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Export Redux store
export default createStoreWithMiddleware(reducer);
