// AboutSection.js
import React from 'react';
import { useAboutContext } from './AboutContext';
import './AboutSection.css';

const AboutSection = () => {
  // Consume the context
  const aboutData = useAboutContext();

  return (
    <div className="about-content">
      <div>
        {/* <h2 className="about-title">{aboutData.title}</h2> */}
        <p className="about-description">{aboutData.description}</p>
      </div>
      <div className="tech-skills">
        <h3 className="tech-skills-title">Tech Skills</h3>
        <ul className="tech-skills-list">
          {aboutData.techSkills.map(skill => (
            <li key={skill} className="tech-skill">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
