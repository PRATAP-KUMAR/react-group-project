import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import MissionsDataReducer from './missions/missions';

const reducer = combineReducers({ MissionsDataReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
