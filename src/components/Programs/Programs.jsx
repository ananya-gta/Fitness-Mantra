import React from 'react'
import "./programs.css"
import {programsData} from "../../data/programsData";
import RIGHTARROW from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/* header of the programs section */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our </span>
            <span>trainer-led </span>
            <span className='stroke-text'>group classes</span>
        </div>
        
        {/* program cards */}
        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <small>{program.about}</small>
                    <span>{program.details}</span>
                    <div className="explore">
                        <span>Exlore here</span>
                        <img src={RIGHTARROW} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs