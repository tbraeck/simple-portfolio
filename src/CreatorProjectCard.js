// CreatorProjectCard.js

import React, { useState } from 'react';
import './CreatorProjectCard.css'; // Import CSS file for styles

const CreatorProjectCard = ({ title, medium, description, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="creator-project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageUrl} alt={title} />
      {hovered && (
        <div className="overlay">
          <h3>{title}</h3>
          <p>Medium: {medium}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default CreatorProjectCard;
