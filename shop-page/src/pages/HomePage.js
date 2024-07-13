// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/Product/ProductList';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Shop</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
