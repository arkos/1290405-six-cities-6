import {createReducer} from '@reduxjs/toolkit';
import {loadOffers} from '../action';

const initialState = {
  offers: []
};

const offerData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
});

export {offerData};
