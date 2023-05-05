import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';

const store = createStore(authReducer, applyMiddleware(thunkMiddleware));

export default store;