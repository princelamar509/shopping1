import React from 'react';
import CartPage from '../pages/CartPage'; 

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart, clearCart }) => {
  return (
    <CartPage 
      cartItems={cartItems}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
    />
  );
};

export default Cart;
