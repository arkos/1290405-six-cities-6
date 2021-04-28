import {createSelector} from "reselect";
import {MAX_OFFERS_COUNT} from "../util/const";
import {selectAllOffers} from '../store/data/data';

const selectOffersStatus = (state) => state.DATA.offersLoadingState;

const selectFavoritesStatus = (state) => state.DATA.favoritesLoadingState;

const selectOffersByLimit = createSelector(
    [selectAllOffers],
    (offers) => offers.slice(0, MAX_OFFERS_COUNT)
);

export {selectOffersByLimit, selectOffersStatus, selectFavoritesStatus};
