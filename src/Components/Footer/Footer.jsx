import React from 'react'
import "./Footer.css"

import InstagramIcon from "./Assets/instagram.png"
import LinkedinIcon from "./Assets/linkedin.png"
import GithubIcon from "./Assets/github.png"

const Footer = () => {
  return (
    <>
        <div className="MainFooterWrapper">
            <div className="MainFooterTop">
                <div className="FooterTop1">
                    <a href="">Home</a>
                    <a href="">Project</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>

                <div className="FooterTop2">
                    <img src={InstagramIcon} alt="" />
                    <img src={LinkedinIcon} alt="" />
                    <img src={GithubIcon} alt="" />
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
