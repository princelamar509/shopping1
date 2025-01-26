import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
      <img src="https://as2.ftcdn.net/v2/jpg/05/03/15/79/1000_F_503157946_OQEnKSX4rolvXtdgdE3abMHR3z5gkIfR.jpg" alt="Logo" className="logo-image" width="50" height="50"/><strong className='logo'>Shopy shopee</strong></Link>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/products" onClick={toggleMenu}>Products</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/cart" onClick={toggleMenu} className="cart-icon-container">
          <div className="cart-icon">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <div className="cart-count">{cartItems.length}</div>
            )}
          </div>
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
