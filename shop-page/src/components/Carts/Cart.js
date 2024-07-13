// src/components/Cart/Cart.js
import React from 'react';
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary />
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
