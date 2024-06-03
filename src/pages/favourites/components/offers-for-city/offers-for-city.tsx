import { FC } from 'react';
import { Link } from 'react-router-dom';
import MemoFavouritesOffer from './favourites-offer-container';
import { Offer } from '../../../../types/offer';
import { MAIN_URL } from '../../../../const/links';
import { useAppDispatch } from '../../../../state';
import { changeCity } from '../../../../state/city/city-actions';

export interface OffresForCityProps {
  offers: Offer[] | null;
  city: string;
}

const OffersForCity: FC<OffresForCityProps> = ({ offers, city }) => {
  const dispatch = useAppDispatch();

  if (!offers || offers.length === 0) {
    return <div></div>;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={MAIN_URL}
            onClick={() => dispatch(changeCity(offers[0].city))}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <MemoFavouritesOffer offer={offer} key={offer.id} />
        ))}
      </div>
    </li>
  );
};

export default OffersForCity;
