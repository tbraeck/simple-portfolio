import React from 'react';
import './ScrollToTopButton.css'; 

const ScrollToTopButton = ({ onClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    onClick(); 
  };

  return (
    <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
      <span>&#8679;</span>
    </button>
  );
};

export default ScrollToTopButton;
