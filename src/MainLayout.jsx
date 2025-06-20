import styled from 'styled-components';
import { useState } from "react";
import CanvasBackground from './Styles/CanvasBackgroundAlt';

import Home from './Components/Sections/Home/home'
import Overview from './Components/Sections/Overview/overview'
import Experience from './Components/Sections/Experience/experience'
import Projects from './Components/Sections/Projects/projects'
import Shows from './Components/Sections/Shows/shows'
import Contact from './Components/Sections/Contact/contact'

import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Socials from './Components/socials'


function MainLayout() {
  const [counter, setCounter] = useState(0);

  return (
    <Fadein id="fade-in" className="fadein">
      <FixedElementsWrapper id="FixedElementWrapper">
        <Navbar counter={counter} setCounter={setCounter}/>
        <Socials counter={counter} setCounter={setCounter} />
      </FixedElementsWrapper>

      <Background id="Background">
        {counter > 10 && <CanvasBackground/>}
        <Home />
        <Overview/>
        <Experience counter={counter} setCounter={setCounter}/>
        <Projects counter={counter} setCounter={setCounter}/>
        {counter > 15 && <Shows/>}
        <Contact/>
        <Footer counter={counter} setCounter={setCounter}/>
      </Background>
    </Fadein>
  )
}

export default MainLayout

const Fadein = styled.div`
  opacity: 1;
  animation: fadeIn 1s ease-in forwards;
  
  @keyframes fadeIn {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const FixedElementsWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
  
  & > * {
    pointer-events: auto;
  }
`;

const Background = styled.div` 
  width: 100%;
  min-height: 100vh;
  position: relative;
  border-radius: 0.5em;
  display:flex;
  flex-direction:column;
  background-color:black;
  z-index: -1;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
      linear-gradient(
          135deg,
          transparent 0%,
          transparent 47%,
          #161616 47%,
          #2c2c2c 53%,
          transparent 53%,
          transparent 100%
        )
        0 0/2em 2em,
      linear-gradient(
          45deg,
          #434343 0%,
          #0a0a0a 47%,
          transparent 47%,
          transparent 53%,
          #434343 53%,
rgb(0, 0, 0) 100%
        )
        0 0/2em 2em,
      linear-gradient(
          -45deg,
          #434343 0%,
          #434343 47%,
          transparent 47%,
          transparent 53%,
          #434343 53%,
          #434343 100%
        )
        1em 1em/2em 2em;
    opacity: 0.5;
    animation: patternFloat 2s linear infinite;
  }

  @keyframes patternFloat {
    0% {
      background-position:
        0 0,
        0 0,
        0 0,
        1em 1em;
    }
    100% {
      background-position:
        2em 2em,
        2em 2em,
        2em 2em,
        3em 3em;
    }
  }

  ::-webkit-scrollbar {
  display: none;
}

      .fadein {
        animation: fadeIn 5s;
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; }
        50% { opacity: 1; }
      }


`;





/*
    <>
    <div className="portfolio">
      <Navbar/>


      <section ref={homeRef} className="section home-section">
          <Main/>
      </section>

      <section ref={aboutRef} className="section about-section">
        <div className="section-content">
          <h2>About Me</h2>

        </div>
      </section>

      <section ref={projectsRef} className="section projects-section">
        <div className="section-content">
          <h2>My Projects</h2>

        </div>
      </section>

      <section ref={contactRef} className="section contact-section">
        <div className="section-content">
          <h2>Contact Me</h2>

        </div>
      </section>
    </div>
    </>

*/