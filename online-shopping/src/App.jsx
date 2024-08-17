import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';

import './styles/App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    color: '',
    size: 'All',
    gender: 'All',
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === product.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrementQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems
        .map((i) =>
          i.id === item.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.id !== item.id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<HomePage addToCart={addToCart} />}
          />
          <Route
            path="/products"
            element={
              <ProductListingPage
                addToCart={addToCart}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetailPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
