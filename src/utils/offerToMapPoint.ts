import { Offer } from '../types/offer';
import { MapPoint } from '../components/Map';

export const offerToMapPoint = (offer: Offer): MapPoint => ({
  id: offer.id,
  lat: offer.city.location.latitude,
  lng: offer.city.location.longitude,
});
