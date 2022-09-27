import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/dragonsSlice';
import { rocketReducer } from './Rocket/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonsReducer,
    
  },
});

export default store;