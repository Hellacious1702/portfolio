import React from 'react'
import "./ProjectCard.css"

const ProjectCard = (props) => {

    return (
    <>

    {props.Project.map((element) => (

        <div className="ProjectCardWrapper">
            <h3>{element.ProjectName}</h3>


            <ul className='ProjectCardWrapperUL'>
                {element.Technologies.map((Telement,Tindex) => (
                    <li key={Tindex} className='ProjectCardWrapperLI'>{Telement}</li>
                ))}
            </ul>

            <p >{element.ProjectDes}</p>

            <div className="ProjectCardWrapper-Buttons">
                <a href={element.GithubLink} target="_blank"><button id='GithubButton'>View Github</button></a>
                <a href={element.ProjectLink} target="_blank"><button id='ProjectButton'>View Project</button></a>
            </div>
        </div>

    ))}
    
    </>
  )
}

export default ProjectCard
