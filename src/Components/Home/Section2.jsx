import React, {useState } from 'react'
import "./Section2.css"
import InfoCard from '../SpecialComponents/InfoCard';

const Section2 = () => {

    const Education = ["Amity University" , "Radcliffe School" , "WhiteHat JR" , "Scaler Academy"]

    const [activeID , setActiveID] = useState("AmityUniversity")

    const [compState , setCompState] = useState("Amity University");
    const [catState , setCatState] = useState("AmityUniversity");

    function handleListClick(element)
    {
        setCompState(element);
        setCatState(element.replaceAll(" ", ""))
        setActiveID(element.replaceAll(" ", ""))
    }

  return (
    <>
        <div className="MainSection2Wrapper">
            <h3>Education<span>.</span></h3>
            
            <div className="EducationWrapper">
                <div className="EducationHeaderWrapper">
                    
                        {Education.map((element,index) => 
                            <ul className='EducationHeaderUL' id={compState === element ? "ActiveUL" : "notActiveUL"} >
                                <li className="EducationHeaderLI"key={index} id={compState === element ? "Active" : "notActive"} onClick={() => handleListClick(element)}>
                                    {element}
                                </li>
                            </ul>
                        )}
                    
                </div>

                <div className="EducationInfoWrapper">
                        <InfoCard Comp={compState} Cat={catState} />
                </div>
            </div>
            
            
            
        </div>
    </>
  )
}

export default Section2
