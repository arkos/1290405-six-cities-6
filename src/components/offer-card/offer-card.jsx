import React from 'react';
import {getRoomName} from '../../util/common';
import offerCardProp from './offer-card.prop';

const MAX_STARS_COUNT = 5;

const OfferCard = ({offer}) => {
  const {price, title, images, isPremium, rating, type} = offer;

  const [apartmentImage] = images;

  const ratingPercent = Math.round(rating) / MAX_STARS_COUNT * 100;

  return (
    <article className="cities__place-card place-card">
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={apartmentImage} width="260" height="200" alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{getRoomName(type)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerCardProp
};

export default OfferCard;
