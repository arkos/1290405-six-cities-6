import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {StoreStatus} from '../../util/const';
import {fetchOffers} from '../api-actions';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  status: StoreStatus.IDLE,
  error: null
});

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
      adapter.upsertMany(state, action.payload);
    },
    [fetchOffers.rejected]: (state, action) => {
      state.status = StoreStatus.FAILED;
      state.error = action.error.message;
    }
  }
});

const {reducer} = data;
const {selectAll: selectAllOffers} = adapter.getSelectors((state) => state.DATA);

export {reducer as data, selectAllOffers};
