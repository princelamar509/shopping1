// ProductListingPage.jsx

import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/App.css';

const ProductListingPage = ({ addToCart, filters, onFilterChange }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filterProducts = (product) => {
    const { color, size, gender } = filters;
    return (
      (color === '' || product.category.toLowerCase().includes(color.toLowerCase())) &&
      (size === 'All' || product.size.toLowerCase().includes(size.toLowerCase())) &&
      (gender === 'All' || product.gender.toLowerCase().includes(gender.toLowerCase()))
    );
  };

  const uniqueFilters = (key) => {
    const allFilters = products.map((product) => product[key]);
    return [...new Set(allFilters)];
    
  };

  return (
    <div className="product-listing-page">
      <h1>Products</h1>
      <div className="filters">
        <label>
          Color:
          <select
            value={filters.color}
            onChange={(e) => onFilterChange('color', e.target.value)}
          >
            <option value="all">All</option>
            {uniqueFilters('category').map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <label>
          Size:
          <select
            value={filters.size}
            onChange={(e) => onFilterChange('size', e.target.value)}
          >
            <option value="all">All</option>
            {uniqueFilters('size').map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </label>
        <label>
          Gender:
          <select
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
          >
            <option value="all">All</option>
            {uniqueFilters('gender').map((gender, index) => (
              <option key={index} value={gender}>{gender}</option>
            ))}
          </select>


        </label>
      </div>
      <div className="product-grid">
        {products.filter(filterProducts).map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
