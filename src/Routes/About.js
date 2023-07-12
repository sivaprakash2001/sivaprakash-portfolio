import React from 'react'
import AboutContent from '../components/AboutContent'
import Commonimage from '../components/commonimage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function About(){
  return (
    <div>
      <Navbar/>
      <Commonimage heading="ABOUT ME." text="Here See the Skills and Knowledge I Have"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
