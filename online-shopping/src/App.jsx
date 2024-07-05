import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import './index.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    color: '',
    size: 'All',
    gender: 'All',
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value
    }));
  };
const clearCart = () => {
  setCartItems([]);

};

  return (

    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
         

          <Route
            path="/products"
            element={<ProductListingPage
              addToCart={addToCart}
              filters={filters}
              onFilterChange={handleFilterChange}
            />}

          />
          <Route
            path="/product/:id"
            element={<ProductDetailPage addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} />}
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

