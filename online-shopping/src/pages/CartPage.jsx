import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Cart.css';

const CartPage = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart, clearCart }) => {
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
       
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Amount: ${calculateTotalAmount().toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
            <Link to="/checkout" className="checkout-link">Go to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
