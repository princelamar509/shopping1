import React from 'react';
import '../styles/App.css';

const CheckoutPage = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="card">Credit Card</label>
          <input type="text" id="card" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
