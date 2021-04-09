import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  offers: []
};

const data = createSlice({
  name: `data`,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
    }
  }
});

const {loadOffers} = data.actions;
const {reducer} = data;

export {loadOffers, reducer as data};
