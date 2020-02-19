import {createStore, applyMiddleware} from 'redux';
import asyncreducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store=createStore(asyncreducer,applyMiddleware(thunk));

export default store;