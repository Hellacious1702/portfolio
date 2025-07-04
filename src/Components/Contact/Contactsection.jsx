import React from 'react'
import ProfilePicture from "./Assets/ProfilePicture.jpg"
import "./Contactsection.css"

import CV from './Assets/File/Varad Sandeep Naik Resume.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck , faSquarePhone , faFile } from '@fortawesome/free-solid-svg-icons'

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
                <div className="ContactCon">
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck} size='2xl' style={{color: "#24262f",}}/>
                    <a href='mailto:varad0007@gmail.com'>varad0007@gmail.com</a>
                </div>

                <div className="ContactCon">
                    <FontAwesomeIcon icon={faSquarePhone} size='2xl' style={{color: "#24262f",}}/>
                    <a href=""> +91 7087844331</a>
                </div>

                <div className="ContactCon">
                    <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "#24262f",}} />
                    <a href={CV} download="Varad Sandeep Naik CV"> Resume/CV</a>
                </div>
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
