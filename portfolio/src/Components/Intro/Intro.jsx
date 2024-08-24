import React from 'react'
import '../Intro/Intro.css'
import '../../img/github.png'
import '../../img/github.png'
import Github from  '../../img/github.png'
import Instagram from  '../../img/instagram.png'
import Linkedin from  '../../img/linkedin.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDev from '../FloatingDev/FloatingDev'
import { useContext } from 'react'
import { Themecontext } from '../../App'
import {motion} from 'framer-motion'
const Intro = () => {
  const {darkmode,setDarkmode} = useContext(Themecontext);
  const transition = {duration:2,type:'spring'};
  const handleClick=()=>{
    const email = "akashbalaji594@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }
  return (
    <div className="intro" id='Home'>
        <div className="i-left">
            <div className="i-name">
                <span style={darkmode?{color:'white'}:null}>Hey! I am</span>
                <span>Akash Balaji</span>
                <span> I am an enthusiastic IT student with a passion for leveraging
technology to solve real-world challenges. Proficient in Full stack development with a strong foundation in programming
</span>
            </div>
            <button className="button i-button" onClick={handleClick}>
                Hire Me
            </button>
            <div className="i-icons">
               <a href='https://github.com/AkashB45' target='_blank'> <img src={Github} alt="" /></a>
               <a href='https://www.linkedin.com/in/akash-b-a92b30230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> <img src={Linkedin} alt="" /></a>
               <a href='https://www.instagram.com/akashak_45?igsh=dHQ4ZGF3MXU2OHZ0' target='_blank'> <img src={Instagram} alt="" /></a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
             src={glassesimoji} alt="" />
            <motion.div 
            className="floating-dev" 
            transition={transition}
            initial={{left:'72%',top:'-4%'}}
            whileInView={{left:'60%'}}
            style={{top:'-4%',left:'60%'}}>
              <FloatingDev  image={crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div  className="floating-dev"
            transition={transition}
            initial={{left:'10rem',top:'18.3rem'}}
            whileInView={{left:'4.9rem'}}
            style={{top:'18.3rem',left:'4.9rem'}}>
              <FloatingDev  image={thumbup} txt1="Premium Design" txt2=""/>
            </motion.div>
            <div className="blur" style={{background:"rgb(238 210 255)"}}>
            <div className="blur" style={{background:"#C1F5FF", top:"18rem",left:"-19rem"}}>
            </div>
        </div>
</div>
    </div>
  )
}

export default Intro