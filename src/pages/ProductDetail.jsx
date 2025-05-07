import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({ rating: 5, comment: '' });
  
  useEffect(() => {
    // Find product and increment views
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      foundProduct.views += 1;
      setProduct(foundProduct);
    }
  }, [id]);
  
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (product && review.comment.trim()) {
      product.reviews.push({
        rating: review.rating,
        comment: review.comment,
        date: new Date().toISOString()
      });
      setReview({ rating: 5, comment: '' });
    }
  };
  
  if (!product) return <div>Product not found</div>;
  
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: {product.price} DZD</p>
      <p>Views: {product.views}</p>
      <p>Sold: {product.sold}</p>
      
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      
      <div className="reviews">
        <h2>Customer Reviews</h2>
        
        <form onSubmit={handleReviewSubmit}>
          <div>
            <label>Rating:</label>
            <select 
              value={review.rating}
              onChange={(e) => setReview({...review, rating: parseInt(e.target.value)})}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Comment:</label>
            <textarea 
              value={review.comment}
              onChange={(e) => setReview({...review, comment: e.target.value})}
              required
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
        
        {product.reviews.map((r, index) => (
          <div key={index} className="review">
            <p>Rating: {'★'.repeat(r.rating)}</p>
            <p>{r.comment}</p>
            <small>{new Date(r.date).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;