import React from 'react';
import FavoritesOffer, { FavoritesOfferProps } from './favorites-offer';

const MemoFavoritesOffer = React.memo<FavoritesOfferProps>(FavoritesOffer, (prev, next) =>
  prev.offer.id === next.offer.id && prev.offer.isFavorite === next.offer.isFavorite
);

export default MemoFavoritesOffer;

