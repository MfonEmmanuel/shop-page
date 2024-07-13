// src/components/Cart/CartSummary.js
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartSummary = () => {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={() => alert('Proceed to checkout')}>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
