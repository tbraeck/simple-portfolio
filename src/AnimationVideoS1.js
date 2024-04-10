import React from 'react';
import './AnimationVideoS1.css'; 

const AnimationVideoS1 = () => {
  return (
    <div className="animation-video-container"> {/* Add a container for positioning */}
      <video
        src="../public/anim1.mp4" 
        autoPlay
        loop
        muted
        className="animation-video"
        />
    </div>
  );
};

export default AnimationVideoS1;
