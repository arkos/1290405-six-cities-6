export const StoreStatus = {
  IDLE: `IDLE`,
  LOADING: `LOADING`,
  SUCCEEDED: `SUCCEEDED`,
  FAILED: `FAILED`
};

export const ActionType = {
  FETCH_OFFERS: `data/fetchOffers`,
  FETCH_FAVORITES: `data/fetchFavorites`,
  CHECK_AUTH: `user/checkAuth`,
  LOGIN: `user/login`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`
};

export const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

export const MAX_OFFERS_COUNT = 8;

export const MAX_STARS_COUNT = 5;

