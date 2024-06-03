import React from 'react';
import NearbyOffersList, { NearbyOffersListProps } from './nearby-offers-list';

const MemoNearbyOffersList = React.memo<NearbyOffersListProps>(NearbyOffersList);

export default MemoNearbyOffersList;
