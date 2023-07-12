import "../css/footerstyles.css";
import React from 'react'
import { FaHome, FaPhone,FaMailBulk,FaGithub,FaLinkedin} from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                       <div>
                            <p> Sivaprakash Subramaniyam</p>
                            <p>No 18/A ,</p>
                            <p>Opp to Aishwarya Silks Cut,</p>
                            <p>Velliyangadu 1st Street,</p>
                            <p>PinCode:641604,</p>
                            <p>Tiruppur Dt</p>
                       </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 7708516203
                        </h4>

                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            sivaprakashsubramaniyam@gmail.com
                        </h4>

                    </div>

                </div>
                <div className="right">
                  <h4>About Me</h4>
                  <p>
                   Sivaprakash, Co Founder & CPO of Samatva.Ai @ Aayush
                  </p>
                  <p>
                  Exploring Experience in Startup Ecosystem and Aspiring Student Entrepreneur with Unique and Innovative Ideas.
                  </p>
                  <div className="social">
                   
                   <a href="https://github.com/sivaprakashsubramaniyam" target="_blank"><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                  <a href="https://www.linkedin.com/in/sivaprakash-subramaniyam-881453177/" target="_blank"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                  </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
