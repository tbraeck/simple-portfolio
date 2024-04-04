import React, { useRef, createContext, useContext, useState } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import './styles.css';

// Define a context for project data
const ProjectsContext = createContext([]);

// ProjectCard component
const ProjectCard = ({ title, description, videoUrl, githubUrl }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <iframe
      width="100%"
      height="200"
      src={videoUrl}
      title="Demo Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <a href={githubUrl}>GitHub Link</a>
  </div>
);

// Section component
const Section = ({ title, children, sectionRef, sectionClass }) => (
  <section ref={sectionRef} className={`section ${sectionClass}`}>
    <h2>{title}</h2>
    <div className="project-cards">{children}</div>
  </section>
);

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const developerRef = useRef(null);
  const designerRef = useRef(null);
  const creatorRef = useRef(null);
  const aboutRef = useRef(null);

  const handleScroll = () => {
    // Show the scroll button when the user scrolls down a certain amount
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Add a scroll event listener to update the state when the user scrolls
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
      githubUrl: 'https://github.com/yourusername/project3',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Software Engineer Portfolio</h1>
        <nav>
          <ul>
            <li onClick={() => scrollToRef(developerRef)}><button className="button">Developer</button></li>
            <li onClick={() => scrollToRef(designerRef)}><button className="button">Designer</button></li>
            <li onClick={() => scrollToRef(creatorRef)}><button className="button">Creator</button></li>
            <li onClick={() => scrollToRef(aboutRef)}><button className="button">About</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <ProjectsContext.Provider value={projects}>
          <Section title="Developer" sectionRef={developerRef} sectionClass="developer">
            {/* Display project cards for developer */}
            <DeveloperProjects />
          </Section>
          <Section title="Designer" sectionRef={designerRef} sectionClass="designer">
            {/* Add cards for designer projects */}
          </Section>
          <Section title="Creator" sectionRef={creatorRef} sectionClass="creator">
            {/* Add cards for creator projects */}
          </Section>
          <Section title="About" sectionRef={aboutRef} sectionClass="about">
            <p>Information about yourself</p>
          </Section>
        </ProjectsContext.Provider>
      </main>
      {showScrollButton && <ScrollToTopButton onClick={() => setShowScrollButton(false)} />}

      <footer>
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
}

// DeveloperProjects component to display project cards
const DeveloperProjects = () => {
  const projects = useContext(ProjectsContext);
  
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};

export default App;
