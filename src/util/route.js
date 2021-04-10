export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer`
};

export const APIRoute = {
  OFFERS: `/hotels`
};

export const getOfferUrl = (id) => `${AppRoute.ROOM}/${id}`;
