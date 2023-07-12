import "../css/Formstyle.css";
import React, { useState, useRef } from 'react';
import emailJs from "@emailjs/browser";
const Form = () => {
  let formValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    error: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  }
  const form = useRef();
  const [formData, setFormValues] = useState(formValues);
  const onChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setFormValues({ ...formData, [e.target.name]: e.target.value, error });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    emailJs.sendForm(
      "service_9spf8ye",
      "template_tolj5w7",
      form.current,
      "DUBb9_amn3C6K1S-Y"
    ).then(
      (result)=>{
        console.log(result.text);
        console.log("this is working");
      },
      (error)=>{
        console.log(error.text);
      }
    );
    setFormValues(formValues);
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input onChange={(e) => onChange(e)} name="name" type="text"  value={formData.name}/>
        <span style={{ color: "red" }}>{formData.error.name}</span>
        <label>Email</label>
        <input onChange={(e) => onChange(e)} name="email" type="email" value={formData.email} />
        <span style={{ color: "red" }}>{formData.error.email}</span>
        <label>Subject</label>
        <input onChange={(e) => onChange(e)} name="subject" type="text" value={formData.subject} />
        <span style={{ color: "red" }}>{formData.error.subject}</span>
        <label>Message</label>
        <textarea onChange={(e) => onChange(e)} name="message" rows="6" placeholder="Type Your Message here" value={formData.message}></textarea>
        <span style={{ color: "red" }}>{formData.error.message}</span>
        <button className="btn" type="submit">Submit</button>
      </form>     

    </div>
  )
}

export default Form
