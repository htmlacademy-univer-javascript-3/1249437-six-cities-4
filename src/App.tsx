import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import FavoritesPage from './components/FavoritesPage';
import OfferPage from './components/OfferPage';
import NotFoundPage from './components/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';

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
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage offers={offers} offersCount={offers.length} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={
          <PrivateRoute isAuthenticated={false} element={<FavoritesPage />} />
        }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
