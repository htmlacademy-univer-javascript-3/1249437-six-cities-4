import { Offer } from '../types/offer';
import { MapPoint } from '../components/map-component';
import { FullOfferInfo } from '../types/full-offer-info';

export const offerToMapPoint = (offer: Offer | FullOfferInfo): MapPoint => ({
  id: offer.id,
  lat: offer.location.latitude,
  lng: offer.location.longitude
});
