import { FC } from 'react';
import Card, { OfferData } from './Card';

export interface OffersListProps {
    offers: OfferData[];
}

const OffersList: FC<OffersListProps> = ({ offers }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((card) => (
      <Card key={card.id} offer={card} onMouseEnter={() => {}}/>
    ))}
  </div>
);

export default OffersList;
