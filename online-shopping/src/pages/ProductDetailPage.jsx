import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;

  }

  const handleBuyNow = () => {
    addToCart(product);
    window.location.href = '/checkout';
  };

  const handleAddToWishlist = () => {
    addToCart(product);
    window.location.href = '/wishlist';
    
  };

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price.toFixed(2)}</h2>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={handleBuyNow}>Buy Now</button>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>

      
    </div>


  );
};

export default ProductDetailPage;
