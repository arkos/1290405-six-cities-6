export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer`
};

export const APIRoute = {
  OFFERS: `/hotels`,
  FAVORITES: `/favorite`,
  LOGIN: `/login`
};

export const getOfferUrl = (id) => `${AppRoute.ROOM}/${id}`;
