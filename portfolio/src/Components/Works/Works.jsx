import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Reactpng from "../../img/react.png";
import Bootstrap from "../../img/bootstrap.png";
import Tailwind from "../../img/tailwind.png";
import Restapi from "../../img/restapi.png";
import Mongodb from "../../img/mongodb.png";
import { useContext } from 'react'
import { Themecontext } from '../../App'
import {motion} from 'framer-motion'
const Works = () => {
    const {darkmode,setDarkmode} = useContext(Themecontext);
    const handleClick=()=>{
        const email = "akashbalaji594@gmail.com";
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
      }
  return (
    <div className="works">
            <div className="awesome">
            <span style={darkmode?{color:'white'}:null}>Works for All these</span>
            <span>Emerging Technologies</span>
            <span>
            Focusing on performance and speed, our Full-stack development services ensure your website loads quickly and runs smoothly , providing users with the best possible experience
            </span>
            <button className="button s-button" onClick={handleClick}>
                Hire me
            </button>
            <div className="blur" style={{background:"#C1F5FF", top:"15rem",left:"-17rem"}}>
            </div>
        </div>
        <div className="w-right">
            <motion.div 
            initial={{rotate:95}}
            whileInView={{rotate:0}}
            viewport={{margin:'-45px'}}
            transition={{duration:3.5,type:'spring'}}
            className="w-maincircle">
                <div className="w-subcircle">
                    <img src={Reactpng} alt="" />
                </div>
                <div className="w-subcircle">
                    <img src={Mongodb} alt="" />
                </div>
                <div className="w-subcircle">
                    <img src={Bootstrap} alt="" />
                </div>
                <div className="w-subcircle">
                    <img src={Restapi} alt="" />
                </div>
                <div className="w-subcircle">
                    <img src={Tailwind} alt="" />
                </div>
            </motion.div>
            <div className="w-backcircle bluecircle" ></div>
            <div className="w-backcircle yellowcircle" ></div>
        </div>
    </div>
  )
}

export default Works