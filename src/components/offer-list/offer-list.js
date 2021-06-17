import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-card/offer.prop';
import OfferCard from '../offer-card/offer-card';


const OfferList = ({classPrefix, offers, additionalClassName, onActiveCardChange}) => {
  const handleOfferEnter = (offer) => {
    onActiveCardChange(offer);
  };

  const handleOfferLeave = () => {
    onActiveCardChange(null);
  };

  return (
    <div className={`${classPrefix}__properties-list places__list ${additionalClassName}`}>
      {offers.map((offer) => <OfferCard key={offer.id} classPrefix={classPrefix} offer={offer} onEnter={() => handleOfferEnter(offer)} onLeave={() => handleOfferLeave(offer)} />)}
    </div>
  );
};

OfferList.propTypes = {
  classPrefix: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  additionalClassName: PropTypes.string,
  onActiveCardChange: PropTypes.func.isRequired
};

export default OfferList;
