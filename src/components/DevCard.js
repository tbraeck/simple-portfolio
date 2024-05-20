import React from 'react';
import { useParams } from 'react-router-dom';

const DevCard = () => {
  const { type, projectId } = useParams();

  const projectData = {
    developer: {
      1: {
        title: 'Developer Project Title 1',
        description: 'Detailed description of developer project 1',
        videoUrl: 'video-url.mp4',
        githubUrl: 'https://github.com/project1'
      },
      // Add more developer projects as needed
    },
    design: {
      2: {
        title: 'Design Project Title 1',
        description: 'Detailed description of design project 1',
        videoUrl: 'video-url.mp4',
        githubUrl: 'https://github.com/project2'
      },
      // Add more design projects as needed
    },
    creator: {
      3: {
        title: 'Creator Project Title 1',
        description: 'Detailed description of creator project 1',
        videoUrl: 'video-url.mp4',
        githubUrl: 'https://github.com/project3'
      },
      // Add more creator projects as needed
    },
  };

  const project = projectData[type]?.[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`dev-card ${type}`}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="developer-video-container">
        <video className="developer-project-video" src={project.videoUrl} controls></video>
      </div>
      <a className="developer-github-link" href={project.githubUrl}>GitHub</a>
    </div>
  );
};

export default DevCard;
