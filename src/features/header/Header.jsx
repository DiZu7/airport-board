import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header class="header">
      <div class="header__logo logo">
        <span class="logo__title">KYIV</span>
        <span class="logo__subtitle">Sikorsky Airport</span>
      </div>
      <nav class="header__links">
        <a href="#" class="header__link">
          For passengers
        </a>
        <a href="#" class="header__link">
          IEV Services
        </a>
        <a href="#" class="header__link">
          VIP
        </a>
        <a href="#" class="header__link">
          Corporate
        </a>
        <a href="#" class="header__link">
          Press Room
        </a>
        <a href="#" class="header__link">
          EN
        </a>
      </nav>
    </header>
  );
};

export default Header;
