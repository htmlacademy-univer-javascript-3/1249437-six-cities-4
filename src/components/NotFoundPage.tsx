import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className="not-found-page">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
    <Link to="/">Go to Home Page</Link>
  </div>
);

export default NotFoundPage;
