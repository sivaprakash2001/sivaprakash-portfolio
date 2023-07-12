import "../css/projectCardstyle.css";
import React from 'react'

import ProjectCards from "./ProjectCards";
import ProjectCardData from "./WorkData";
const Work = () => {
    return (
        <div className="work-container">
          
            <div className="project-container">
                {
                    ProjectCardData.map((val, index) => {
                        return (
                            <ProjectCards
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                text={val.text}
                                view={val.view}
                                 />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work;

// <div className="project-card">
//                     <img src={Img1} alt="image" />
//                     <h2 className="project-title">Qurey System </h2>
//                     <div className="pro-details">
//                         <p>This is a Project I Have Done in Guvi Institute </p>
//                         <div className="pro-btns">
//                             <NavLink to="url.com" className="btn">View</NavLink>
//                             <NavLink to="url.com" className="btn">Source</NavLink>
//                         </div>
//                     </div>
//                 </div>