import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { useContext } from 'react'
import { Themecontext } from '../../App'
import { Link } from 'react-scroll';

const Navbar = () => {
    const {darkmode,setDarkmode} = useContext(Themecontext);
    const handleClick=()=>{
        const email = "akashbalaji594@gmail.com";
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
      }
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Akash</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to={'Navbar'} smooth={true}activeClass={true}>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to={'Services'} smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to={'About'} smooth={true}>
                    <li>About</li>
                    </Link>
                    <Link spy={true} to={'Projects'} smooth={true}>
                    <li>Projects</li>
                    </Link>
                    <Link spy={true} to={'contact'} smooth={true}>
                    <li>Contact</li>
                    </Link>
                    
                </ul>
            </div>
            <button className="button n-button" onClick={handleClick}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar