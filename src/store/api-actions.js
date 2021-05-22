import {ActionType} from '../util/const';
import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIRoute, AppRoute, getReviewsUrl} from '../util/route';
import {adaptOfferToClient, adaptReviewToClient, adaptUserToClient} from '../util/common';
import {redirectToRoute} from './actions';

export const fetchOffers = createAsyncThunk(ActionType.FETCH_OFFERS, async (_, {extra: api}) => {
  const response = await api.get(APIRoute.OFFERS);
  return response.data.map(adaptOfferToClient);
});

export const fetchFavorites = createAsyncThunk(ActionType.FETCH_FAVORITES, async (_, {extra: api}) => {
  const response = await api.get(APIRoute.FAVORITES);
  return response.data.map(adaptOfferToClient);
});

export const fetchReviews = createAsyncThunk(ActionType.FETCH_REVIEWS, async (offerId, {extra: api}) => {
  const response = await api.get(getReviewsUrl(offerId));
  return {
    reviews: response.data.map(adaptReviewToClient),
    offerId
  };
});

export const checkAuth = createAsyncThunk(ActionType.CHECK_AUTH, async (_, {extra: api}) => {
  const response = await api.get(APIRoute.LOGIN);
  return adaptUserToClient(response.data);
});

export const login = createAsyncThunk(ActionType.LOGIN, async (payload, {dispatch, _, extra: api}) => {
  const {login: email, password} = payload;

  const response = await api.post(APIRoute.LOGIN, {email, password});
  dispatch(redirectToRoute(AppRoute.ROOT));

  return adaptUserToClient(response.data);
});
