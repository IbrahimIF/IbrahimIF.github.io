/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfoCircle, faBriefcase, faEnvelope, faTableColumns, faGear } from '@fortawesome/free-solid-svg-icons' */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Navbar({counter, setCounter }) {
  const navigate = useNavigate();


  const handleCheckClick = () => {
    setCounter(prevCounter => prevCounter + 1);

    if (counter == 8 ){
      navigate("/Random");
    }
  };

  return (
    <Navigation id="Navbar">
            <input className="nav-toggle" id="nav-toggle" type="checkbox" />

<nav className="navbar">
  <label className="navbar-toggle" htmlFor="nav-toggle">
    <div className="burger-menu">
      <div className="bars" id="bar1"></div>
      <div className="bars" id="bar2"></div>
      <div className="bars" id="bar3"></div>
    </div>
  </label>
  
  <div className="navbar-content">
    <div className="navbar-circle">
      <label className="checkBox">
        <input id="ch1" type="checkbox" onClick={handleCheckClick}/>
        <div className="transition"></div>
      </label>
    </div>

    <div className="navbar-items">
      <a className="nav-item" href="#Home">Home</a>
      <a className="nav-item" href="#Overview">Overview</a>
      <a className="nav-item rare" href="#Experience">Experience</a>
      <a className="nav-item" href="#Project">Projects</a>
      <a className="nav-item rare" href="#Skills">Skills</a>
      <a className="nav-item rare" href="#Shows">Shows</a>
      <a className="nav-item" href="#Contact">Contact</a>
      <a className="nav-item" href="#Contact">{counter}</a>
    </div>
  </div>
</nav>
    </Navigation>
  )
}

export default Navbar


const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0px;
  position: fixed;
  z-index: 1;


.nav-toggle {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.navbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar-toggle {
  width: 60px;
  height: 60px;
  background: #bababa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;
}

.navbar-content {
  display: flex;
  align-items: center;
  background:rgb(0, 0, 0);
  border-radius: 50px;
  padding: 10px 20px 10px 10px;
  margin-top: -70px;
  opacity: 0;
  transform: translateY(100px) scale(0.8);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
  border: 2px solid white;

}

.nav-toggle:checked ~ .navbar .navbar-content {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
  margin-top: 20px;
}

.nav-toggle:checked ~ .navbar .icon {
  transform: rotate(180deg);
}

.navbar-circle {
  width: 50px;
  height: 50px;
  background:rgb(29, 29, 29);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: relative;
  overflow: hidden;
}

.navbar-items {
  display: flex;
  gap: 15px;
}

.nav-item {
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.nav-toggle:checked ~ .navbar .burger-menu {
  transform: rotate(90deg);
}

.nav-toggle:checked ~ .navbar .navbar-toggle {
  background: #000000;
}

.nav-toggle:checked ~ .navbar #bar1,
.nav-toggle:checked ~ .navbar #bar3 {
  width: 20px;
}

.nav-toggle:checked ~ .navbar .bars {
  background-color: #ffffff;
}

#checkbox {
  display: none;
}

.burger-menu {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.5s ease;
}

.bars {
  width: 30px;
  height: 3px;
  background-color: black;
  border-radius: 5px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.checkBox {
  display: block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0);
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 0px 0px 2px #fff;
  transition: 200ms all;
  cursor: pointer;
  overflow: hidden;
}

.checkBox .transition {
  width: 60px;
  height: 60px;
  background-color: #fff;
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type="checkbox"]:checked + div {
  left: -10px;
  top: -10px;
}

.checkBox input[type="checkbox"] {
  position: absolute;
  left: 50px;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}

.nav-item {
  text-decoration: none;
  color: rgb(201, 201, 201);
  font-size: 14px;
  position: relative;
  padding-bottom: 5px;
  display: inline-flex;
  align-items: center;
}

.nav-item i {
  margin-right: 8px;
}
.nav-item::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #38383810;
  position: absolute;
  bottom: -10px;
  left: 0;
  transition: width 0.3s;
}

.nav-item:hover::after {
  width: 100%;
  background-color: rgb(194, 194, 194);
  transition: 0.3s;
}

`;



/*
import React, { useRef } from 'react';
import { useEffect } from 'react';

function App() {

    // Refs for each section
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
  
    // Scroll handler
    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      });
    };
  
    // Optional: Highlight active nav item on scroll
    useEffect(() => {
      const handleScroll = () => {
        // Logic to determine which section is in view
        // and update active nav item accordingly
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  

  */