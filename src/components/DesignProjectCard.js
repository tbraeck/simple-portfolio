import React, { useState } from 'react';
import { Button } from '@mui/material';
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
    <a className="details-link" href={imageUrl} target="_blank" rel="noopener noreferrer">
    <div className="design-project-card" style={{ backgroundColor: hovered ? getRandomColor() : '#fff' }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
     <div className="image-container">
        <img className="project-video" alt='' src={imageUrl}/>
      </div>
      <h3>{title}</h3>
      <div className='design-break'></div>
      <p>{description}</p>
      <Button variant='outlined' size='large'>
        DETAILS
      </Button>
      <div className="project-links">
      </div>
    </div>
    </a>
  );
};

export default DesignProjectCard;
