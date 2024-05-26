import React from 'react';
import FavouritesOffer from './FavouritesOffer';
import { Offer } from '../../../types/offer';

interface FavouritesOfferProps {
  offer: Offer;
}

const memoFavouritesOffer = React.memo<FavouritesOfferProps>(FavouritesOffer, (prev, next) =>
  prev.offer.id === next.offer.id && prev.offer.isFavorite === next.offer.isFavorite
);

export default memoFavouritesOffer;
