import React from 'react'
import "./AboutMyStack.css"

const AboutMyStack = () => {

    const stack = [
        {
            "Language" : "HTML5" ,
            "Description" : "With HTML, I expertly structure the foundational content of all web pages, defining elements from text and images to forms and interactive components. It's the essential backbone for every web application, allowing me to build semantic and accessible interfaces. My proficiency ensures a clean, organized, and robust blueprint for any digital experience, laying the groundwork for captivating user interfaces and seamless content presentation.",
            "Type" : "Structuring Language"
        } ,
        {
            "Language" : "CSS" ,
            "Description" : "Using CSS, I design and implement visually striking, responsive user interfaces. I meticulously control layouts, typography, and aesthetics, integrating animations for enhanced engagement. My expertise ensures a polished, professional look that adapts seamlessly across all devices. I transform raw designs into intuitive and beautiful web experiences, prioritizing both form and function to captivate users.",
            "Type" : "Styling Language"
        } ,
        {
            "Language" : "JavaScript" ,
            "Description" : "Leveraging JavaScript, I develop dynamic and interactive web applications. I implement complex client-side logic, manage application state, and integrate seamlessly with RESTful APIs for real-time data. My expertise creates engaging user interfaces that respond intuitively to user actions, ensuring a fluid and high-performance experience. It's crucial for modern web solutions.",
            "Type" : "Scripting Language"
        } ,
        {
            "Language" : "ReactJS" ,
            "Description" : "Leveraging React.js, I engineer dynamic and high-performance user interfaces, utilizing its component-based architecture for efficient development and reusability. I expertly manage complex application states and integrate seamlessly with APIs. My proficiency delivers highly interactive and responsive web applications, ensuring scalable, maintainable, and visually appealing user experiences for modern digital solutions.",
            "Type" : "JavaScript Framework"
        } ,
        {
            "Language" : "Tailwind CSS" ,
            "Description" : "With Tailwind CSS, I rapidly build highly customized and responsive user interfaces. Its utility-first approach accelerates development, allowing direct styling in HTML. My proficiency ensures clean, maintainable, and scalable stylesheets. I create unique, visually stunning, and performant web applications efficiently, streamlining design control for modern projects.",
            "Type" : "CSS Framework"
        } ,
        {
            "Language" : "MySql" ,
            "Description" : "Leveraging MySQL, I design and manage robust relational databases, forming the data backbone for dynamic web applications. I efficiently structure schemas and write optimized queries, ensuring data integrity and security. My proficiency allows for seamless data storage, retrieval, and manipulation, critical for supporting complex backend operations and guaranteeing reliable, scalable data management in diverse projects.",
            "Type" : "Database"
        },
        {
            "Language" : "PHP" ,
            "Description" : "Leveraging PHP, I develop robust server-side solutions that power dynamic web applications. I expertly handle form submissions, manage user sessions, and facilitate seamless database interactions. My proficiency includes building RESTful APIs and complex backend logic, ensuring secure and efficient data processing. This allows me to create powerful, highly functional web platforms.",
            "Type" : "Server-Side Scripting Language"
        }
    ]


  return (
    <>
    
    <div className="AboutMyStackSectionWrapper">
        <h3>My Stack<span>.</span></h3>
        
        {stack.map((element,index) => (
            <div className="MainStackSectionWrapper">
                <div className="StackSeries">
                    <h2>{"0" + (index+1)}</h2>
                </div>
                <div className="StackDetailWrapper">
                    <p id='StackType'>{element.Type}</p>
                    <h3>{element.Language}</h3>
                    <p>{element.Description}</p>
                </div>
            </div>
        ))}
        
    </div>
    
    </>
  )
}

export default AboutMyStack
