import {createSelector} from "reselect";
import {MAX_OFFERS_COUNT} from "../util/const";
import {selectAllOffers} from '../store/data/data';

const selectOffersByLimit = createSelector(
    [selectAllOffers],
    (offers) => offers.slice(0, MAX_OFFERS_COUNT)
);

export {selectOffersByLimit};
