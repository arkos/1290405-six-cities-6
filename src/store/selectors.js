import {createSelector} from "reselect";
import {MAX_OFFERS_COUNT} from "../util/const";

const offersSelector = ({DATA}) => DATA.offers;

const selectAllOffers = createSelector(
    [offersSelector],
    (offers) => offers
);

const selectOffersByLimit = createSelector(
    [offersSelector],
    (offers) => offers.slice(0, MAX_OFFERS_COUNT)
);

export {selectAllOffers, selectOffersByLimit};
