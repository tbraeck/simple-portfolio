// AboutContext.js
import React, { createContext, useContext } from 'react';

// Define the context
const DevProjectContext = createContext();

// Custom hook to consume the context
export const useDevProjectContext = () => useContext(DevProjectContext);

// Provider component to provide the context value
export const DevProjectProvider = ({ children }) => {
  // Define your About section data
  const devProjects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
      githubUrl: 'https://github.com/yourusername/project1',
      projectId: 1
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
      githubUrl: 'https://github.com/yourusername/project2',
      projectId: 2
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
      githubUrl: 'https://github.com/yourusername/project3',
      projectId: 3
    },
    // Add more project objects as needed
  ];

  return (
    <DevProjectContext.Provider value={devProjects}>
      {children}
    </DevProjectContext.Provider>
  );
};


