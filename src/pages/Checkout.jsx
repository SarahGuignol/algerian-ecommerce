import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment (simulated)
    alert(`Order confirmed! Total: ${cartTotal} DZD`);
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" required />
        <label>Address:</label>
        <textarea required></textarea>
        <button type="submit">Place Order</button>
      </form>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default Checkout;