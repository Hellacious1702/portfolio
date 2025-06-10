import React from 'react'
import ProfilePicture from "./Assets/ProfilePicture.jpg"
import "./Section1.css"

const Section1 = () => {
  return (
    <>
        <div className="MainSection1Wrapper">
            <div className="MainWrapper1">
                <p>Hey, I'm Varad 👋🏻</p>
                <h1><span>Front</span>end <br />Developer</h1>
                <p>I'm a frontend developer based in Navi Mumbai, I'll help you <br /> build beautiful websites your users will love.</p>
                <div className="MainWrapper1-Buttons">
                        <button id='Getin'>Get in Touch</button>
                        <button id='Projects'>Browse Projects</button>
                    </div>
            </div>

            <div className="MainWrapper2">
                <img src={ProfilePicture}/>
            </div>
        </div>
    </>
  )
}

export default Section1
