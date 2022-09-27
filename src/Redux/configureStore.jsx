import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rocketReducer } from './Rocket/RocketsRedux';

const rootReducer = combineReducers({
  rocketReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
