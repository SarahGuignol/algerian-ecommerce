import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItemCount } = useCart();
  
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="logo">Algerian Treasures</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;