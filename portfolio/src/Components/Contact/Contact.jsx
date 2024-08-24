import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react'
import { Themecontext } from '../../App'
import './Contact.css'
const Contact = () => {
  const {darkmode,setDarkmode} = useContext(Themecontext);

    const form = useRef();
    const [done,setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7x5oqkb', 'template_esrur2k', form.current, {
        publicKey: 'p5LOMIHvEr78ROGZB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setDone(true);
    
  };
  return (
    <div className="contact" id="contact">
      
        <div className="awesome">
            <span style={darkmode?{color:'white'}:null}>Get in Touch</span>
            <span>Contact me...</span>
            <div className="blur" style={{background:"#C1F5FF", top:"15rem",left:"-17rem"}}>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type='name' name='user_name' placeholder='Name' className='user' required/>
                <input type='email' name='user_email' placeholder='Email' className='user' required/>
                <textarea name='message' className='user' placeholder='Message' 
                />
                <input type='submit' value="Send" className='button'/>
                <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                {done  && <span>Thanks for contacting me!</span>}
            </form>
        </div>
    </div>
  )
}

export default Contact