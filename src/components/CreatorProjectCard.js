import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CreatorProjectCard.css'; // Import CSS file for styles

const CreatorProjectCard = ({ projectId, title, medium, description, imageUrl }) => {
  const [hovered, setHovered] = useState(false);
// console.log(projectId)
  return (
    <Link to={`/project/${projectId}`} className="project-link"> {/* Use Link with dynamic path */}
      <div
        className="creator-project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={imageUrl} alt={title} />
        {hovered && (
          <div className="overlay">
            <h3>{title}</h3>
            <p>{medium}</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CreatorProjectCard;
