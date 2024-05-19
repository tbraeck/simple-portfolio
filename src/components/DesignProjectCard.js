import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './DesignProjectCard.css'; // Import CSS file

const DesignProjectCard = ({ projectId, title, description, medium, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  const getRandomColor = () => {
    const colors = ['#f9b685', '#8ac6d1', '#e4a9a1', '#b8b8b8', '#f2d49b']; // Add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="design-project-card" style={{ backgroundColor: hovered ? getRandomColor() : '#fff' }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
     <div className="image-container">
        <img className="project-video" alt='' src={imageUrl}/>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="project-links">
       
        <Link className="details-link" to={`/projects/${projectId}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DesignProjectCard;
