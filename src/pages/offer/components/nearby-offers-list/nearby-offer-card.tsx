import { FC } from 'react';
import { Offer } from '../../../../types/offer';
import { Link } from 'react-router-dom';
import { OFFER_URL } from '../../../../const/links';
import FavoriteButton from '../../../../components/favorite-button/favorite-button';
import { IMAGE_WIDTH, IMAGE_HEIGHT, PRICE_TEXT, RATING_TEXT, ROOM_TYPE, RATING_WIDTH_PERCENT } from '../../../../const/card-constants';

type NearbyOfferCardProps = {
  offer: Offer;
};

const NearbyOfferCard: FC<NearbyOfferCardProps> = ({ offer }) => (
  <article className="near-places__card place-card">
    <div className="near-places__image-wrapper place-card__image-wrapper">
      <Link to={`${OFFER_URL}/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt="Place image" />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;{PRICE_TEXT}</span>
        </div>
        <FavoriteButton isFavorite={offer.isFavorite} id={offer.id}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${offer.rating * RATING_WIDTH_PERCENT}%` }}></span>
          <span className="visually-hidden">{RATING_TEXT}</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${OFFER_URL}/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{ROOM_TYPE}</p>
    </div>
  </article>
);

export default NearbyOfferCard;
