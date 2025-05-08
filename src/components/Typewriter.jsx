// Create a new component: components/Typewriter.jsx
import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 150 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < texts[currentTextIndex].length) {
        setDisplayText(prev => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 1000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, currentTextIndex, texts, speed]);

  return <h1>{displayText}</h1>;
};
