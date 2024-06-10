import React, { useRef, createContext, useState, useEffect } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import DesignProjectCard from './components/DesignProjectCard';
import DeveloperProjectCard from './components/DeveloperProjectCard';
import CreatorProjectCard from './components/CreatorProjectCard';
import AboutSection from './components/AboutSection';
import Home from './components/Home';
import { AboutProvider } from './contexts/AboutContext';
// import ProjectDetailPage from './ProjectDetailPage';
import { Routes, Route } from 'react-router-dom';
import shirtImage from './assets/shirt.jpeg';
import kittyImage from './assets/kitty.jpeg';
import kftShirtImage from './assets/kft-shirt.png';
import heartBrain from './assets/heart-and-brain.png';
import wcysi from './assets/wcysi.jpeg';
import onFire from './assets/on-fire.png';
import homeImg from './assets/home.png';
import agua from './assets/agua.png';
import dayOfDead from './assets/diademuertos.jpeg';
import selfPortrait from './assets/self-portrait.png';
import ocean from './assets/ocean.png';
import './styles.css';
import DevCard from './components/DevCard';

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
      type: "developer",
      projectId: 1
    },
    {
      title: 'Teach Source',
      description: 'Teach Source is a resource database for all educators to access for their instructional needs.',
      videoUrl: 'https://youtu.be/KeARm1YrWls',
      githubUrl: 'https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main',
      imageUrl: 'drawingIdeas.png',
      type: "developer",
      projectId: 2
    },
    {
      title: 'Drawing Ideas Now!',
      description: 'Drawing Ideas Now was created to inspire every artist or budding artist for drawing or creative ideas.',
      videoUrl: 'https://youtu.be/b4JDXWqOegs',
      githubUrl: 'https://github.com/tbraeck/PHASE4_PROJECT',
      imageUrl: 'teachSource.png',
      type: "developer",
      projectId: 3
    },
  ];

  const desProjects = [
    {
      title: 'School Product Design',
      description: 'Designed multiple products and logos for numerous international schools.',
      medium: 'Digital',
      image: shirtImage,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/international-day-shirt-1-black-text-alter-1_orig.jpg',
      type: "designer",
      projectId: 4
    },
    {
      title: 'Shirt Logo Design',
      description: 'Shirt design for online sales. Product displayed on Zazzle.',
      medium: 'Digital',
      image: kittyImage,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/rainbow-diamond_orig.jpg',
      type: "designer",
      projectId: 5
    },
    {
      title: 'Crossfit Apparel Design',
      description: 'Shirt design for KFT Brands Apparel Company.',
      medium: 'Digital',
      image: kftShirtImage,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/untitled-design-18_orig.png',
      type: "designer",
      projectId: 6
    },
  ];

  const creProjects = [
    {
      title: "Why Can't You See It?",
      description: "Illustrated children's book using hand-drawn art, Adobe Photoshop, and Adobe In-Design",
      medium: 'Pen & Ink | Digital',
      image: wcysi,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/wcysi-cover_orig.jpg',
      type: "creator",
      projectId: 7
    },
    {
      title: 'Heart and Brain',
      description: 'Illustration about how our minds and our hearts are always connected.',
      medium: 'Pencil | Ink',
      image: heartBrain,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/heart-and-brain_orig.png',
      type: "creator",
      projectId: 8
    },
    {
      title: 'On Fire',
      description: 'An illustration using line and shape to create a stylized depiction of a woman who embodies power.',
      medium: 'Pencil | Ink | Digital',
      image: onFire,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/on-fire-hair-extensions-portfolio_orig.png',
      type: "creator",
      projectId: 9
    },
    {
      title: 'Agua',
      description: "This illustration was inspired by humanity's constant struggle. ",
      medium: 'Digital',
      image: agua,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/agua-color-1_orig.png',
      type: "creator",
      projectId: 10
    },
    {
      title: 'Dia de Muertos',
      description: 'This guitar design was inspired by my love for Mexican traditional art. ',
      medium: 'Acrylic Paint',
      image: dayOfDead,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/dia-muertos_orig.jpeg',
      type: "creator",
      projectId: 11
    },
    {
      title: 'Home in Utah',
      description: 'This was commission piece done for a Realtor client for her own client.',
      medium: 'Pencil',
      image: homeImg,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/p27_orig.png',
      type: "creator",
      projectId: 12
    },
    {
      title: 'Ocean',
      description: 'This guitar design was inspired by my love for my partner and for the ocean.',
      medium: 'Acrylic Paint',
      image: ocean,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/p49_orig.png',
      type: "creator",
      projectId: 13
    },
    {
      title: 'Self-Portrait',
      description: 'This is self-portrait I did many years ago.',
      medium: 'Ink on Paper',
      image: selfPortrait,
      imageUrl: 'http://www.tatebraeckelart.com/uploads/1/7/8/7/17870845/selfie-pen_orig.png',
      type: "creator",
      projectId: 14
    },
    
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
          <Route exact path="/" element={<Home/>} /> 
          <Route path="/project/:projectId" element={ <DevCard
            creProjects={creProjects}
            devProjects={devProjects}
            desProjects={desProjects}
            />}>
          </Route>      
      </Routes>
        <ProjectsContext.Provider value={devProjects}>
          <Section sectionRef={developerRef} sectionClass="developer">
          <h1 style={{   
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
    <div>
      <Section  sectionRef={creatorRef} sectionClass="creator">
        <h1 style={{   
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
              fontFamily: "Changa, sans-serif",
              fontOpticalSizing: "auto",
              fontWeight: 350,
              color: "#AA336A",
              fontStyle: "normal",
              fontSize: "100px",
              opacity: "0.7",
              zIndex: "10",
              marginRight: "25px"
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
        <p style={{paddingLeft: "40px", paddingTop: "15px", height: "5  0px"
        }}>© 2024 Tate Braeckel</p>
      </footer>
    </div>
  );
}

export default App;
