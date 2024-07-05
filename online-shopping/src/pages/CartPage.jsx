/*import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

const CartPage = ({ cartItems }) => {
 
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === "" ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>

          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />

              <div>
                <p>{item.title}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button>Remove</button>
                <button>Update Quantity</button>
                <Link to="/checkout">Proceed to Checkout</Link>

              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (

        <Link to="/checkout" className="checkout-link">Proceed to Checkout</Link>

      )}
    </div>
  );
};

export default CartPage;*/



import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Cart = ({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart" style={{ display: 'block' }}>
      

      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h2>Cart Items</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;


