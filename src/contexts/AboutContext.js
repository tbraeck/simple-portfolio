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
    description: "I am a results-driven software engineer with a fervent commitment to crafting cutting-edge solutions that drive innovation and exceed expectations. Armed with a robust skill set encompassing JavaScript, React, Ruby, Ruby on Rails, HTML, CSS, and WordPress, I am at the forefront of technological advancement. Leveraging my expertise in design and UI/UX, I architect solutions that seamlessly blend form and function, delivering intuitive user experiences that captivate and inspire. What sets me apart is not just my technical prowess, but also my mastery of essential soft skills. A skilled communicator and natural leader, I excel in fostering collaboration and driving team success. With a proven track record in effective management and problem-solving adaptability, I thrive in fast-paced environments where challenges are met with innovation. As a software engineer, I am poised to make a transformative impact, leveraging my blend of technical acumen and strategic soft skills to drive success in every endeavor.",
    techSkills: ["JavaScript", "React", "Ruby", "Ruby on Rails", "HTML", "CSS", "WordPress", "Design", "UI/ UX", "Material UI"],
    softSkills: ["Communication", "Leadership", "Magagement", "Organization", "Problem-Solving", "Adaptability", "Collaboration"],
    links: [
      { name: "GitHub", url: "https://github.com/tbraeck" },
      { name: "Blog", url: "https://dev.to/tbraeck" },
      { name: "Gallery", url: "http://www.tatebraeckelart.com/" },
      { name: "Contact", url: "mailto:tatebraeckel@gmail.com" }
    ]
  };

  return (
    <AboutContext.Provider value={aboutData}>
      {children}
    </AboutContext.Provider>
  );
};
