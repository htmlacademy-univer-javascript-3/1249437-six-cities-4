import React from 'react';

const offerData = {
  title: 'Beautiful & luxurious studio at great location',
  description: 'Very beautiful, cozy, and luxurious studio located in the heart of the city. Close to all the main attractions and public transportation.',
  price: 120,
  rating: 4.8,
  amenities: ['Wi-Fi', 'Kitchen', 'Washing machine', 'Coffee machine'],
};

const OfferPage: React.FC = () => {
  const { title, description, price, rating, amenities } = offerData;

  return (
    <div className="offer-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <p><strong>Price per night: </strong>${price}</p>
      <p><strong>Rating: </strong>{rating} / 5</p>
      <div>
        <strong>Amenities: </strong>
        <ul>
          {amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li> // Использование значения элемента в качестве ключа
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OfferPage;
