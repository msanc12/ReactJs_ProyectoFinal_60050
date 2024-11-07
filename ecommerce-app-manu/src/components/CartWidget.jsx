import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';  

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="btn btn-cart">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge badge-pill badge-danger ml-1">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;