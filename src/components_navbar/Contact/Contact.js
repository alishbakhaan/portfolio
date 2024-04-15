import React from "react";
import '../Contact/Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Contact = () =>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sqsv0u9', 'template_zq2j3wd', form.current, 
      {
        publicKey: 'YQliBwSRpj75fwGVk',
      })
      .then((result) => {
          console.log('SUCCESS!');
        }, (error) => {
          console.log('FAILED...', error.text);
        },);
  };
    return(
<div className="contact-form">
  <div className="c-left">
    <div className="awesome">
      <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
      <span>Contact Me</span>
      <div className="blur c-blur1" style={{background: "#ABF1FF94"}}></div>
    </div>
  </div>
  <div className="c-right">
     <form ref={form} onSubmit={sendEmail}>
     <input type="text" name="from_name" className="user" placeholder="Name"/>
     <input type="number" name="user_number" className="user" placeholder="PhoneNumber"/>
     <input type="email" name="user_email" className="user" placeholder="Email"/>
     <textarea name="message" className="user" placeholder="Message"/>
     <input type="submit" value="Send" className="button"/>
     </form>
     <div className="blur c-blur2" style={{background: "var(--purple)"}}></div>
  </div>
</div>
    )
}

export default Contact;