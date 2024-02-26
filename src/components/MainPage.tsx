import React from 'react';
import OfferCard from './OfferCard';

interface MainPageProps {
  offersCount: number; // Добавляем это свойство для приема количества предложений
  offers: Array<{
    id: number;
    title: string;
    price: number;
    type: string;
    image: string;
    isPremium: boolean;
    rating: number;
  }>;
}

const MainPage: React.FC<MainPageProps> = ({ offers, offersCount }) => (
  <div className="page page--gray page--main">
    {/* Шапка и другие части страницы */}
    <main className="page__main page__main--index">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in Amsterdam</b>
          {/* Остальной контент */}
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                title={offer.title}
                price={offer.price}
                type={offer.type}
                image={offer.image}
                isPremium={offer.isPremium}
                rating={offer.rating}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default MainPage;
