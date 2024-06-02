import React from 'react';
import NearbyOfferCard from './nearby-offer-card';
import { Offer } from '../../../../types/offer';

const memoNearbyOfferCard = React.memo(
  NearbyOfferCard,
  (prev: { offer: Offer }, next: { offer: Offer }) =>
    prev.offer.id === next.offer.id && prev.offer.isFavorite === next.offer.isFavorite
);

export default memoNearbyOfferCard;
