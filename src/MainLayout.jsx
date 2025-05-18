import styled from 'styled-components';

import Home from './Components/Sections/Home/home'
import Overview from './Components/Sections/Overview/overview'
import Experience from './Components/Sections/Experience/experience'
import Projects from './Components/Sections/Projects/projects'
import Shows from './Components/Sections/Shows/shows'
import Contact from './Components/Sections/Contact/contact'

import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Socials from './Components/socials'


function App() {

  return (
    <Fadein id="fade-in" className="fadein">
      <FixedElementsWrapper>
        <Navbar/>
        <Socials />
      </FixedElementsWrapper>

      <Background id="Background">
        <Home/>
        <Overview/>
        <Experience/>
        <Projects/>
        <Shows/>
        <Contact/>
        <Footer/>
      </Background>
    </Fadein>
  )
}

export default App

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
  background-color: #000000;
  border-radius: 0.5em;
  box-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 0.2);
  display:flex;
  flex-direction:column;

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
          #0a0a0a 100%
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
        0 0/2em 2em,
      linear-gradient(
          45deg,
          transparent 0%,
          transparent 47%,
          #000000 47%,
          #434343 53%,
          transparent 53%,
          transparent 100%
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