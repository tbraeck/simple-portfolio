import React, { useRef, createContext, useState, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import DesignProjectCard from './DesignProjectCard';
import DeveloperProjectCard from './DeveloperProjectCard';
import CreatorProjectCard from './CreatorProjectCard';
import AboutSection from './AboutSection';
import { AboutProvider } from './AboutContext';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import './styles.css';
import AnimatedSection from './AnimatedSection';
import AnimationVideoS1 from './AnimationVideoS1'; // Import the AnimationVideoS1 component

// Define a context for project data
const ProjectsContext = createContext([]);

// Section component
const Section = ({ title, children, sectionRef, sectionClass }) => (
  <motion.section // Wrap the section with motion component
    initial={{ opacity: 0 }} // Set initial animation
    animate={{ opacity: 1 }} // Set animate animation
    exit={{ opacity: 0 }} // Set exit animation
    ref={sectionRef}
    className={`section ${sectionClass}`}
  >
    <h2>{title}</h2>
    <AnimatePresence>
      <div className="project-cards">{children}</div>
    </AnimatePresence>
  </motion.section>
);

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const developerRef = useRef(null);
  const designerRef = useRef(null);
  const creatorRef = useRef(null);
  const aboutRef = useRef(null);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setHeaderVisible(currentScrollTop <= lastScrollTop || currentScrollTop < 100);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    setShowScrollButton(currentScrollTop > 300); // Show the scroll button when scrolled down 300px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  // Sample project data
  const devProjects = [
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


  const desProjects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://picsum.photos/200',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 1',
      imageUrl: 'https://picsum.photos/200',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 1',
      imageUrl: 'https://picsum.photos/200',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    // Add more project objects as needed
  ];

  const creProjects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
    },
    // Add more project objects as needed
  ];
  return (
    <div className="App">
      <header className={`App-header ${headerVisible ? 'visible' : 'hidden'}`}>
        <a href="/">
          <img src="/LOGO.ico" alt="Logo" />
        </a>
        <h1 className='headerH1'>Software Engineer Portfolio</h1>
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
        <ProjectsContext.Provider value={devProjects}>
          <Section title="Developer" sectionRef={developerRef} sectionClass="developer">
            {/* Add AnimationVideoS1 component */}
            <AnimationVideoS1 />
            {/* Render DeveloperProjectCard components */}
            {devProjects.map((project, index) => (
              <DeveloperProjectCard key={index} {...project} />
            ))}
          </Section>
        </ProjectsContext.Provider>
        <ProjectsContext.Provider value={desProjects}>
          <Section title="Designer" sectionRef={designerRef} sectionClass="designer">
            {/* Render DesignProjectCard components */}
            {desProjects.map((project, index) => (
              <DesignProjectCard key={index} {...project} />
            ))}
          </Section>
        </ProjectsContext.Provider>
        <Section title="Creator" sectionRef={creatorRef} sectionClass="creator">
          {/* Render CreatorProjectCard components */}
          {creProjects.map((project, index) => (
            <CreatorProjectCard key={index} {...project} />
          ))}
        </Section>
        <Section title="About" sectionRef={aboutRef} sectionClass="about">
          <AboutProvider>
            {/* Render AboutSection */}
            <AboutSection />
          </AboutProvider>
        </Section>
      </main>
      {showScrollButton && <ScrollToTopButton onClick={() => setShowScrollButton(false)} />}
      <footer>
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
