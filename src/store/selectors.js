import {createSelector} from "reselect";

const offerSelector = ({DATA}) => DATA.offers;

const selectAllOffers = createSelector(
    [offerSelector],
    (offers) => offers
);

export {selectAllOffers};
