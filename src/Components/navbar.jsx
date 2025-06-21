import { FaHouse,FaCircleInfo, FaTableColumns, FaEnvelope } from "react-icons/fa6";
import { IoIosBriefcase, IoIosTv } from "react-icons/io";

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";


function Navbar({counter, setCounter }) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  const handleCheckClick = () => {
    setCounter(prevCounter => prevCounter + 1);

    if (counter == 17 ){
      navigate("/Random");
    }
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="nav">
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
          <Tooltip $text={ (counter >= 0 && counter < 6)
                  ? (counter % 2 === 0 ? "Dark Mode" : "Light Mode")
                  : `Click count: ${counter}`
              } >
              <div className="navbar-circle">
                <label className="checkBox">
                  <input id="ch1" type="checkbox" onClick={handleCheckClick}/>
                  <div className="transition"></div>
                </label>
              </div>
            </Tooltip>
        
            <div className="navbar-items">
              <a className="nav-item" href="#Home"> {width >= 700 ? ('Home') : (<FaHouse/>)}</a>
              <a className="nav-item" href="#Overview">{width >= 700 ? ('Overview') : (<FaCircleInfo />)}</a>
              <a className="nav-item rare" href="#Experience">{width >= 700 ? ('Experience') : (<IoIosBriefcase />)}</a>
              <a className="nav-item" href="#Project">{width >= 700 ? ('Project') : (<FaTableColumns />)}</a>
              {counter > 15 && <a className="nav-item rare" href="#Shows">{width >= 700 ? ('Shows') : (<IoIosTv />)}</a>}
              <a className="nav-item" href="#Contact">{width >= 700 ? ('Contact') : (<FaEnvelope />)}</a>
            </div>
          </div>
        </nav>
      </Navigation>
    </div>
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
  border: 2px solid white;
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


@media (max-width: 650px) {
  .navbar-content {
    padding: 5px 10px 5px 5px;
    border-radius: 30px;
    margin-top: -60px;
  }

  .navbar-circle {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .checkBox {
    width: 25px;
    height: 25px;
    box-shadow: 0px 0px 0px 1px #fff;
  }

  .checkBox .transition {
    width: 50px;
    height: 50px;
    top: -45px;
    left: -45px;
  }

  .navbar-items {
    gap: 10px;
  }

  .nav-item {
    font-size: 12px;
    padding: 6px 10px;
  }

  .navbar-toggle {
    width: 50px;
    height: 50px;
  }

  .burger-menu .bars {
    width: 25px;
    height: 2px;
    gap: 6px;
  }

  .nav-toggle:checked ~ .navbar #bar1,
  .nav-toggle:checked ~ .navbar #bar3 {
    width: 15px;
  }
}

`;


const Tooltip = styled.div`
  position: relative;
  display: inline-flex;

  &:hover::after {
    content: '${props => props.$text}';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 6px 12px;
    background: #1A1F2C;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 1;
    transition: opacity 0.2s;
    z-index: 100;
  }

  &::after {
    content: '';
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;
