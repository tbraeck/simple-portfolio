import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProjectDetailPage = () => {
  const { projectId } = useParams(); // Assuming you are using React Router for navigation
  const [project, setProject] = useState(null);
console.log(projectId)
  useEffect(() => {
    // Fetch project details based on the projectId
    // Example fetch request:
    fetchProjectDetails(projectId);
  }, [projectId]);

  const fetchProjectDetails = async (projectId) => {
    try {
      // Make a fetch request to fetch project details using the projectId
      const response = await fetch(`http://localhost:3000/projects/${projectId}`); // Adjust the API endpoint as needed
      if (!response.ok) {
        throw new Error('Failed to fetch project details');
      }
      const projectData = await response.json();
      setProject(projectData);
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  if (!project) {
    return <div>Loading...</div>; // Render loading state while fetching project details
  }

  return (
    <div className="project-detail">
      <h2>{project.title} Detail Page</h2>
      <p>Project ID: {projectId}</p>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <video src={project.videoUrl} controls></video>
      <Link to={project.githubUrl} target="_blank">GitHub</Link> {/* Use Link component */}
    </div>
  );
};

export default ProjectDetailPage;
