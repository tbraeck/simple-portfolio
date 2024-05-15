// ScrollToTopButton.js

import React from 'react';
import './ScrollToTopButton.css'; // Import CSS file for styles

const ScrollToTopButton = ({ onClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    onClick(); // Call the onClick function passed as a prop
  };

  return (
    <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
      <span>&#8679;</span>
    </button>
  );
};

export default ScrollToTopButton;
