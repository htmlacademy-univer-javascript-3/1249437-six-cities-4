import { Offer } from '../types/offer';
import { MapPoint } from '../components/Map';
import { FullOfferInfo } from '../types/fullOfferInfo';

export const offerToMapPoint = (offer: Offer | FullOfferInfo): MapPoint => {
  const { id, location: { latitude, longitude } } = offer;

  return {
    id,
    lat: latitude,
    lng: longitude,
  };
};
