import React from 'react'
import Wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Reactimg from "@iconscout/react-unicons/icons/uil-react"
import './Footer.css'
const Footer = () => {
  const handleClick=()=>{
    const email = "akashbalaji594@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <span onClick={handleClick}>akashbalaji594@gmail.com</span>
            <div className="f-icons">
            <a href='https://github.com/AkashB45' target='_blank'><Github color="black" size="3rem" /></a>
            <a href='https://www.linkedin.com/in/akash-b-a92b30230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> <Linkedin color="navy" size="3rem" /></a>
            <a href='https://www.instagram.com/akashak_45?igsh=dHQ4ZGF3MXU2OHZ0' target='_blank'>    <Insta color="purple" size="3rem" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer