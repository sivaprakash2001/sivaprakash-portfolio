import "../css/projectCardstyle.css";
import React from 'react'

import { NavLink } from "react-router-dom";
const ProjectCards = (props) => {
    return (
        
        <div className="project-card">
        <img src={props.imgsrc} alt="true" />
        <h2 className="project-title">{props.title} </h2>
        <div className="pro-details">
            <p>{props.text} </p>
            <div className="pro-btns">
                <a href={props.view} target='_blank' className="btn">View</a>
                
            </div>
        </div>
    </div>
    )
}

export default ProjectCards
