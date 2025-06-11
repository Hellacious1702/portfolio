import React from 'react'
import "./Footer.css"

import InstagramIcon from "./Assets/instagram.png"
import LinkedinIcon from "./Assets/linkedin.png"
import GithubIcon from "./Assets/github.png"

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="MainFooterWrapper">
            <div className="MainFooterTop">
                <div className="FooterTop1">
                    <Link to="/">Home</Link>
                    <Link to="/Project">Project</Link>
                    <Link to="/About">About</Link>
                    <Link to="/ontact">Contact</Link>
                </div>

                <div className="FooterTop2">
                    <a href="https://www.instagram.com/varad5878/" target='_blank'><img src={InstagramIcon}/></a>
                    <a href="https://www.linkedin.com/in/varadnaik/" target='_blank'><img src={LinkedinIcon}/></a>
                    <a href="https://github.com/Hellacious1702" target='_blank'><img src={GithubIcon}/></a>
                </div>
            </div>

            <div className="MainFooterDown">
                <div className="FooterDown1">
                    <div className="FooterDown1-info">
                        <p>Intereseted in working together<span>?</span></p>
                    </div>
                    <div className="FooterDown1-Buttons">
                        <button id='Getin'>Get in Touch</button>
                        <button id='Projects'>Browse Projects</button>
                    </div>
                </div>

                <div className="FooterDown2">
                    <p>©2025 All Rights Reserved.</p>
                    <p>Made with 💜 by Varad Sandeep Naik</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
