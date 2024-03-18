import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const offers = [
  { id: 1, title: 'Beautiful & luxurious apartment at great location', price: 120, type: 'Apartment', image: 'img/apartment-01.jpg', isPremium: true, rating: 80 },
  { id: 2, title: 'Wood and stone place', price: 80, type: 'Room', image: 'img/room.jpg', isPremium: false, rating: 80 },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>
);
