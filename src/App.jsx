
import styled from 'styled-components';
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'

function App() {

  return (
    <>
      <Navbar/>
      <Background>
        <Main/>
        <About/>
      </Background>
    </>
  )
}

export default App


const Background = styled.div` 
width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000000;
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
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