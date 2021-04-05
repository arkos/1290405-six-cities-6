export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `favorites`,
  ROOM: `offer`
};

export const getOfferUrl = (id) => `${AppRoute.ROOM}/${id}`;
