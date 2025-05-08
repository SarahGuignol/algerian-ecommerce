import React, { useState } from 'react';
import ItemCard from '../components/ItemCard';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';
import Hero from '../components/Hero';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(products.map(product => product.name.split(' ')[1]))];

  return (
    <><div className="home-page">
      <h1>Algerian Clothing Store</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />

      <div className="category-filter">
        {categories.map(category => (
          <button key={category} onClick={() => setSearchTerm(category)}>
            {category}
          </button>
        ))}
      </div>
      
      <Hero />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ItemCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)} />
        ))}
      </div>
    </div></>
  );
};

export default Home;