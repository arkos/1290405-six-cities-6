import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {StoreStatus} from '../../util/const';
import {fetchFavorites, fetchOffers} from '../api-actions';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  offersLoadingState: {
    status: StoreStatus.IDLE,
    error: null
  },
  favoritesLoadingState: {
    status: StoreStatus.IDLE,
    error: null
  }
});

const data = createSlice({
  name: `data`,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOffers.pending]: (state) => {
      state.offersLoadingState.status = StoreStatus.LOADING;
    },
    [fetchOffers.fulfilled]: (state, action) => {
      state.offersLoadingState.status = StoreStatus.SUCCEEDED;
      adapter.upsertMany(state, action.payload);
    },
    [fetchOffers.rejected]: (state, action) => {
      state.offersLoadingState.status = StoreStatus.FAILED;
      state.offersLoadingState.error = action.error.message;
    },
    [fetchFavorites.pending]: (state) => {
      state.favoritesLoadingState.status = StoreStatus.LOADING;
    },
    [fetchFavorites.fulfilled]: (state, action) => {
      state.favoritesLoadingState.status = StoreStatus.SUCCEEDED;
      action.payload.forEach((favorite) => {
        state.entities[favorite.id] = favorite.isFavorite;
      });
    },
    [fetchFavorites.rejected]: (state, action) => {
      state.favoritesLoadingState.status = StoreStatus.FAILED;
      state.favoritesLoadingState.error = action.error.message;
    }
  }
});

const {reducer} = data;
const {selectAll: selectAllOffers} = adapter.getSelectors((state) => state.DATA);

export {reducer as data, selectAllOffers};
