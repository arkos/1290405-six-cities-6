import React from 'react';
import reviewProp from '../review/review.prop';
import {MAX_STARS_COUNT} from '../../util/const';
import dayjs from 'dayjs';

const Review = ({review}) => {
  const {comment, date, user, rating} = review;
  const {avatarUrl, name} = user;

  const ratingPercent = Math.round(rating) / MAX_STARS_COUNT * 100;

  const dateJs = dayjs(date);

  const isoDate = dateJs.format(`YYYY-MM-DD`);
  const localeDate = dateJs.format(`MMMM YYYY`);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt={name} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={isoDate}>{localeDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewProp.isRequired
};

export default Review;
