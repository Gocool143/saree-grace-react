import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/images/saree_grace_logo.png'; // replace with your actual logo path
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <span className="menu-icon">&#9776;</span>
        </button>
        {/* <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link> */}
      </div>
      <div className="header-center">
        <input type="text" className="search-input" placeholder="Search for products" />
      </div>
      <div className="header-right">
        <Link to="/profile" className="profile-icon">
          <span role="img" aria-label="Profile">👤</span>
        </Link>
        <Link to="/cart" className="cart-icon">
          <span role="img" aria-label="Cart">🛒</span>
          <span className="cart-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
