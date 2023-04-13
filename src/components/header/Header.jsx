import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <span className="logo__title">KYIV</span>
        <span className="logo__subtitle">Sikorsky Airport</span>
      </div>
      <nav className="header__links">
        <a href="#" className="header__link">
          For passengers
        </a>
        <a href="#" className="header__link">
          IEV Services
        </a>
        <a href="#" className="header__link">
          VIP
        </a>
        <a href="#" className="header__link">
          Corporate
        </a>
        <a href="#" className="header__link">
          Press Room
        </a>
        <a href="#" className="header__link">
          EN
        </a>
      </nav>
    </header>
  );
};

export default Header;
