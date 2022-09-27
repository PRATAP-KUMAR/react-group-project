import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rocketReducer } from './Rocket/RocketsRedux';
import MissionsDataReducer from './Missions/missions';

const rootReducer = combineReducers({
  rocketReducer, MissionsDataReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
