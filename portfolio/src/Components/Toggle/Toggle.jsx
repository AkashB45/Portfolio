import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import './Toggle.css'
import { useContext } from 'react'
import { Themecontext } from '../../App'
const Toggle = () => {
    const {darkmode,setDarkmode} = useContext(Themecontext);
    const toggleTheme = ()=>{
        setDarkmode(!darkmode)
    }
  return (
    <div className="toggle" onClick={toggleTheme} >
        <Moon/>
        <Sun/>
        <div className="t-button" style={darkmode?{left:'1.4rem'}:null}>
        </div>
    </div>
  )
}

export default Toggle