import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerProp from '../offer-card/offer.prop';

const OfferList = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProp)
};

export default OfferList;
