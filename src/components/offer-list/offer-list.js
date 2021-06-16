import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerProp from '../offer-card/offer.prop';

const OfferList = ({offers, onActiveCardChange}) => {
  const handleOfferEnter = (offer) => {
    onActiveCardChange(offer);
  };

  const handleOfferLeave = () => {
    onActiveCardChange(null);
  };

  return (
    <div className="cities__properties-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onEnter={() => handleOfferEnter(offer)} onLeave={() => handleOfferLeave(offer)} />)}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  onActiveCardChange: PropTypes.func.isRequired
};

export default OfferList;
