import React, { useState } from 'react';
import './CreatorProjectCard.css'; 
const CreatorProjectCard = ({ projectId, title, medium, description, image, imageUrl, project}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a className="details-link" href={imageUrl} target="_blank" rel="noopener noreferrer">
      <div
        className="creator-project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={image} alt={title} />
        {hovered && (
          <div className="overlay">
            <h3>{title}</h3>
            <p>{medium}</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default CreatorProjectCard;
