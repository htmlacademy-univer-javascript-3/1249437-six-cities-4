import React from 'react';
import OffersForCity, { OffresForCityProps } from './offers-for-city';

const MemoOffersForCity = React.memo<OffresForCityProps>(
  OffersForCity,
  (prev, next) => prev.city === next.city && prev.offers?.length === next.offers?.length
);

export default MemoOffersForCity;
