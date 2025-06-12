import React from 'react'
import ProfilePicture from "./Assets/ProfilePicture.jpg"
import "./Contactsection.css"

const Contactsection = () => {
  return (
    <>
    
    <div className="ContactSectionMain">
        <div className="ContactSectionDetails">
            <h2>Get in Touch<span>.</span></h2>
            <p>
                Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
            </p>

            <div className="ContactButtonsWrapper">
                <a href="">varad0007@gmail.com</a>
                <a href="">+91 7087844331</a>
            </div>
        </div>

        <div className="ContactSectionImage">
            <img src={ProfilePicture} alt="Profile Picture" />
        </div>
    </div>
    
    </>
  )
}

export default Contactsection
