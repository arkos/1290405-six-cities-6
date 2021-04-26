const roomTypeToNameMap = {
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