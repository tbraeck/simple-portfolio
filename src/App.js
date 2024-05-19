import React, { useRef, createContext, useState, useEffect } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import DesignProjectCard from './components/DesignProjectCard';
import DeveloperProjectCard from './components/DeveloperProjectCard';
import CreatorProjectCard from './components/CreatorProjectCard';
import AboutSection from './components/AboutSection';
import { AboutProvider } from './contexts/AboutContext';
// import ProjectDetailPage from './ProjectDetailPage';
import { Routes, Route } from 'react-router-dom';

// import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import './styles.css';
// import AnimationVideoS1 from './components/AnimationVideoS1'; // Import the AnimationVideoS1 component

const ProjectsContext = createContext([]);

const Section = ({ title, children, sectionRef, sectionClass }) => (
  <section ref={sectionRef} className={`section ${sectionClass}`}>
    <div className="section-header">
      <h2>{title}</h2>
    </div>
    <div className="project-cards">{children}</div>
  </section>
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
    // eslint-disable-next-line
  }, [lastScrollTop,]);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

 
  const devProjects = [
    {
      title: 'Barter Barn',
      description: 'Barter Barn is a forum-style app that encourages community bartering of services and goods.',
      videoUrl: 'https://youtu.be/H4KahrCLvLM',
      githubUrl: 'https://github.com/tbraeck/barter_barn_v2',
      imageUrl: 'barterBarn.png',
      projectId: 1
    },
    {
      title: 'Teach Source',
      description: 'Teach Source was created to be a resource database for all educators to access for their instructional needs.',
      videoUrl: 'https://youtu.be/KeARm1YrWls',
      githubUrl: 'https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main',
      imageUrl: 'drawingIdeas.png',
      projectId: 2
    },
    {
      title: 'Drawing Ideas Now!',
      description: 'Drawing Ideas Now was created to inspire every artist or budding artist for drawing or creative ideas.',
      videoUrl: 'https://youtu.be/b4JDXWqOegs',
      githubUrl: 'https://github.com/tbraeck/PHASE4_PROJECT',
      imageUrl: 'teachSource.png',
      projectId: 3
    },
  ];

  const desProjects = [
    {
      title: 'Private School Product Design',
      description: 'Designed multiple products and logos for numerous international schools.',
      medium: 'Digital',
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/international-day-shirt-1-black-text-alter-1_orig.jpg',
      projectId: 8
    },
    {
      title: 'Shirt Logo Design',
      description: 'Shirt design for online sales. Product displayed on Zazzle.',
      medium: 'Digital',
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/silly-kitty-rainbows-design-canva_orig.png',
      projectId: 8
    },
    {
      title: 'Crossfit Apparel Design',
      description: 'Shirt design for KFT Brands Apparel Company.',
      medium: 'Digital',
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/untitled-design-18_orig.png',
      projectId: 8
    },
  ];

  const creProjects = [
    {
      title: "Why Can't You See It?",
      description: "Illustrated children's book using hand-drawn art, Adobe Photoshop, and Adobe In-Design",
      medium: 'Pen & Ink | Digital',
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/wcysi-cover_orig.jpg',
      projectId: 7
    },
    {
      title: 'International School Product Design',
      description: 'Designed multiple products and logos for numerous international schools.',
      medium: 'Digital',
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/international-day-shirt-1-black-text-alter-1_orig.jpg',
      projectId: 8
    },
    {
      title: 'Project 3',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
      projectId: 9
    },
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
      projectId: 10
    },
    {
      title: 'Project 2',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
      projectId: 11
    },
    {
      title: 'Project 3',
      description: 'Description of Project 1',
      medium: 'MEDIUM',
      imageUrl: 'https://picsum.photos/200',
      projectId: 12
    },
    // Add more project objects as needed
  ];

  return (
    <div className="App">
      <header className={`App-header ${headerVisible ? 'visible' : 'hidden'}`}>
        <a href="/">
          <img src="/TNT_LOGO.png" style={{height: "70px", width: "auto", marginLeft: "30px"}} alt="Logo" />
        </a>
        <h1 className='headerH1' 
        style={{
          fontFamily: "Changa, sans-serif",
          fontOpticalSizing: "auto",
          fontWeight: 200,
          color: "#00cc99",
          fontStyle: "normal",
          fontSize: "40px",
        }}
        >
          TATE BRAECKEL
        </h1>
        <nav>
          <ul>
          <li onClick={() => scrollToRef(developerRef)}><button className="button" style={{ fontSize: "28px" }}>Developer</button></li>
            <li onClick={() => scrollToRef(designerRef)}><button className="button" style={{ fontSize: "28px" }}>Designer</button></li>
            <li onClick={() => scrollToRef(creatorRef)}><button className="button" style={{ fontSize: "28px" }}>Creator</button></li>
            <li onClick={() => scrollToRef(aboutRef)}><button className="button" style={{ fontSize: "28px" }}>About</button></li>
          </ul>
        </nav>
      </header>
      <main>
      <Routes> 
          <Route exact path="/"  /> 
           {/* <Route exact path="/projects" component={Projects} />  */}
           {/* <Route path="/projects/:projectId" component={ProjectDetailPage} /> */}
           <Route path="/projects/:projectId" component={DesignProjectCard} />

      </Routes>
        {/* <AnimationVideoS1 />  */}
        <ProjectsContext.Provider value={devProjects}>
          <Section sectionRef={developerRef} sectionClass="developer">
          <h1 style={{   
      // padding: "30px 0 0 30px",
      fontFamily: "Changa, sans-serif",
      fontOpticalSizing: "auto",
      fontWeight: 350,
      color: "#8ecae6",
      fontStyle: "normal",
      fontSize: "100px",
      opacity: "0.75",
      marginRight: "65px"
    }}
    >
      DEVELOPER
    </h1>
            {devProjects.map((project, index) => (
              <DeveloperProjectCard key={index} {...project} />
            ))}
          </Section>
        </ProjectsContext.Provider>
        <div >

        <ProjectsContext.Provider value={desProjects}>
  <Section sectionRef={designerRef} sectionClass="designer">
    <h1 style={{   
      paddingLeft: "30px",
      fontFamily: "Changa, sans-serif",
      fontOpticalSizing: "auto",
      fontWeight: 350,
      color: "#b56576",
      fontStyle: "normal",
      fontSize: "100px",
      opacity: "0.75",
      marginRight: "65px"

    }}
    >
      DESIGNER
    </h1>
    {desProjects.map((project, index) => (
      <DesignProjectCard key={index} {...project} />
    ))}
  </Section>
</ProjectsContext.Provider>
</div>
<div >
<Section  sectionRef={creatorRef} sectionClass="creator">
        <h1 style={{   
      // padding: "0px 0 0 0px",
      fontFamily: "Changa, sans-serif",
      fontOpticalSizing: "auto",
      fontWeight: 350,
      color: "#0c61d8",
      fontStyle: "normal",
      fontSize: "100px",
      opacity: "0.75",
      zIndex: "10",
      marginLeft: "55px"

    }}
    >
      CREATOR
    </h1> 
          {creProjects.map((project, index) => (
            <CreatorProjectCard key={index} {...project} />
          ))}
        </Section>
</div>
        
        <Section sectionRef={aboutRef} sectionClass="about">
  <div>
  <h1 style={{   
    // padding: "30px 0 0 30px",
    fontFamily: "Changa, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 350,
    color: "#AA336A",
    fontStyle: "normal",
    fontSize: "100px",
    opacity: "0.7",
    zIndex: "10",
    marginRight: "55px"

  }}
  >
    ABOUT
  </h1>
  </div>
  
  <AboutProvider>
    <AboutSection />
  </AboutProvider>
</Section>
      </main>
      {showScrollButton && <ScrollToTopButton onClick={() => setShowScrollButton(false)} />}
      <footer>
        <p style={{paddingLeft: "30px"}}>© 2024 Tate Braeckel</p>
      </footer>
    </div>
  );
}

export default App;
