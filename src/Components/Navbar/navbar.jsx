import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfoCircle, faBriefcase, faEnvelope, faTableColumns, faGear } from '@fortawesome/free-solid-svg-icons'

import './navbar.css'


function navbar() {

  return (
    <>
        <nav className="navbar">
            <ul id="nav-ul">
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faHouse} /> Home</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faBriefcase} /> Portfolio</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faTableColumns} /> Dashboard</a></li>
                <li><a href="" className="navbutton"> <FontAwesomeIcon icon={faGear} /> Settings</a></li>
            </ul>
        </nav>
    </>
  )
}

export default navbar