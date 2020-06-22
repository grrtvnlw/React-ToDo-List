import { createStore } from 'redux';
import todoReducer from './actions/reducers';

const store = createStore(todoReducer);

export default store;