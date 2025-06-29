import React from 'react'
import "./ProjectDisplaySection.css"
import Project1 from "./Assets/1.png"
import Project2 from "./Assets/2.png"
import Project3 from "./Assets/3.png"
import Project4 from "./Assets/4.png"
import Project5 from "./Assets/5.png"
import Project6 from "./Assets/6.png"

const ProjectDisplaySection = () => {


    const Projects = [
        {
            "Image" : Project1,
            "Title" : "QRHungry",
            "Description" : "QRhungry is your one-stop shop for creating QR codes that are as unique and flavorful as you are. Whether you're a business owner, marketer, or simply looking to add a creative touch to your personal projects, we empower you to generate codes that stand out and get noticed.",
            "Link" : "https://hellacious1702.github.io/QRhungry/"
        } , 
        {
            "Image" : Project6,
            "Title" : "Culinary Canvas",
            "Description" : "Culinary Canvas is a dynamic recipe web application built with ReactJS and styled using Tailwind CSS. It serves as a comprehensive portfolio project showcasing fundamental front-end development skills, including creating interactive user interfaces, ensuring responsive design across devices, and integrating external APIs for dynamic content delivery. This project demonstrates strong proficiency in component-based architecture and crafting intuitive, visually appealing user experiences for modern web applications.",
            "Link" : "https://hellacious1702.github.io/CulinaryCanvas/"
        } ,
        {
            "Image" : Project2,
            "Title" : "Apple Website Clone",
            "Description" : "My inaugural React.js project involves engineering a high-fidelity replica of the iconic Apple India website. This challenging undertaking is instrumental in solidifying my understanding of component-based architecture, advanced CSS techniques, and responsive web design principles. It's a hands-on demonstration of my commitment to mastering modern front-end development by translating complex UI/UX into a seamless, interactive experience.",
            "Link" : "https://hellacious1702.github.io/apple-website-clone-reactJS/"
        } ,
        {
            "Image" : Project3,
            "Title" : "ShouldYou",
            "Description" : "Developed a foundational React.js project to create an interactive 'Yes/No Oracle' game. This application served as a practical exercise in mastering core React concepts such as component hierarchy, state management, and event handling, effectively illustrating the creation of dynamic user interfaces that respond to user queries with randomized, insightful answers.",
            "Link" : "https://hellacious1702.github.io/ShouldYou/"
        } , 
        {
            "Image" : Project4,
            "Title" : "University Demo Website",
            "Description" : "Developed a University Demo Website using HTML, CSS, and JavaScript. This foundational web development project meticulously showcases front-end design, responsive layout, and structured web experiences. Hosted on GitHub Pages, it effectively demonstrates core coding and deployment proficiency.",
            "Link" : "https://hellacious1702.github.io/University-Demo-Webiste/"
        } ,
        {
            "Image" : Project5,
            "Title" : "Global Search Handle",
            "Description" : "Developed an intuitive Web Search Simplifier with HTML, CSS, and JavaScript. It streamlines content discovery: users input queries and select platforms via dropdown for direct searching. This project enhances convenience and showcases core front-end development capabilities.",
            "Link" : "https://hellacious1702.github.io/Global-Search-Handle/"
        }
    ]


  return (
    <>
    
    {Projects.map((element,index) => (
        <div className="ProjectDisplayWrapper">
            <img src={element.Image}/>
            <div className="ProjectDetailsWrapper">
                <div className="ProjectDetails">
                    <h3>{element.Title}.</h3>
                    <p>{element.Description}</p>
                </div>
                <div className="ProjectButtons">
                    <a href={element.Link} target='_blank'><button>View Project</button></a>
                </div>
            </div>
        </div>
    ))}

    

    </>
  )
}

export default ProjectDisplaySection
