import React from 'react'
import Commonimage from '../components/commonimage';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div>
      <Navbar/>
      <Commonimage heading="CONTACT." text="Leave me a mail"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;