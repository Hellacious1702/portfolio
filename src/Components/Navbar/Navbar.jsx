import React , {useState} from 'react'
import "./Navbar.css";
import MailIcon from './Assets/Mail.png'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const [activeNav , setActiveNav] = useState("Home");
  const [activeMobileNav , setActiveMobileNav] = useState("Close");

    function handleNav(index)
    {
          setActiveNav(index);
    }

    function handleMobileNav(index)
    {
          if(index=="Open")
          {
            setActiveMobileNav("Open")
          }else{
            setActiveMobileNav("Close")
          }
    }

  return (
    <>
      <div className="MainNavWrapper">
          <div className="Brand">
              <Link to="/portfolio/" onClick={() => handleNav("Home")}><p>Varad Sandeep Naik<span>.</span></p></Link>
          </div>

          <div className="NavWrapper">
              <Link to="/portfolio/" id={activeNav=="Home" ? "Active" : "notActive"} onClick={() => handleNav("Home")}>Home</Link>
              <Link to="/portfolio/Projects" id={activeNav=="Project" ? "Active" : "notActive"} onClick={() => handleNav("Project")}>Project</Link>
              <Link to="/portfolio/About" id={activeNav=="About" ? "Active" : "notActive"} onClick={() => handleNav("About")}>About</Link>
          </div>

          <div className="ContactWrapper">
              <Link to="/portfolio/Contact"><FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#24262f",}} /></Link>
          </div>

          <div className="MobileNavButton" onClick={() => handleMobileNav(activeMobileNav == "Close" ? "Open" : "Close")}>
            
            {activeMobileNav == "Close" ? <FontAwesomeIcon icon={faBarsStaggered} size="xl" style={{color: "#24252f",}} /> : <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#24262f",}} />}
            
          </div>

      </div>

      <div className="MobileNavWrapper" id={activeMobileNav === "Close" ? "notActiveMobileNav" : "ActiveMobileNav"} >

          <Link to="/portfolio/" id={activeNav=="Home" ? "Active" : "notActive"} onClick={() => {
            handleNav("Home");
            handleMobileNav("Close")
          }}>Home</Link>

          <Link to="/portfolio/Projects" id={activeNav=="Project" ? "Active" : "notActive"} onClick={() => {
            handleNav("Project");
            handleMobileNav("Close")
          }}>Project</Link>

          <Link to="/portfolio/About" id={activeNav=="About" ? "Active" : "notActive"} onClick={() => {
            handleNav("About");
            handleMobileNav("Close")
          }}>About</Link>

          <Link to="/portfolio/Contact" id={activeNav=="Contact" ? "Active" : "notActive"} onClick={() => {
            handleNav("Contact");
            handleMobileNav("Close")
          }}>Get in Touch</Link>

      </div>
        
    </>
  )
}

export default Navbar
