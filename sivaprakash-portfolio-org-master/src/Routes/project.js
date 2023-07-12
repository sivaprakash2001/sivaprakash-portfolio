import React from 'react'
import Commonimage from '../components/commonimage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Work from "../components/work.js"

function Project() {
  return (
    <div>
      <Navbar/>
      <Commonimage heading="PROJECTS." text="Some Of My Recent Works" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;
