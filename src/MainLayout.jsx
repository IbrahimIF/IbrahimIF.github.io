import styled from 'styled-components';
import { useState, useEffect } from "react";
import CanvasBackground from './Styles/CanvasBackgroundAlt';
import KonamiOverlay from './Components/KonamiOverlay';

import Home from './Components/Sections/Home/home'
import Overview from './Components/Sections/Overview/overview'
import Experience from './Components/Sections/Experience/experience'
import Projects from './Components/Sections/Projects/projects'
import Shows from './Components/Sections/Shows/shows'
import Contact from './Components/Sections/Contact/contact'

import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Socials from './Components/socials'

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function MainLayout() {
  const [counter, setCounter] = useState(0);
  const [shipsActive, setShipsActive] = useState(false);
  const [showKonami, setShowKonami] = useState(false);

  // Console log on page load - stays out of the way for anyone just
  // browsing normally, but a small hint for anyone who opens devtools.
  useEffect(() => {
    console.log(
      '%cIbrahim Farrah',
      'font-size: 20px; font-weight: bold; color: #cfcfcf;'
    );
    console.log('%cSoftware Engineer | TypeScript, Python, Java and React', 'color: #7a7a7a;');
    console.log('%cSomething on this page holds still for 3 seconds.', 'color: #4a4a6a; font-style: italic;');
  }, []);

  // Konami code listener - ↑↑↓↓←→←→BA
  useEffect(() => {
    let progress = 0;
    const handleKeyDown = (e) => {
      const expected = KONAMI_CODE[progress];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === expected) {
        progress += 1;
        if (progress === KONAMI_CODE.length) {
          setShowKonami(true);
          setTimeout(() => setShowKonami(false), 2500);
          progress = 0;
        }
      } else {
        progress = key === KONAMI_CODE[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Fadein id="fade-in" className="fadein">
      {showKonami && <KonamiOverlay/>}
      <FixedElementsWrapper id="FixedElementWrapper">
        <Navbar counter={counter} setCounter={setCounter}/>
        <Socials counter={counter} setCounter={setCounter} />
      </FixedElementsWrapper>

      <Background id="Background">
        {shipsActive && <CanvasBackground/>}
        <Home counter={counter} onLogoHold={() => setShipsActive(true)} />
        <Projects counter={counter} setCounter={setCounter}/>
        <Overview/>
        <Experience counter={counter} setCounter={setCounter}/>
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
