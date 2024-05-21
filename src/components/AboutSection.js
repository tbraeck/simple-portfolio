// AboutSection.js
import React from 'react';
import { useAboutContext } from '../contexts/AboutContext';
import './AboutSection.css';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  // Consume the context
  const aboutData = useAboutContext();

  return (
    <div className="about-content" style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", textAlign: "left", verticalAlign: "middle", padding: "40px", borderRadius: "30px" }}>
      <p className="about-description">{aboutData.description}</p>
      <div className="tech-skills" style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", textAlign: "center", verticalAlign: "middle", padding: "40px", borderRadius: "30px" }}>
        <h3 className="tech-skills-title">Tech Skills</h3>
        <div className='tech-skills-break'></div>
        <ul className="tech-skills-list">
          {aboutData.techSkills.map(skill => (
            <li key={skill} className="tech-skill">{skill}</li>
          ))}
        </ul>
      </div>
      <div className="soft-skills" style={{ backgroundColor: "rgba(204, 204, 204, 0.3)", textAlign: "center", verticalAlign: "middle", padding: "40px", borderRadius: "30px" }}>
        <h3 className="soft-skills-title">Soft Skills</h3>
        <div className='soft-skills-break'></div>
        <ul className="soft-skills-list">
          {aboutData.softSkills.map(skill => (
            <li key={skill} className="soft-skill">{skill}</li>
          ))}
        </ul>
      </div>
      <div className="links" style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", textAlign: "center", verticalAlign: "middle", padding: "40px", borderRadius: "30px" }}>
        <h3 className="links-title">Links</h3>
        <div className='links-break'></div>
        <ul className="links-list">
          {aboutData.links.map(link => (
            <li key={link.name} className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
      
  );
};

export default AboutSection;
