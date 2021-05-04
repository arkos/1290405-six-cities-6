import {createSelector} from "reselect";
import {AuthorizationStatus, MAX_OFFERS_COUNT} from "../util/const";
import {selectAllOffers} from '../store/data/data';

const selectOffersStatus = (state) => state.DATA.offersLoadingState;

const selectAuthStatus = (state) => state.USER.authorizationStatus;

const selectIsLoggedIn = createSelector(
    [selectAuthStatus],
    (authorizationStatus) => authorizationStatus === AuthorizationStatus.AUTH
);

const selectLoggedInUser = (state) => state.USER.user;

const selectFavoritesStatus = (state) => state.DATA.favoritesLoadingState;

const selectOffersByLimit = createSelector(
    [selectAllOffers],
    (offers) => offers.slice(0, MAX_OFFERS_COUNT)
);

export {
  selectOffersByLimit,
  selectIsLoggedIn,
  selectOffersStatus,
  selectFavoritesStatus,
  selectAuthStatus,
  selectLoggedInUser,
};
