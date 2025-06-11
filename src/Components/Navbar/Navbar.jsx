import React from 'react'
import "./Navbar.css";
import MailIcon from './Assets/Mail.png'

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div className="MainNavWrapper">
          <div className="Brand">
              <p>Varad Sandeep Naik</p>
          </div>

          <div className="NavWrapper">
              <Link to="/">Home</Link>
              <Link to="/Projects">Project</Link>
              <Link to="/About">About</Link>
          </div>

          <div className="ContactWrapper">
              <button><img src={MailIcon} alt="" /></button>
          </div>
      </div>
        
    </>
  )
}

export default Navbar
