import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ product }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  return (
    <div className="item-card" onClick={handleClick}>
      <img src={product.image} alt={product.name} />
      {product.views < 10 && <span className="new-badge">New!</span>}
      <h3>{product.name}</h3>
      <p>{product.price} DZD</p>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          // Add to cart functionality will be handled by parent component
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;