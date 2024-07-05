import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Using Font Awesome for cart icon
import '../styles/App.css';

const Navbar = ({ cartItems }) => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Logo</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <div className="cart-icon-container" onClick={toggleCart}>
          <FaShoppingCart className="cart-icon" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </div>
      {cartVisible && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.title}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Link to="/checkout" className="checkout-link">Go to Checkout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;