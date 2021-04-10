import {ActionType} from '../store/const';
import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIRoute} from '../util/route';

export const fetchOffers = createAsyncThunk(ActionType.FETCH_OFFERS, async (_, {extra: api}) => {
  const offers = await api.get(APIRoute.OFFERS);
  return offers;
});
