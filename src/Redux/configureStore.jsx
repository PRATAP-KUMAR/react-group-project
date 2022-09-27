import { configureStore } from '@reduxjs/toolkit';
import { rocketReducer } from './Rocket/Rockets';
import { dragonsReducer } from './Dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonsReducer,
  },
});

export default store;
