// ProjectDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { projectId } = useParams(); // Assuming you are using React Router for navigation

  // Fetch the project details using the projectId

  return (
    <div className="project-detail">
      {/* Display project details here */}
      <h2>Project Detail Page</h2>
      <p>Project ID: {projectId}</p>
      {/* Add more project details */}
    </div>
  );
};

export default ProjectDetailPage;
