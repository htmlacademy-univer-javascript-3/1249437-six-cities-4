import React from 'react';
import NearbyOfferCard from './nearby-offer-card';
import { Offer } from '../../../../types/offer';

const MemoNearbyOfferCard = React.memo(
  NearbyOfferCard,
  (prev: { offer: Offer }, next: { offer: Offer }) =>
    prev.offer.id === next.offer.id && prev.offer.isFavorite === next.offer.isFavorite
);

export default MemoNearbyOfferCard;
