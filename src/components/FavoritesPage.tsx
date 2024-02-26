import React from 'react';

const FavoritesPage: React.FC = () => (
  <div className="page page--favorites-empty">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a href="#" className="header__logo-link" aria-label="Home">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a href="#" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {/* Здесь будет список избранных предложений */}
          </ul>
        </section>
      </div>
    </main>
  </div>
);

export default FavoritesPage;
