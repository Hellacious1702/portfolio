import React from 'react'
import "./Navbar.css";
import MailIcon from './Assets/Mail.png'

const Navbar = () => {
  return (
    <>
      <div className="MainNavWrapper">
          <div className="Brand">
              <p>Varad Sandeep Naik</p>
          </div>

          <div className="NavWrapper">
              <a href="">Home</a>
              <a href="">Project</a>
              <a href="">About</a>
          </div>

          <div className="ContactWrapper">
              <button><img src={MailIcon} alt="" /></button>
          </div>
      </div>
        
    </>
  )
}

export default Navbar
