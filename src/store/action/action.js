import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFERS: `data/loadOffers`
};

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});
