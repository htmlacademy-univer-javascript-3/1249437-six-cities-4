// src/components/MainPage.tsx
import React from 'react';
import OfferCard from './OfferCard';

const MainPage = () => {
  // Предполагаем, что данные карточек будут заменены на данные из API
  const offers = [
    { id: 1, title: "Beautiful & luxurious apartment at great location", price: 120, type: "Apartment", image: "img/apartment-01.jpg", isPremium: true, rating: 80 },
    { id: 2, title: "Wood and stone place", price: 80, type: "Room", image: "img/room.jpg", isPremium: false, rating: 80 },
    // Добавьте остальные предложения по аналогии
  ];

  return (
    <div className="page page--gray page--main">
      {/* Шапка и другие части страницы */}
      <main className="page__main page__main--index">
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
      </main>
    </div>
  );
};

export default MainPage;
