// DeveloperProjectCard.js

import React from 'react';

const DeveloperProjectCard = ({ title, description, videoUrl, githubUrl }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <iframe
      width="100%"
      height="200"
      src={videoUrl}
      title="Demo Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <a href={githubUrl}>GitHub Link</a>
  </div>
);

export default DeveloperProjectCard;
