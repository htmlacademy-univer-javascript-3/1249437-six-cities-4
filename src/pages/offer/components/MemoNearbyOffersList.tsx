import React from 'react';
import NearbyOffersList from './NearbyOffersList';
import { Offer } from '../../../types/offer';

const memoNearbyOffersList = React.memo<{ offers: Offer[] }>(NearbyOffersList);

export default memoNearbyOffersList;
