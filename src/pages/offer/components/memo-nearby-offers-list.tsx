import React from 'react';
import NearbyOffersList, { NearbyOffersListProps } from './nearby-offers-list';

const memoNearbyOffersList = React.memo<NearbyOffersListProps>(NearbyOffersList);

export default memoNearbyOffersList;
