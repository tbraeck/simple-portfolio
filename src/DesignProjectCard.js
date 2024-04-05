// DesignerProjectCard.js

import React from 'react';

const DesignerProjectCard = ({ title, description, imageUrl, githubUrl }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={imageUrl} alt={title} />
    <a href={githubUrl}>GitHub Link</a>
  </div>
);

export default DesignerProjectCard;
