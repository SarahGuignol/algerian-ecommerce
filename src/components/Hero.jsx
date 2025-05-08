import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Animation logic can go here
  }, []);

  return (
    <div className="hero-animated">
      <div className="gold-shimmer"></div>
      <h1>Artisan <span className="gold-text">Creations</span></h1>
      <p>From the Heart of Algeria</p>
    </div>
  );
};

export default Hero;