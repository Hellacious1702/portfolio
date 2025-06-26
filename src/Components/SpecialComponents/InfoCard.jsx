import React, { useEffect, useState } from 'react'
import "./InfoCard.css"

const InfoCard = (props) => {

    const [details , setDetails] = useState();

    useEffect(() => {
        setDetails(props.Cat);
    }, [props.Cat])
    
    let Course = "";
    let Tenure = "";
    let CourseDetails = "";

    if(details == "AmityUniversity")
    {
        Course = "Bachelor of Computer Application"
        Tenure = "2023 - 2026 (ongoing)"
        CourseDetails = "Currently, I am pursuing a Bachelor of Computer Applications (BCA) at Amity University Mumbai. This program is instrumental in building my strong foundation in core computer science principles, software development methodologies, and various essential programming languages. The curriculum places a significant emphasis on both theoretical understanding and practical, hands-on application. This approach is key to equipping me with critical analytical and robust problem-solving skills. Ultimately, this comprehensive education is preparing me for a successful and impactful career within the dynamic and ever-evolving technology sector."
   
    }else if(details == "RadcliffeSchool")
    {
        Course = "CBSE Student"
        Tenure = "2019 - 2022 (Passed out)"
        CourseDetails = "Successfully completed my secondary and higher secondary education at Radcliffe School, achieving 80.16% in my 10th-grade board examinations and 76.8% in my 12th-grade board examinations. My tenure at the school fostered comprehensive academic growth and the development of essential foundational skills, preparing me for higher education and future challenges."
    
    }else if(details == "WhiteHatJR")
    {
        Course = "JavaScript Web Application Design"
        Tenure = "2020"
        CourseDetails = "Completed a comprehensive program in Application Design and Development for Basic and Foundation of JavaScript, earning certification as a Certified Web Game Developer. This course provided fundamental skills in JavaScript programming and logical thinking, directly applicable to creating interactive web-based applications and games."
    }else if(details == "ScalerAcademy")
    {
        Course = "Certified React Developer"
        Tenure = "2025"
        CourseDetails = "I successfully completed the comprehensive React JS Course by Scaler, diving deep into the world of front-end development. This free online certification provided a structured path to mastering React JS, one of the most popular JavaScript libraries for building dynamic and responsive user interfaces. Throughout the course, I engaged with 48 video tutorials and 10 modules , further solidifying my understanding through 10 challenging practical exercises. The expertly crafted modules helped me quickly learn and significantly elevate my web development skills. The course was conducted by Mrinal Bhattacharya"
    }


  return (
    <>
        
        <div className="InfoWrapper">
            <div className="InfoWrapper-header">
                <h5>{Course}<span> @ {props.Comp}</span></h5>
                <p id='InfoDate'>{Tenure}</p>
            </div>
            <p id='infoDetails'>{CourseDetails}</p>
        </div>
    </>
  )
}

export default InfoCard
