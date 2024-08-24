import React from 'react'
import './Services.css'
import Card from '../Cards/Card'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './ResumeF.pdf'
import { useContext } from 'react'
import { Themecontext } from '../../App'
import {motion} from 'framer-motion'
const Services = () => {
  const {darkmode,setDarkmode} = useContext(Themecontext);
  const transition = {duration:2,type:'spring'};


  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span style={darkmode?{color:'white'}:null}>My awesome</span>
            <span>Services</span>
            <span>
            Focusing on performance and speed, our Full-stack development services ensure your website loads quickly and runs smoothly, providing users with the best possible experience
            </span>
            <a href={Resume} download>
            <button className="button s-button">
                Download CV
            </button>
            </a>
            <div className="blur" style={{background:"#C1F5FF", top:"15rem",left:"-17rem"}}>
            </div>
        </div>
        <div className="cards">
        <div className="blur" style={{background:"rgb(238 210 255)", top:"8rem",left:"17rem"}}>
        </div>
            <motion.div 
            transition={transition}
            initial={{left:'80%'}}
            whileInView={{left:'14rem'}}
            style={{left:'14rem'}}>
            <Card  emoji={Heartemoji} heading={'Frontend'}
            detail={"HTML, CSS,Javascript,React"}/>
            </motion.div>
            <motion.div 
            transition={transition}
            initial={{left:'-10rem'}}
            whileInView={{left:'-4rem'}}
            style={{left:'-4rem',top:'12rem'}}>
            <Card  emoji={Glasses} heading={'Backend'}
            detail={"SpringBoot,RestAPI,SQL"}/>
            </motion.div>
            <motion.div 
            transition={transition}
            initial={{left:'60%'}}
            whileInView={{left:'12rem'}}
            style={{left:'12rem',top:'19rem'}}>
            <Card  emoji={Humble} heading={'Full-stack'}
            detail={"MERN stack development"}/>
            </motion.div>
            
        </div>
    </div>
  )
}

export default Services