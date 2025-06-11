import React, {useState } from 'react'
import "./Section2.css"
import InfoCard from '../SpecialComponents/InfoCard';

const Section2 = () => {

    const Education = ["Amity University" , "Radcliffe School" , "WhiteHat JR"]

    const [compState , setCompState] = useState("Amity University");
    const [catState , setCatState] = useState("AmityUniversity");

    function handleListClick(element)
    {
        setCompState(element);
        setCatState(element.replaceAll(" ", ""))
    }

  return (
    <>
        <div className="MainSection2Wrapper">
            <h3>Education<span>.</span></h3>
            
            <div className="EducationWrapper">
                <div className="EducationHeaderWrapper">
                    <ul className='EducationHeaderUL'>
                        {Education.map((element,index) => 
                            <li className="EducationHeaderLI"key={index} onClick={() => handleListClick(element)}>
                                {element}
                            </li>
                        )}
                    </ul>
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
