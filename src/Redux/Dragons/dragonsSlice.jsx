import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

const URL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    try {

      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    dragonsReserved: {
      reducer(state, action) {
        state.dragons.map((dragon) =>
          dragon.id === action.payload.id
            ? { ...dragon, reserved: true }
            : dragon,
        );
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getDragons = (state) => state.dragons.dragons;
export const getStatus = (state) => state.dragons.status;
export const getError = (state) => state.dragons.error;

export const { dragonsReserved } = dragonsSlice.actions;

export default dragonsSlice.reducer;