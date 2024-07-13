// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/Product/ProductDetail';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div className="product-page">
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductPage;