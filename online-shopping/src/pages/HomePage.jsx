import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/App.css'

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const trendingProducts = products.slice(0, 5);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="discount-banner">
          <h2>Special Discount!</h2>
          <p>Get 20% off on your first purchase.</p>
        </div>
      </div>
      <div className="trending-section">
        <h2>Trending Products</h2>
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

      

      </div>


    </div>
  );
};

export default HomePage;
