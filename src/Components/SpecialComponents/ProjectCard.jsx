import React from 'react'
import "./ProjectCard.css"

const ProjectCard = (props) => {

    return (
    <>

    {props.Project.map((element) => (

        <div className="ProjectCardWrapper">
            <h3>{element.ProjectName}</h3>


            {/* <ul className='ProjectCardWrapperUL'>
                {props.Project.Technologies.map((Telement,Tindex) => (
                    <li key={Tindex} className='ProjectCardWrapperLI'>{Telement}</li>
                ))}
            </ul> */}

            <ul className='ProjectCardWrapperUL'>
                <li className='ProjectCardWrapperLI'>HTML</li>
                <li className='ProjectCardWrapperLI'>CSS</li>
                <li className='ProjectCardWrapperLI'>JavaScript</li>
                <li className='ProjectCardWrapperLI'>ReactJS</li>
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
