import {createSlice} from '@reduxjs/toolkit';
import {StoreStatus} from '../../util/const';
import {fetchOffers} from '../api-actions';

const initialState = {
  offers: [],
  status: StoreStatus.IDLE,
  error: null
};

const data = createSlice({
  name: `data`,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOffers.pending]: (state) => {
      state.status = StoreStatus.LOADING;
    },
    [fetchOffers.fulfilled]: (state, action) => {
      state.status = StoreStatus.SUCCEEDED;
      state.offers = action.payload;
    },
    [fetchOffers.rejected]: (state, action) => {
      state.status = StoreStatus.FAILED;
      state.error = action.error.message;
    }
  }
});

const {reducer} = data;

export {reducer as data};
