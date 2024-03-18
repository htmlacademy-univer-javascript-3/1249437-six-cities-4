import React from 'react';
import MainPage from './components/MainPage';

interface Offer {
  id: number;
  title: string;
  price: number;
  type: string;
  image: string;
  isPremium: boolean;
  rating: number;
}

interface AppProps {
  offers: Offer[];
}

const App: React.FC<AppProps> = ({ offers }) => (
  <div className="App">
    <MainPage offers={offers} offersCount={offers.length} />
  </div>
);

export default App;
