export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer`
};

export const APIRoute = {
  OFFERS: `/hotels`,
  FAVORITES: `/favorite`,
  REVIEWS: `/comments`,
  LOGIN: `/login`
};

export const getOfferUrl = (id) => `${AppRoute.ROOM}/${id}`;

export const getReviewsUrl = (offerId) => `${APIRoute.REVIEWS}/${offerId}`;

export const getNearbyOffersUrl = (offerId) => `${APIRoute.OFFERS}/${offerId}/nearby`;
