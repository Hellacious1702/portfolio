import React from 'react'
import "./SectionProject.css"
import ProjectCard from '../SpecialComponents/ProjectCard'

const SectionProject = () => {

  const QRHungry = [{ ProjectName : "QRHungry" , ProjectDes : "QRhungry is your one-stop shop for creating QR codes that are as unique and flavorful as you are. Whether you're a business owner, marketer, or simply looking to add a creative touch to your personal projects, we empower you to generate codes that stand out and get noticed." , GithubLink : "https://github.com/Hellacious1702/QRhungry" , ProjectLink : "https://hellacious1702.github.io/QRhungry/" , Technologies : ["HTML" , "CSS" , "JavaScript" , "ReactJS"]}]
  
  const ShouldYou = [{ProjectName : "Culinary Canvas" , ProjectDes : "Culinary Canvas is a dynamic recipe web application built with ReactJS and styled using Tailwind CSS. It serves as a comprehensive portfolio project showcasing fundamental front-end development skills, including creating interactive user interfaces, ensuring responsive design across devices, and integrating external APIs for dynamic content delivery. This project demonstrates strong proficiency in component-based architecture and crafting intuitive, visually appealing user experiences for modern web applications." , GithubLink : "https://github.com/Hellacious1702/CulinaryCanvas" , ProjectLink : "https://hellacious1702.github.io/CulinaryCanvas/" , Technologies : ["HTML" , "TailwindCSS" , "JavaScript" , "ReactJS"]}]
  
  const Apple = [{ProjectName :"Apple Website Clone" , ProjectDes : "My inaugural React.js project involves engineering a high-fidelity replica of the iconic Apple India website. This challenging undertaking is instrumental in solidifying my understanding of component-based architecture, advanced CSS techniques, and responsive web design principles. It's a hands-on demonstration of my commitment to mastering modern front-end development by translating complex UI/UX into a seamless, interactive experience." , GithubLink : "https://github.com/Hellacious1702/apple-website-clone-reactJS" , ProjectLink : "https://hellacious1702.github.io/apple-website-clone-reactJS/" , Technologies : ["HTML" , "CSS" , "JavaScript" , "ReactJS"]}]
  
  const Password = [{ProjectName :"Quick Password Manager" , ProjectDes : "Developed a secure Basic Password Manager using HTML, CSS, and JavaScript, featuring a robust algorithm for generating custom-length passwords. It includes seamless local storage integration for persistent saving/retrieval and quick-copy functionality, with ongoing feature enhancements planned." ,GithubLink : "https://github.com/Hellacious1702/Quick-Password-Manager" , ProjectLink : "https://hellacious1702.github.io/Quick-Password-Manager/" , Technologies : ["HTML" , "CSS" , "JavaScript"]}]

  return (
    <>
    
      <div className="MainSectionProjectWrapper">
          <h3>Projects<span>.</span></h3>
          <div className="ProjectCardsWrapper">
              <div className="ProjectCards">
                <ProjectCard Project={QRHungry}/>
                <ProjectCard Project={Password}/>
              </div>
              <div className="ProjectCards" id='ProjectCards2'>
                <ProjectCard Project={Apple}/>
                <ProjectCard Project={ShouldYou}/>
              </div>
          </div>
          
      </div>
    
    </>
  )
}

export default SectionProject
