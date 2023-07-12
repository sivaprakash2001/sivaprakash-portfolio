import "../css/heroStyles.css"; 
import React from 'react'
import Intro from "../assests/bgimage.png";
import {Link} from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            
            <img className="into-img" src={Intro} alt="IntroImg"/>
        </div>
      <div className="content">
        <p>HI,I'M SIVAPRAKASH</p>
        <h1>Co Founder & CPO of Samatva.Ai @ Aayush</h1>
        <div style={{marginTop:"50px"}}>
        <Link to="/Project" className="btn">Projects</Link>
        <Link to="/Contact" className=" btn btn-light">Contact</Link>
      </div>
      </div>
      
    </div>
  )
}

export default Heroimage
