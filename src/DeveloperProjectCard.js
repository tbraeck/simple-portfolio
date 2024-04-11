// DeveloperProjectCard.js, DesignProjectCard.js, CreatorProjectCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperProjectCard = ({ title, description, videoUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <video src={videoUrl} controls></video>
      <a href={githubUrl}>GitHub Link</a>
      <Link to={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>View Details</Link> {/* Link to project detail page */}
    </div>
  );
};

export default DeveloperProjectCard;
