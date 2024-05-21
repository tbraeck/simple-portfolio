import React from 'react';
import { Link } from 'react-router-dom';
import './DeveloperProjectCard.css'; 

const DeveloperProjectCard = ({ title, description, videoUrl, githubUrl, projectId, type}) => {
  return (
    <div className={`developer-project-card`}>
      <h3 className="developer-project-title">{title}</h3>
      <p className="developer-project-description"  numberOfLines={1}>{description}</p>
      <div className="developer-video-container">
        <video className="developer-project-video" src={videoUrl} controls></video>
      </div>
      <div className="developer-project-links">        
        <Link className="details-link" to={`/${projectId}` } >
          Details
        </Link>
      </div>
    </div>
  );
};

export default DeveloperProjectCard;

