// src/components/Cart/CartItem.js
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', id: item.id });
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={removeFromCart}>Remove</button>
    </div>
  );
};

export default CartItem;
