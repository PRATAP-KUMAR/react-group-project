import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/dragonsSlice';
import { rocketReducer } from './Rocket/RocketsRedux';

const store = configureStore({
  reducer: {
    rocketReducer,
    dragons: dragonsReducer,

  },
});

export default store;
