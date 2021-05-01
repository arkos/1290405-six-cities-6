import {ActionType} from '../util/const';
import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIRoute} from '../util/route';
import {adaptOfferToClient, adaptUserToClient} from '../util/common';

export const fetchOffers = createAsyncThunk(ActionType.FETCH_OFFERS, async (_, {extra: api}) => {
  const response = await api.get(APIRoute.OFFERS);
  return response.data.map(adaptOfferToClient);
});

export const fetchFavorites = createAsyncThunk(ActionType.FETCH_FAVORITES, async (_, {extra: api}) => {
  const response = await api.get(APIRoute.FAVORITES);
  return response.data.map(adaptOfferToClient);
});

export const checkAuth = createAsyncThunk(ActionType.CHECK_AUTH, async (_, {extra: api}) => {
  const response = await api.get(APIRoute.LOGIN);
  return response.data;
});

export const login = createAsyncThunk(ActionType.LOGIN, async (payload, {extra: api}) => {
  const {login: email, password} = payload;

  const response = await api.post(APIRoute.LOGIN, {email, password});
  return adaptUserToClient(response.data);
});
