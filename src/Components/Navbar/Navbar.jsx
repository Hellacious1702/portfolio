import React , {useState} from 'react'
import "./Navbar.css";
import MailIcon from './Assets/Mail.png'

import { Link } from 'react-router-dom';


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
              <p>Varad Sandeep Naik</p>
          </div>

          <div className="NavWrapper">
              <Link to="/portfolio/" id={activeNav=="Home" ? "Active" : "notActive"} onClick={() => handleNav("Home")}>Home</Link>
              <Link to="/portfolio/Projects" id={activeNav=="Project" ? "Active" : "notActive"} onClick={() => handleNav("Project")}>Project</Link>
              <Link to="/portfolio/About" id={activeNav=="About" ? "Active" : "notActive"} onClick={() => handleNav("About")}>About</Link>
          </div>

          <div className="ContactWrapper">
              <button><img src={MailIcon} alt="" /></button>
          </div>
      </div>
        
    </>
  )
}

export default Navbar
