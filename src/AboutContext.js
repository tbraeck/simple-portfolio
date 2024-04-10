// AboutContext.js
import React, { createContext, useContext } from 'react';

// Define the context
const AboutContext = createContext();

// Custom hook to consume the context
export const useAboutContext = () => useContext(AboutContext);

// Provider component to provide the context value
export const AboutProvider = ({ children }) => {
  // Define your About section data
  const aboutData = {
    title: "About Me",
    description: "I am a software engineer passionate about building innovative solutions.",
    techSkills: ["JavaScript", "React", "Node.js", "HTML", "CSS"]
  };

  return (
    <AboutContext.Provider value={aboutData}>
      {children}
    </AboutContext.Provider>
  );
};
