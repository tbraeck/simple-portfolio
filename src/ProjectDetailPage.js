// ProjectDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = (title, description, videoUrl, githubUrl) => {
  const { projectId } = useParams(); // Assuming you are using React Router for navigation

  // Fetch the project details using the projectId

  return (
    <div className="project-detail">
      <h2>Project Detail Page</h2>
      <p>Project ID: {projectId}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <video src={videoUrl} controls></video>
      <a href={githubUrl}>GitHub</a>
    </div>
  );
};

export default ProjectDetailPage;
