// src/pages/CheckoutPage.js
import React from 'react';
import CartSummary from '../components/Cart/CartSummary';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
      <CartSummary />
      {/*Other components or content */}
    </div>
  );
};

export default CheckoutPage;
