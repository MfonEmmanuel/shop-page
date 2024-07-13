// src/components/Checkout/Checkout.js
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartSummary from '../Cart/CartSummary';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Order submitted:', formData);
    setOrderSubmitted(true);
  };

  if (orderSubmitted) {
    return <h2>Thank you for your order!</h2>;
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <CartSummary />
      <CheckoutForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Checkout;
