import {createSelector} from "reselect";
import {AuthorizationStatus, StoreStatus, MAX_OFFERS_COUNT} from "../util/const";
import {selectAllOffers, selectOfferById} from '../store/data/data';

const selectOffersStatus = (state) => state.DATA.offersLoadingState;

const selectAuthStatus = (state) => state.USER.authorizationStatus;

const selectLoginLoadingStatus = (state) => state.USER.loginLoadingState;

const selectIsFavorite = createSelector(
    [selectOfferById],
    (offer) => offer.isFavorite
);

const selectIsLoggingIn = createSelector(
    [selectLoginLoadingStatus],
    (loginLoadingStatus) => loginLoadingStatus.status === StoreStatus.LOADING
);

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
  selectIsLoggingIn,
  selectIsFavorite,
  selectOffersStatus,
  selectFavoritesStatus,
  selectAuthStatus,
  selectLoggedInUser,
};
