import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rocketReducer } from './Rocket/Rockets';

const rootReducer = combineReducers({
  rocketReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
