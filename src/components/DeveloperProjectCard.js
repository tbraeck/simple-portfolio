import React from 'react';
import Button from '@mui/material/Button';
import './DeveloperProjectCard.css'; 

const DeveloperProjectCard = ({ title, description, videoUrl, githubUrl, projectId, type}) => {
  return (
    <a className="details-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
    <div className={`developer-project-card`}>
      <h3 className="developer-project-title">{title}</h3>
      <p className="developer-project-description"  >{description}</p>
      <div className="developer-video-container">
        <video className="developer-project-video" src={videoUrl} controls autoPlay muted></video>
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

