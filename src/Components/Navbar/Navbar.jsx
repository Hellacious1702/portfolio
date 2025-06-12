import React , {useState} from 'react'
import "./Navbar.css";
import MailIcon from './Assets/Mail.png'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {

  const [activeNav , setActiveNav] = useState("Home");
  
    function handleNav(index)
    {
          setActiveNav(index);
    }

  return (
    <>
      <div className="MainNavWrapper">
          <div className="Brand">
              <Link to="/portfolio/" onClick={() => handleNav("Home")}><p>Varad Sandeep Naik</p></Link>
          </div>

          <div className="NavWrapper">
              <Link to="/portfolio/" id={activeNav=="Home" ? "Active" : "notActive"} onClick={() => handleNav("Home")}>Home</Link>
              <Link to="/portfolio/Projects" id={activeNav=="Project" ? "Active" : "notActive"} onClick={() => handleNav("Project")}>Project</Link>
              <Link to="/portfolio/About" id={activeNav=="About" ? "Active" : "notActive"} onClick={() => handleNav("About")}>About</Link>
          </div>

          <div className="ContactWrapper">
              <Link to="/portfolio/Contact"><FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#24262f",}} /></Link>
          </div>
      </div>
        
    </>
  )
}

export default Navbar
