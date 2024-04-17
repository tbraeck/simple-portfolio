import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DesignProjectCard.css'; // Import CSS file

const DesignProjectCard = ({ title, description, videoUrl, githubUrl }) => {
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
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="video-container">
        <video className="project-video" src={videoUrl} controls></video>
      </div>
      <div className="project-links">
        <a className="github-link" href={githubUrl}>GitHub</a>
        <Link className="details-link" to={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DesignProjectCard;
