import React from 'react';
import { Link } from 'react-router-dom';
import './DesignProjectCard.css'; // Import CSS file

const DesignProjectCard = ({ title, description, videoUrl, githubUrl }) => {
  return (
    <div className="design-project-card"> {/* Ensure the class name matches */}
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
