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

const selectOfferReviews = createSelector(
    [selectOfferById],
    (offer) => offer.reviews
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

const selectReviewsStatus = (state) => state.DATA.reviewsLoadingState;

const tempFilter = () => `Amsterdam`;

const selectOffersByCity = createSelector(
    [selectAllOffers, tempFilter],
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

const selectCityPoints = createSelector(
    [selectOffersByCity],
    (cityOffers) => cityOffers.map((cityOffer) => (
      {
        lat: cityOffer.location.latitude,
        lng: cityOffer.location.longitude,
        title: cityOffer.title
      }
    ))
);

const selectCityByName = createSelector(
    [selectAllOffers, tempFilter],
    (offers, city) => {
      const offerByCityName = offers.find((offer) => offer.city.name === city);
      return offerByCityName && offerByCityName.city;
    }
);

const selectOffersByLimit = createSelector(
    [selectOffersByCity],
    (offers) => offers.slice(0, MAX_OFFERS_COUNT)
);

export {
  selectOffersByLimit,
  selectIsLoggedIn,
  selectIsLoggingIn,
  selectIsFavorite,
  selectOffersByCity,
  selectCityByName,
  selectCityPoints,
  selectOfferReviews,
  selectOffersStatus,
  selectFavoritesStatus,
  selectReviewsStatus,
  selectAuthStatus,
  selectLoggedInUser,
};
