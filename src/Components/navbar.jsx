import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfoCircle, faBriefcase, faEnvelope, faTableColumns, faGear } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

function navbar() {

  return (
    <Navbar id="Navbar">
            <ul id="nav-ul">
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faHouse} /> Home</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faBriefcase} /> Portfolio</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faTableColumns} /> Dashboard</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faGear} /> Settings</a></li>
            </ul>
    </Navbar>
  )
}

export default navbar


const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0px;
  position: fixed;
  z-index: 1;


#nav-ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  background-color: #ffffff;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 60%;
  border-radius: 10px; 
  padding: 10px;
  overflow: hidden;
  z-index: 5;
}

#nav-ul > li {
  text-align: center;
}

.navbutton {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 14px; 
  position: relative; 
  padding-bottom: 5px; 
  display: inline-flex; 
  align-items: center;
}

.navbutton i {
  margin-right: 8px; 
}

.navbutton::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #00000010;
  position: absolute;
  bottom: -10px;
  left: 0;
  transition: width 0.3s;
}

.navbutton:hover::after {
  width: 100%; 
  background-color: rgb(0, 21, 255); 
  transition: 0.3s;
}

.navbutton:hover {
  color: rgb(0, 21, 255);
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