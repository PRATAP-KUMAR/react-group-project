import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/dragonsSlice';
import { rocketReducer } from './Rocket/RocketsRedux';
import MissionsDataReducer from './Missions/missions';

const store = configureStore({
  reducer: {
    rocketReducer,
    dragons: dragonsReducer,
    MissionsDataReducer,
  },
});

export default store;
