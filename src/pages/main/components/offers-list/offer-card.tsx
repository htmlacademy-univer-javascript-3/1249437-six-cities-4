import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../../../types/offer';
import FavoriteButton from '../../../../components/favorite-button/favorite-button';
import React from 'react';
import { IMAGE_WIDTH, IMAGE_HEIGHT, PREMIUM_TEXT, PRICE_TEXT, RATING_TEXT, RATING_WIDTH_PERCENT } from '../../../../const/card-constants';

type CardProps = {
    offer: Offer;
    onMouseEnter?: (id: string) => void;
    onMouseLeave?: () => void;
};

const Card: FC<CardProps> = ({
  offer,
  onMouseEnter,
  onMouseLeave
}) => (
  <article className="cities__card place-card"
    onMouseEnter={() => onMouseEnter !== undefined ? onMouseEnter(offer.id) : {}}
    onMouseLeave={() => onMouseLeave !== undefined ? onMouseLeave() : {}}
  >
    <div className="place-card__mark" hidden={!offer.isPremium}>
      <span>{PREMIUM_TEXT}</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${offer.id}`}>
        <img
          className="place-card__image"
          src={offer.previewImage}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;{PRICE_TEXT}</span>
        </div>
        <FavoriteButton isFavorite={offer.isFavorite} id={offer.id}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span
            style={{
              width: `${Math.round(offer.rating) * RATING_WIDTH_PERCENT}%`,
            }}
          />
          <span className="visually-hidden">{RATING_TEXT}</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

const MemoCard = React.memo(Card, (prev, next) => prev.offer.id === next.offer.id && prev.offer.isFavorite === next.offer.isFavorite);

export default MemoCard;
