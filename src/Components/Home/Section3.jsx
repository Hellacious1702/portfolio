import React from 'react'
import "./Section3.css"

const Section3 = () => {

    const Skills = ["WebDesign" , "Frontend" , "SoftSkills"]
    const WebDesign = ["UI/UX Design" , "Responsive Design" , "Wireframing" , "User Research"]
    const Frontend = ["Javascript" , "ReactJS" , "HTML5" , "Cascading Style Sheet"]
    const SoftSkills = ["Effective communication" , "Collaboration" , "Commitment" , "Quick Learner"]

  return (
    <>
        <div className="MainSection3Wrapper">
            <h3>Skills<span>.</span></h3>
            <div className="SkillsWrapper">
                
                <div className="Skills">
                    <h4>Web Design</h4>
                    <ul>
                        {WebDesign.map((element,index) => <li key={index}>{element}</li>)}
                    </ul>
                </div>

                <div className="Skills">
                    <h4>Frontend</h4>
                    <ul>
                        {Frontend.map((element,index) => <li key={index}>{element}</li>)}
                    </ul>
                </div>

                <div className="Skills">
                    <h4>Soft Skills</h4>
                    <ul>
                        {SoftSkills.map((element,index) => <li key={index}>{element}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section3
