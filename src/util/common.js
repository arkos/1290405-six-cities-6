export const roomTypeToNameMap = {
  [`apartment`]: `Apartment`,
  [`room`]: `Private Room`,
  [`house`]: `House`,
  [`hotel`]: `Hotel`
};

export const getRoomName = (type) => {
  return roomTypeToNameMap[type] || type;
};

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign({}, offer, {
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    host: Object.assign({}, offer.host, {
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url
    })
  });

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export const adaptUserToClient = (user) => {
  const adaptedUser = Object.assign({}, user, {
    avatarUrl: user.avatar_url,
    isPro: user.is_pro
  });

  delete adaptedUser.avatar_url;
  delete adaptedUser.is_pro;

  return adaptedUser;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign({}, review, {
    user: Object.assign({}, review.user, {
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro
    })
  });

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};
