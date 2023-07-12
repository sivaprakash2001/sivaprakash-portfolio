import "../css/AboutContentstyle.css";
import React from 'react'
// import { Link } from "react-router-dom";
import {FaTrophy} from "react-icons/fa";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1 >Skills</h1>
                <p>Product Management </p>
                <p>Business Model Canvas</p> 
                <p>Pitch Deck</p> 
                <p>Excel • SQL • Tableau </p>
                <p>Digital Marketing</p> 
                <p>Brand Consulting</p>
                <p>Social Media Marketing</p>
                <p>Search Engine Optimization</p>
                <a href="https://drive.google.com/file/d/1bGTMxXjtG97XCUgYjg9o-IfBPrmMtAvM/view?usp=sharing" target='_blank' className="btn">View My CV</a>
                    
                
            </div>
           
            <div className="right">
            <h1 >Awards and Achivements</h1>
            <br/>
                
             <p>  <FaTrophy size={20} style={{color:"#fff"}}/> Global Student Entrepreneur Award </p><br/>
          <p> <FaTrophy size={20} style={{color:"#fff"}}/> 3M Young Innovators Challenge Award </p><br/>
          <p> <FaTrophy size={20} style={{color:"#fff"}}/> Dr APJ Abdul Kalam Award </p><br/>
          <p> <FaTrophy size={20} style={{color:"#fff"}}/> 7+ Best Manager Awards </p><br/>
          <p> <FaTrophy size={20} style={{color:"#fff"}}/> National Science and Technology Fair Award winner</p>
        
            </div>
        

        </div>
    )
}

export default AboutContent
{/* <div className="top">
                        <img src={Reactjs} className="img" alt="true" />
                    </div>
                    <div className="bottom">
                        <img src={Nodejs} className="img" alt="true" />
                    </div> */}