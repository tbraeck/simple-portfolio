import React from 'react';
import Button from '@mui/material/Button';
import './DeveloperProjectCard.css';

const DeveloperProjectCard = ({ title, description, videoUrl, githubUrl, projectId, type }) => {
  const embedUrl = videoUrl.replace("youtu.be", "www.youtube.com/embed");

  return (
    <a className="details-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
      <div className={`developer-project-card`}>
        <h3 className="developer-project-title">{title}</h3>
        <p className="developer-project-description">{description}</p>
        <div className="developer-video-container">
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Button variant='contained'>
          DETAILS
        </Button>
        <div className="developer-project-links">
        </div>
      </div>
    </a>
  );
};

export default DeveloperProjectCard;
